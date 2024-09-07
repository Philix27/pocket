'use client';
import { useEffect } from 'react';
import { useAppRouter, AppStores, web3AuthInstance } from '@/lib';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export const use3Wagmi = () => {
  const store = AppStores.useChat();
  const router = useAppRouter();
  const { address, connector, isConnected } = useAccount();
  const { connect, connectors, error: connectionErr } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    if (isConnected) {
      store.update({
        isLoggedIn: true,
        web3Wallet: address,
      });
    }
  };

  const logout = async () => {
    disconnect();
    store.clear();
    router.push('/');
  };

  return {
    address,
    logout,
    connector,
    connectors,
    connect,
    connectionErr,
    isConnected,
  };
};
