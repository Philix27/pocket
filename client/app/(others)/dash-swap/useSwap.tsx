'use client';
import { Token, Tokens } from '@/lib';
import { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';

type SwapContextValue = {
  error: Error | null;
  isConnected: boolean;
  isLoading: boolean;
  address: `0x${string}` | undefined;
  showTokens: boolean;
  setShowTokens: Dispatch<SetStateAction<boolean>>;
  lastClicked: 'SEND' | 'RECEIVE';
  setLastClicked: Dispatch<SetStateAction<'SEND' | 'RECEIVE'>>;
  selectedToken: {
    fromTokens: Token;
    toTokens: Token;
  };
  setSelectedToken: Dispatch<
    SetStateAction<{
      fromTokens: Token;
      toTokens: Token;
    }>
  >;
  exchangeValue: {
    fromToken: number;
    toToken: number;
  };
  setExchangeValue: Dispatch<
    SetStateAction<{
      fromToken: number;
      toToken: number;
    }>
  >;
  chainId: number | undefined;
};

export const SwapContext = createContext<SwapContextValue>({
  address: undefined,
  error: null,
  isConnected: false,
  isLoading: false,
  showTokens: false,
  setShowTokens: () => {},
  lastClicked: 'SEND',
  setLastClicked: () => {},
  selectedToken: {
    fromTokens: Tokens.CELO,
    toTokens: Tokens.cUSD,
  },
  setSelectedToken: () => {},
  exchangeValue: {
    fromToken: 0,
    toToken: 0,
  },
  setExchangeValue: () => {},
  chainId: undefined,
});

export const SwapProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { address, isConnected, isConnecting, isReconnecting, chainId } = useAccount();
  const isLoading = isConnecting || isReconnecting;
  const { error } = useConnect();
  const [showTokens, setShowTokens] = useState<boolean>(false);
  const [lastClicked, setLastClicked] = useState<'SEND' | 'RECEIVE'>('SEND');
  const [selectedToken, setSelectedToken] = useState<{ fromTokens: Token; toTokens: Token }>({
    fromTokens: Tokens.CELO,
    toTokens: Tokens.cUSD,
  });
  const [exchangeValue, setExchangeValue] = useState<{ fromToken: number; toToken: number }>({
    fromToken: 0.0,
    toToken: 0.0,
  });

  // memo-ize the context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      address,
      error,
      isLoading,
      isConnected,
      showTokens,
      setShowTokens,
      lastClicked,
      setLastClicked,
      selectedToken,
      exchangeValue,
      setExchangeValue,
      setSelectedToken,
      chainId,
    }),
    [address, error, isLoading, isConnected, chainId]
  );

  return <SwapContext.Provider value={value}>{children}</SwapContext.Provider>;
};

export const useSwapContext = () => useContext(SwapContext);
