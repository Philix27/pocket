import { Tokens } from '@/lib';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ISlice {
  showNetwork?: boolean;
  amountSelected?: number;
  networkSelected?: string;
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  showNetwork: false,
  amountSelected: 0,
  networkSelected: 'MTN',
};

export const useAirtime = create(
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
      name: 'airtime',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
