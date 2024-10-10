'use client';
import { createContext, useCallback, useMemo } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { useContext } from 'react';
import { useAppRouter } from '../hooks';

type WalletContextValue = {
  address: `0x${string}` | undefined;
  disconnect: ReturnType<typeof useDisconnect>['disconnect'];
  connectionErr: Error | null;
  isConnected: boolean;
  isLoading: boolean;
  logout: (fn?: VoidFunction) => void;
  login: () => void;
};

export const WalletContext = createContext<WalletContextValue>({
  address: undefined,
  disconnect: () => {},
  connectionErr: null,
  isConnected: false,
  isLoading: false,
  logout: () => {},
  login: () => {},
});

export const WalletProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { address, isConnected, isConnecting, isReconnecting } = useAccount();
  const { connect, connectors, error: connectionErr, isLoading: loadingConnect } = useConnect();
  const { disconnect } = useDisconnect();
  
  const isLoading = isConnecting || isReconnecting || loadingConnect;

  const router = useAppRouter();

  const login = () => {
    const activeCon = connectors.filter((con) => con.name.toUpperCase() === 'WEB3AUTH')[0];

    connect({
      connector: activeCon,
    });
  };

  const logout = (fn?: VoidFunction) => {
    fn && fn();
    disconnect();
    router.push('/');
    // store.clear();
  };

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
    ...value,
  };
  return <WalletContext.Provider value={outValues}>{children}</WalletContext.Provider>;
};

export const useWallet = () => useContext(WalletContext);
