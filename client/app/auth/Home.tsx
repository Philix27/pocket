import React, { useState, useEffect, useRef } from 'react';
import { ethers } from 'ethers';
import { Client, useClient } from '@xmtp/react-sdk';
import { ConversationContainer } from './ConversationContainer';
import { cn } from '@/lib';
import { AppButton, TextH, TextP } from '@/comps';
import { BiChevronLeft } from 'react-icons/bi';

type IProps = {
  isPWA: boolean;
  wallet: string;
  env?: string;
  onLogout: VoidFunction;
  isContained: boolean;
  isConsent: boolean;
};

export default function Home(props: IProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOnNetwork, setIsOnNetwork] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const initialIsOpen = props.isPWA || props.isContained || localStorage.getItem('isWidgetOpen') === 'true' || false;
    const initialIsOnNetwork = localStorage.getItem('isOnNetwork') === 'true' || false;
    const initialIsConnected = (localStorage.getItem('isConnected') && props.wallet === 'true') || false;

    setIsOpen(initialIsOpen);
    setIsOnNetwork(initialIsOnNetwork);
    setIsConnected(initialIsConnected);
  }, []);

  const { client, error, isLoading, initialize, disconnect } = useClient();
  const [loading, setLoading] = useState(false);

  const [selectedConversation, setSelectedConversation] = useState(null);
  const [signer, setSigner] = useState();

  const styles = getStyles(props.isPWA!, props.isContained);
  useEffect(() => {
    localStorage.setItem('isOnNetwork', isOnNetwork.toString());
    localStorage.setItem('isWidgetOpen', isOpen.toString());
    localStorage.setItem('isConnected', isConnected.toString());
  }, [isOpen, isConnected, isOnNetwork]);

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
    if (typeof window.ethereum !== undefined) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
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

  const getAddress = async (signer) => {
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
  const [isWalletCreated, setIsWalletCreated] = useState(false);

  const createNewWallet = async () => {
    const newWallet = ethers.Wallet.createRandom();
    console.log('Your address', newWallet.address);
    setSigner(newWallet);
    setIsConnected(true);
    setIsWalletCreated(true); // Set isWalletCreated to true when a new wallet is created
  };
  const initXmtpWithKeys = async () => {
    const options = { env: props.env ? props.env : getEnv() };
    const address = await getAddress(signer);
    if (!address) return;
    let keys = loadKeys(address);
    if (!keys) {
      keys = await Client.getKeys(signer, {
        ...options,
        skipContactPublishing: true,
        persistConversations: false,
      });
      storeKeys(address, keys);
    }
    setLoading(true);
    await initialize({ keys, options, signer });
  };

  const openWidget = () => {
    setIsOpen(true);
  };

  const closeWidget = () => {
    setIsOpen(false);
  };

  if (typeof window !== undefined) {
    window.FloatingInbox = {
      open: openWidget,
      close: closeWidget,
    };
  }
  const handleLogout = async () => {
    setIsConnected(false);
    const address = await getAddress(signer);
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
      {!props.isPWA && !props.isContained && (
        <div
          onClick={isOpen ? closeWidget : openWidget}
          className={cn(
            'FloatingInbox ' + (isOpen ? 'spin-clockwise' : 'spin-counter-clockwise'),
            `fixed bottom-5 right-5 w-[40px] rounded-[50%] bg-background 
            flex items-center border justify-center cursor-pointer p-5`
          )}
        >
          💬
        </div>
      )}
      {isOpen && (
        <div style={styles.uContainer} className={'bg-background border' + (isOnNetwork ? 'expanded' : '')}>
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
          {isConnected}
          <div style={styles.widgetContent}>
            {!isConnected && (
              <div style={styles.xmtpContainer}>
                <AppButton variant={'outline'} onClick={connectWallet}>
                  Connect Wallet
                </AppButton>

                <div onClick={createNewWallet}>
                  <TextP>or create new one</TextP>
                </div>
              </div>
            )}
            {isConnected && !isOnNetwork && (
              <div className="flex justify-center flex-col items-center h-full">
                <AppButton onClick={initXmtpWithKeys}>Connect to XMTP</AppButton>
                {isWalletCreated && <button style={styles.label}>Your addess: {signer.address}</button>}
              </div>
            )}
            {isConnected && isOnNetwork && client && (
              <ConversationContainer
                isPWA={props.isPWA}
                isConsent={props.isConsent}
                isContained={props.isContained}
                selectedConversation={selectedConversation}
                setSelectedConversation={setSelectedConversation}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

const ENCODING = 'binary';

export const getEnv = () => {
  // "dev" | "production" | "local"
  return typeof process !== undefined && process.env.REACT_APP_XMTP_ENV ? process.env.REACT_APP_XMTP_ENV : 'production';
};
export const buildLocalStorageKey = (walletAddress: string) => {
  return walletAddress ? `xmtp:${getEnv()}:keys:${walletAddress}` : '';
};

export const loadKeys = (walletAddress: string) => {
  const val = localStorage.getItem(buildLocalStorageKey(walletAddress));
  return val ? Buffer.from(val, ENCODING) : null;
};

export const storeKeys = (walletAddress: string, keys: Buffer) => {
  localStorage.setItem(buildLocalStorageKey(walletAddress), Buffer.from(keys).toString(ENCODING));
};

export const wipeKeys = (walletAddress: string) => {
  localStorage.removeItem(buildLocalStorageKey(walletAddress));
};

const getStyles = (isPWA: boolean, isContained: boolean) => {
  return {
    uContainer: {
      position: isContained ? 'relative' : isPWA ? 'relative' : 'fixed',
      bottom: isContained ? '0px' : isPWA ? '0px' : '80px',
      right: isContained ? '0px' : isPWA ? '0px' : '20px',
      width: isContained ? '100%' : isPWA ? '100%' : '300px',
      height: isContained ? '100%' : isPWA ? '100vh' : '400px',
      border: isContained ? '0px' : isPWA ? '0px' : '1px solid #ccc',
      borderRadius: isContained ? '0px' : isPWA ? '0px' : '10px',
      zIndex: '1000',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    },
    logoutBtn: {
      position: 'absolute',
      top: '10px',
      textDecoration: 'none',
      color: '#000',
      left: '5px',
      background: 'transparent',
      border: 'none',
      fontSize: isPWA == true ? '12px' : '10px',
      cursor: 'pointer',
    },

    label: {
      fontSize: '10px',
      textAlign: 'center',
      marginTop: '5px',
      cursor: 'pointer',
      display: 'block',
    },
    backButton: {
      border: '0px',
      background: 'transparent',
      cursor: 'pointer',
      fontSize: isPWA == true ? '20px' : '14px', // Increased font size
    },
    widgetContent: {
      flexGrow: 1,
      overflowY: 'auto',
    },
    xmtpContainer: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100%',
    },
  };
};
