import React, { useState, useEffect, useRef } from 'react';
import { ethers } from 'ethers';
import { Client, useClient } from '@xmtp/react-sdk';
import { ConversationContainer } from './ConversationContainer';
import { AppStores, cn } from '@/lib';
import { AppButton, TextH, TextP } from '@/comps';
import { BiChevronLeft } from 'react-icons/bi';
import { getEnv, loadKeys, storeKeys, wipeKeys } from './_store';
import { xclient } from '@/ahatx/xmtpClient';

type IProps = {
  wallet: string;
  env?: string;
  onLogout: VoidFunction;
  isContained: boolean;
  isConsent: boolean;
};

export default function Home(props: IProps) {
  const { client, error, isLoading, initialize, disconnect } = useClient();
  const [loading, setLoading] = useState(false);
  const store = AppStores.useChat();
  // const [selectedConversation, setSelectedConversation] = useState(null);
  // const [signer, setSigner] = useState();

  useEffect(() => {
    if (store.web3Wallet) {
      store.update({ isConnected: true });
    }
    if (client && !store.isOnNetwork) {
      store.update({ isOnNetwork: true });
    }
    if (store.signer && store.isOnNetwork) {
      initXmtpWithKeys();
    }
  }, [props.wallet, store.signer, client]);

  const connectWallet = async () => {
    console.log('Connect am');
    if (typeof window.ethereum !== undefined) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        // const provider = new ethers.BrowserProvider(window.ethereum);
        // .providers.Web3Provider(window.ethereum);
        const providerx = new ethers.CloudflareProvider();
        // .providers.Web3Provider(window.ethereum);
        const signer = await providerx.getSigner();
        store.update({ signer: signer, isConnected: true });
      } catch (error) {
        console.error('User rejected request', error);
      }
    } else {
      console.error('Metamask not found');
    }
  };

  const getAddress = async (
    signer: { getAddress: () => any; getAddresses: () => [any] | PromiseLike<[any]> } | undefined
  ) => {
    try {
      if (signer && typeof signer.getAddress === 'function') {
        return await signer.getAddress();
      }
      if (signer && typeof signer.getAddresses === 'function') {
        //viem
        const [address] = await signer.getAddresses();
        return address;
      }
      return null;
    } catch (e) {
      console.log(e);
    }
  };

  // const createNewWallet = async () => {
  //   const newWallet = ethers.Wallet.createRandom();
  //   console.log('Your address', newWallet.address);
  //   setSigner(newWallet);
  //   setIsConnected(true);
  //   setIsWalletCreated(true); // Set isWalletCreated to true when a new wallet is created
  // };

  const initXmtpWithKeys = async () => {
    const options = { env: props.env ? props.env : getEnv() };
    const address = store.web3Wallet;
    // const address = store.web3Wallet;

    if (!address) return;
    // xclient();
    let keys = loadKeys(address);

    // if (!keys) {
    //   keys = await Client.getKeys(signer, {
    //     ...options,
    //     skipContactPublishing: true,
    //     persistConversations: false,
    //   });
    //   storeKeys(address, keys!);
    // }
    let currKey = loadKeys(address) as Uint8Array;
    // const currKey = getState.keys.get(address!);
    // let keys;

    // if (!getState.keys.has(address!)) {
    if (!currKey) {
      // let keys = await Client.getKeys(signer, {
      try {
        currKey = await Client.getKeys(store.signer, {
          env: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
          skipContactPublishing: true,
          persistConversations: false,
        });
        storeKeys(address, currKey);
        store.update({
          // keys: getState.keys.set(address!, keys),
          newKeys: currKey,
        });
        storeKeys(address, currKey);
      } catch (error) {
        console.log('client getKeys', error);
      }
    }

    setLoading(true);

    try {
      await initialize({
        keys: currKey,
        options: {
          env: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
          persistConversations: true,
          skipContactPublishing: true,
          // privateKeyOverride: keys,
        },
        signer: store.signer,
      });
    } catch (error) {
      console.log('client initialize', error);
    }
  };

  const handleLogout = async () => {
    wipeKeys(store.web3Wallet);
    console.log('wipe', store.web3Wallet);
    store.clear();
    await disconnect();
    if (typeof props.onLogout === 'function') {
      props.onLogout();
    }
  };

  return (
    <>
      {store.showChat && (
        <div
          style={{
            position: props.isContained ? 'relative' : 'fixed',
            bottom: props.isContained ? '0px' : '80px',
            right: props.isContained ? '0px' : '20px',
            width: props.isContained ? '100%' : '300px',
            height: props.isContained ? '100%' : '400px',
            border: props.isContained ? '0px' : '1px solid #ccc',
          }}
          className={
            'bg-background rounded-md  border overflow-hidden flex flex-col z-50' +
            (store.isOnNetwork ? 'expanded' : '')
          }
        >
          {store.isConnected && (
            <AppButton variant={'destructive'} onClick={handleLogout}>
              Logout
            </AppButton>
          )}
          <hr />
          {store.isConnected && store.isOnNetwork && (
            <div className="p-1">
              <div
                className={`flex justify-center items-center 
                bg-none border-none w-auto m-0`}
              >
                {store.isOnNetwork && store.selectedConversation && (
                  <BiChevronLeft
                    className={'cursor-pointer text-lg'}
                    onClick={() => {
                      store.update({ selectedConversation: null });
                    }}
                  />
                )}
                <TextH v="h5">Conversations</TextH>
              </div>
            </div>
          )}

          <div className={'flex-grow overflow-y-auto'}>
            {!store.isConnected && (
              <div className={`flex justify-center flex-col items-center h-full`}>
                <AppButton variant={'outline'} onClick={connectWallet}>
                  Connect Wallet
                </AppButton>
              </div>
            )}

            {store.isConnected && !store.isOnNetwork && (
              <div className="flex justify-center flex-col items-center h-full">
                <AppButton onClick={initXmtpWithKeys}>Connect to XMTP</AppButton>
                {store.web3Wallet && <TextP> Your address: {store.web3Wallet}</TextP>}
              </div>
            )}
            {store.isConnected && store.isOnNetwork && client && (
              <ConversationContainer isConsent={props.isConsent} isContained={props.isContained} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
