import { create } from 'zustand';
import { ethers } from 'ethers';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Client, Conversation } from '@xmtp/xmtp-js';
import { CachedConversation, ContentTypeMetadata } from '@xmtp/react-sdk';

export interface ISlice {
  selectedConversation?: {
    id?: string | number;
    messgae?: [];
    cachedConversation?: any;
    cachedMessage?: any;
    conversation?: any;
  } | null;
  conversations?: Conversation[];
  selectedConverse?: CachedConversation<ContentTypeMetadata>;
  // conversations?: CachedConversation<ContentTypeMetadata>;
  peerAddress?: string | null;
  isOnNetwork?: boolean;
  isConnected?: boolean;
  keys?: Map<string, Uint8Array>;
  newKeys?: Uint8Array | any;
  xmtpClient?: Client<any> | undefined;
  isLoggedIn?: boolean;
  web3Wallet?: string;
  signer?: ethers.JsonRpcSigner | null;
  showChat?: boolean;
  isConsent?: boolean;
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  selectedConversation: null,
  isOnNetwork: false,
  keys: new Map(),
  xmtpClient: undefined,
  newKeys: undefined,
  isConsent: false,
  isLoggedIn: false,
  showChat: false,
  web3Wallet: '',
  signer: null,
  isConnected: false,
  peerAddress: '',
  conversations: {
    context: undefined,
    createdAt: new Date(),
    isReady: false,
    lastSyncedAt: undefined,
    metadata: undefined,
    peerAddress: '',
    topic: '',
    updatedAt: new Date(),
    walletAddress: '',
  },
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
