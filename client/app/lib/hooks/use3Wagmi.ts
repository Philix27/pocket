'use client';
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-console */

import { useEffect } from 'react';
import { useAppRouter, AppStores } from '@/lib';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export const use3Wagmi = () => {
  const store = AppStores.useChat();
  const router = useAppRouter();
  const { address, connector, isConnected } = useAccount();
  const { connect, connectors, error: connectionErr } = useConnect();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    const init = async () => {};

    init();
  }, []);

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
