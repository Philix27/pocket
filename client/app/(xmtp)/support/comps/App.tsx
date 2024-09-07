'use client';
import { useClient } from '@xmtp/react-sdk';
import './App.css';
import { useEffect } from 'react';
import { use3Wagmi } from '@/lib';
import { WalletConnect } from './WalletConnect';
import { Inbox } from './Inbox';
import { XMTPConnect } from './XMTPConnect';

export const App = () => {
  const { client, disconnect } = useClient();
  const { isConnected, address } = use3Wagmi();

  // disconnect XMTP client when the wallet changes
  useEffect(() => {
    void disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  if (!isConnected) {
    return <WalletConnect />;
  }

  if (!client) {
    return <XMTPConnect />;
  }

  return <Inbox />;
};
