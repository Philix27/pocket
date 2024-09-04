import './App.css';
import { useClient } from '@xmtp/react-sdk';
import { useWallet } from '../lib/hooks/useWallet';
import { XMTPConnect } from './XMTPConnect';
import { WalletConnect } from './WalletConnect';
import { Inbox } from './Inbox';
import { useEffect } from 'react';

export const App = () => {
  const { isConnected, address } = useWallet();
  const { client, disconnect } = useClient();

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
