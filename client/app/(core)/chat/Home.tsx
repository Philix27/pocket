import React, { useState, useEffect, useRef } from 'react';
import { ethers } from 'ethers';
import { Client, useClient } from '@xmtp/react-sdk';
import { ConversationContainer } from './ConversationContainer';
import { AppStores, cn } from '@/lib';
import { AppButton, TextH, TextP } from '@/comps';
import { BiChevronLeft } from 'react-icons/bi';
import { getEnv, loadKeys, storeKeys, wipeKeys } from './_store';
import { toast } from 'sonner';

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

  useEffect(() => {
    // store.update({ xmtpClient: client });
    if (store.web3Wallet) {
      store.update({ isLoggedIn: true });
    }
    if (client && !store.isOnNetwork) {
      store.update({ isOnNetwork: true });
    }
    if (store.signer && store.isOnNetwork) {
      initXmtpWithKeys();
    }
  }, [props.wallet, store.signer, client]);

  const initXmtpWithKeys = async () => {
    const options = { env: props.env ? props.env : getEnv() };
    const address = store.web3Wallet;
    // const address = store.web3Wallet;

    if (!address) return;
    if (client) {
      toast.error('Already connected');
      return;
    }
    // xclient();
    let keys = loadKeys(address);

    let currKey = loadKeys(address) as Uint8Array;
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
      const response = await initialize({
        keys: currKey,
        options: {
          env: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
          persistConversations: true,
          skipContactPublishing: true,
          // privateKeyOverride: keys,
        },
        signer: store.signer,
      });
      console.log('initialize response:', response);
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
      <div
        className={
          'bg-background rounded-md  border overflow-hidden flex flex-col z-50 w-full h-full' +
          (store.isOnNetwork ? 'expanded' : '')
        }
      >
        {store.isLoggedIn && (
          <AppButton variant={'destructive'} onClick={handleLogout}>
            Logout
          </AppButton>
        )}
        <hr />
        {store.isOnNetwork && (
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
          {!store.xmtpClient && (
            <div className="flex justify-center flex-col items-center h-full">
              <AppButton onClick={initXmtpWithKeys}>Connect to XMTP</AppButton>
              {store.web3Wallet && <TextP> Your address: {store.web3Wallet}</TextP>}
            </div>
          )}
          {client && <ConversationContainer isConsent={props.isConsent} isContained={props.isContained} />}
          <ConversationContainer isConsent={props.isConsent} isContained={props.isContained} />
        </div>
      </div>
    </>
  );
}
