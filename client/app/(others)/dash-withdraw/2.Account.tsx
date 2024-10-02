'use client';
import { AppSelect, AppTextInput, TextH, AppButton } from '@/comps';
import React from 'react';
import { useWithdraw } from './useWithraw';

const options = [
  { value: 'GTB', label: 'GTB' },
  { value: 'Zenith', label: 'Zenith' },
  { value: 'UBA', label: 'UBA' },
];
const tokensOptions = [
  { value: 'cUSD', label: 'cUSD' },
  { value: 'CELO', label: 'CELO' },
  { value: 'cEURO', label: 'cEURO' },
];

export function BankAccountAmount() {
  const store = useWithdraw();

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <AppSelect data={tokensOptions} onChange={(e) => {}} label="Select token" />
      <AppTextInput control={undefined} name="amount" place={'Enter amount'} type="number" label="Amount" />
      <AppSelect data={options} onChange={(e) => {}} label="Bank account" />

      <div className="flex items-center justify-evenly px-5 w-full space-x-2 my-4">
        <AppButton
          className="w-[30%]"
          variant={'outline'}
          onClick={() => {
            store.update({ currentStep: '1LIST' });
          }}
        >
          Back
        </AppButton>
        <AppButton
          className="w-[30%]"
          onClick={() => {
            store.update({ currentStep: '3CONFIRM' });
          }}
        >
          Continue
        </AppButton>
      </div>
    </div>
  );
}
