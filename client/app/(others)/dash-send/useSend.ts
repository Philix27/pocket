import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ISlice {
  screen?: 'WALLET' | 'PHONE' | 'BANK';
  showConfirm?: boolean;
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  showConfirm: false,
  screen: 'WALLET',
};

export const useAppSend = create(
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
      name: 'useWithdraw',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
