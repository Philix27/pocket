'use client';
import { useAppRouter, AppStores, web3AuthInstance } from '@/lib';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

export const use3Wagmi = () => {
  const store = AppStores.useChat();
  const router = useAppRouter();
  const { address, connector, isConnected } = useAccount();
  const { connect, connectors, error: connectionErr } = useConnect();
  const { disconnect } = useDisconnect();
  const web3auth = web3AuthInstance;

  const login = async () => {
    const activeCon = connectors.filter((con) => con.name.toUpperCase() === 'WEB3AUTH')[0];

    connect({
      connector: activeCon,
    });
    console.log('activeCon', activeCon);
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
    login,
  };
};
