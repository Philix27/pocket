'use client';
import { Token, Tokens } from '@/lib';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ISlice {
  screen?: 'WALLET' | 'PARTNER';
  selectedToken?: Token;
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  selectedToken: Tokens.CELO,
  screen: 'WALLET',
};

export const useReceive = create(
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
      name: 'receive',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
