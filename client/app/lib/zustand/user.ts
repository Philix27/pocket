import { IKycScreen } from '@/(core)/settings/kyc/type';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface ISlice {
  activeKycSheet?: IKycScreen;
  firstName?: string;
  lastName?: string;
  middleName?: string;
  address1?: string;
  address2?: string;
  walletAddress?: string;
  nin?: string;
  bvn?: string;
  dob?: string;
}

export interface ISliceUpdate extends Required<ISlice> {
  update: (data: ISlice) => void;
  clear: () => void;
}

export const defaultValues: Required<ISlice> = {
  activeKycSheet: 'NONE',
  firstName: '',
  lastName: '',
  middleName: '',
  nin: '',
  bvn: '',
  dob: '',
  address1: '',
  address2: '',
  walletAddress: '',
};

export const useUser = create(
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
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
