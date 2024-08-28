import { create } from 'zustand';
import { ethers } from 'ethers';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Client } from '@xmtp/xmtp-js';

export interface ISlice {
  selectedConversation?: string;
  isOnNetwork?: boolean;
  keys?: Map<string, Uint8Array>;
  newKeys?: Uint8Array | any;
  xmtpClient?: Client | any;
  isLoggedIn?: boolean;
  web3Wallet?: string;
  signer?: ethers.JsonRpcSigner | null;
  showChat?: boolean;
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  selectedConversation: '',
  isOnNetwork: false,
  keys: new Map(),
  xmtpClient: undefined,
  newKeys: undefined,
  isLoggedIn: false,
  showChat: false,
  web3Wallet: '',
  signer: null,
};

export const useChat = create(
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
      name: 'chat',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
