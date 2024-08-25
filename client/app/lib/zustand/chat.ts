import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Client } from '@xmtp/xmtp-js';

export interface ISlice {
  selectedConversation?: string;
  isOnNetwork?: boolean;
  keys?: Map<string, Uint8Array>;
  newKeys?: Uint8Array | any;
  xmtpClient?: Client | any;
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
