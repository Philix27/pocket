'use client';
import { createContext, useCallback, useMemo } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useContext } from 'react';
import { useAppRouter } from '../hooks';
import { AppStores } from '../zustand';

type WalletContextValue = {
  address: `0x${string}` | undefined;
  disconnect: ReturnType<typeof useDisconnect>['disconnect'];
  connectionErr: Error | null;
  isConnected: boolean;
  isLoading: boolean;
  logout: () => Promise<void>;
  login: () => void;
};

export const WalletContext = createContext<WalletContextValue>({
  address: undefined,
  disconnect: () => {},
  connectionErr: null,
  isConnected: false,
  isLoading: false,
  logout: async () => {},
  login: () => {},
});

export const WalletProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { address, isConnected, isConnecting, isReconnecting, connector } = useAccount();
  const { connect, connectors, error: connectionErr, isLoading: loadingConnect } = useConnect();
  const { disconnect } = useDisconnect();

  const isLoading = isConnecting || isReconnecting || loadingConnect;
  // ! From
  const store = AppStores.useChat();
  const router = useAppRouter();

  const login = useCallback(() => {
    const activeCon = connectors.filter((con) => con.name.toUpperCase() === 'WEB3AUTH')[0];

    connect({
      connector: activeCon,
    });
  }, []);

  const logout = async () => {
    disconnect();
    store.clear();
    router.push('/');
  };

  // ! End

  // memo-ize the context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      address,
      disconnect,
      connectionErr,
      isLoading,
      isConnected,
    }),
    [address, disconnect, connectionErr, isLoading, isConnected]
  );

  const outValues = {
    logout,
    login,
    connector,
    ...value,
  };
  return <WalletContext.Provider value={outValues}>{children}</WalletContext.Provider>;
};

export const useWallet = () => useContext(WalletContext);
