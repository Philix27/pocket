'use client';
import { Token, TokenId, Tokens } from '@/lib';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ISlice {
  lastClicked?: 'SEND' | 'RECEIVE';
  showConfirm?: boolean;
  showTokens?: boolean;
  address?: string | null;
  chainId?: number;
  amount?: number;
  quote?: string;
  direction?: 'in' | 'out';
  slippage?: number;

  selectedToken?: {
    fromTokens: Token;
    toTokens: Token;
  };
  exchangeValue?: {
    fromToken: number;
    toToken: number;
  };
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  lastClicked: 'SEND',
  showTokens: false,
  selectedToken: {
    fromTokens: Tokens.CELO,
    toTokens: Tokens.cUSD,
  },
  exchangeValue: {
    fromToken: 0,
    toToken: 0,
  },
  address: null,
  chainId: 42220,
  amount: 0,
  quote: '',
  direction: 'out',
  slippage: 0,
  showConfirm: false,
};

export const useSwap = create(
  persist<ISliceUpdate>(
    (set) => ({
      ...defaultValues,

      update: (data) =>
        set((state) => {
          return { ...state, ...data };
        }),
      clear: () =>
        set((state) => {
          return { ...state, ...defaultValues };
        }),
    }),
    {
      name: 'accountBalances',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
