import { create } from 'zustand';
import { ethers } from 'ethers';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Client, Conversation } from '@xmtp/xmtp-js';
import { CachedConversation, ContentTypeMetadata } from '@xmtp/react-sdk';
import { UserInfo } from '@web3auth/base';

export interface ISlice {
  selectedConversation?: {
    id?: string | number;
    message?: [];
    cachedConversation?: any;
    cachedMessage?: any;
    conversation?: any;
  } | null;
  conversations?: Conversation[] | null;
  selectedConverse?: CachedConversation<ContentTypeMetadata> | null;
  // conversations?: CachedConversation<ContentTypeMetadata>;
  peerAddress?: string | null;
  balance?: string | null;
  isOnNetwork?: boolean;
  keys?: Map<string, Uint8Array>;
  newKeys?: Uint8Array | null;
  xmtpClient?: Client<any> | null;
  isLoggedIn?: boolean;
  web3Wallet?: string;
  signer?: ethers.JsonRpcSigner | null;
  etherKey?: string | null;
  etherWallet?: ethers.Wallet | null;
  showChat?: boolean;
  isConsent?: boolean;
  isConnectedToXmpt?: boolean;
  userInfo?: Partial<UserInfo> | null;
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  selectedConversation: null,
  balance: null,
  isOnNetwork: false,
  keys: new Map(),
  xmtpClient: null,
  newKeys: null,
  isConsent: false,
  isLoggedIn: false,
  showChat: false,
  web3Wallet: '',
  signer: null,
  peerAddress: '',
  conversations: null,
  selectedConverse: null,
  isConnectedToXmpt: false,
  etherKey: null,
  etherWallet: null,
  userInfo: null,
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
