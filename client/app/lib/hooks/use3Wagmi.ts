'use client';
import { useEffect, useState } from 'react';
import { useAppRouter, AppStores, web3AuthInstance } from '@/lib';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { IProvider } from '@web3auth/base';

export const use3Wagmi = () => {
  const store = AppStores.useChat();
  const router = useAppRouter();
  const { address, connector, isConnected } = useAccount();
  const { connect, connectors, error: connectionErr } = useConnect();
  const { disconnect } = useDisconnect();
  const web3auth = web3AuthInstance;
  const [provider, setProvider] = useState<IProvider | null>(null);

  useEffect(() => {
    const init = async () => {
      if (web3auth.connected) {
        return;
      }
      try {
        // IMP START - SDK Initialization
        await web3auth.initModal();
        // IMP END - SDK Initialization
        setProvider(web3auth.provider);
      } catch (error) {
        console.error(error);
      }
      // }
    };

    init();
  }, []);

  const login = async () => {
    try {
      await web3auth.initModal();

      const web3authProvider = await web3auth.connect();

      setProvider(web3authProvider);

      const activeCon = connectors.filter((con) => con.name.toUpperCase() === 'WEB3AUTH')[0];
      connect({
        connector: activeCon,
      });

      const user = await web3auth.getUserInfo();
      store.update({
        isLoggedIn: true,
        userInfo: user,
        web3Wallet: address,
      });
    } catch (error) {}
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
