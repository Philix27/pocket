import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ISlice {
  sendToWallet?: 'WALLET' | 'PHONE';
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  sendToWallet: 'PHONE',
};

export const useTabs = create(
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
      name: 'tabs',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
