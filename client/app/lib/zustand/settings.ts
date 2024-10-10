import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ISlice {
  drawerIsOpen?: boolean;
  isLoud?: boolean;
  homeContent?: 'BUY' | 'SELL' | 'NONE';
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  drawerIsOpen: false,
  homeContent: 'NONE',
  isLoud: true,
};

export const useSettingsStore = create(
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
      name: 'settings',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
