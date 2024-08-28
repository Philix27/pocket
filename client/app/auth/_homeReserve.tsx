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
  // const [isOpen, setIsOpen] = useState(false);
  const [isOnNetwork, setIsOnNetwork] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isWalletCreated, setIsWalletCreated] = useState(false);
  const { client, error, isLoading, initialize, disconnect } = useClient();
  const [loading, setLoading] = useState(false);
  const store = AppStores.useChat();
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [signer, setSigner] = useState();

  useEffect(() => {
    const initialIsOpen = props.isContained || localStorage.getItem('isWidgetOpen') === 'true' || false;
    const initialIsOnNetwork = localStorage.getItem('isOnNetwork') === 'true' || false;
    const initialIsConnected = (localStorage.getItem('isConnected') && props.wallet === 'true') || false;

    store.update({ showChat: initialIsOpen });
    setIsOnNetwork(initialIsOnNetwork);
    setIsConnected(initialIsConnected);
  }, []);

  useEffect(() => {
    localStorage.setItem('isOnNetwork', isOnNetwork.toString());
    localStorage.setItem('isWidgetOpen', store.showChat.toString());
    localStorage.setItem('isConnected', isConnected.toString());
  }, [store.showChat, isConnected, isOnNetwork]);

  useEffect(() => {
    if (props.wallet) {
      setSigner(props.wallet);
      setIsConnected(true);
    }
    if (client && !isOnNetwork) {
      setIsOnNetwork(true);
    }
    if (signer && isOnNetwork) {
      initXmtpWithKeys();
    }
  }, [props.wallet, signer, client]);

  const connectWallet = async () => {
    console.log('Connect am');
    if (typeof window.ethereum !== undefined) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.BrowserProvider(window.ethereum);
        // .providers.Web3Provider(window.ethereum);
        const providerx = new ethers.CloudflareProvider();
        // .providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setSigner(signer);
        setIsConnected(true);
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
    const address = getAddress();
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
        signer,
      });
    } catch (error) {
      console.log('client initialize', error);
    }
  };

  const handleLogout = async () => {
    setIsConnected(false);
    const address = store.web3Wallet;
    wipeKeys(address);
    console.log('wipe', address);
    setSigner(null);
    setIsOnNetwork(false);
    await disconnect();
    setSelectedConversation(null);
    localStorage.removeItem('isOnNetwork');
    localStorage.removeItem('isConnected');
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
            'bg-background rounded-md  border overflow-hidden flex flex-col z-50' + (isOnNetwork ? 'expanded' : '')
          }
        >
          {isConnected && (
            <AppButton variant={'destructive'} onClick={handleLogout}>
              Logout
            </AppButton>
          )}
          <hr />
          {isConnected && isOnNetwork && (
            <div className="p-1">
              <div
                className={`flex justify-center items-center 
                bg-none border-none w-auto m-0`}
              >
                {isOnNetwork && selectedConversation && (
                  <BiChevronLeft
                    className={'cursor-pointer text-lg'}
                    onClick={() => {
                      setSelectedConversation(null);
                    }}
                  />
                )}
                <TextH v="h5">Conversations</TextH>
              </div>
            </div>
          )}

          <div className={'flex-grow overflow-y-auto'}>
            {!isConnected && (
              <div className={`flex justify-center flex-col items-center h-full`}>
                <AppButton variant={'outline'} onClick={connectWallet}>
                  Connect Wallet
                </AppButton>
              </div>
            )}

            {isConnected && !isOnNetwork && (
              <div className="flex justify-center flex-col items-center h-full">
                <AppButton onClick={initXmtpWithKeys}>Connect to XMTP</AppButton>
                {isWalletCreated && <TextP> Your address: {signer!.address}</TextP>}
              </div>
            )}
            {isConnected && isOnNetwork && client && (
              <ConversationContainer
                isConsent={props.isConsent}
                isContained={props.isContained}
                selectedConversation={selectedConversation}
                setSelectedConversation={setSelectedConversation}
              />
            )}
            <ConversationContainer
              isConsent={props.isConsent}
              isContained={props.isContained}
              selectedConversation={selectedConversation}
              setSelectedConversation={setSelectedConversation}
            />
          </div>
        </div>
      )}
    </>
  );
}
