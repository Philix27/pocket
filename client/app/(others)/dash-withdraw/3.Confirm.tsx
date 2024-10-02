'use client';
import React from 'react';
import { useWithdraw } from './useWithraw';
import { AppButton, TextP } from '@/comps';

export function ConfirmTransaction() {
  const store = useWithdraw();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <TextP>Confirm your transaction details</TextP>
      <div className="flex items-center justify-between px-5">
        <AppButton
          className="w-fit"
          onClick={() => {
            store.update({ currentStep: '2ACCOUNT' });
          }}
        >
          Back
        </AppButton>
        <AppButton
          className="w-fit"
          onClick={() => {
            store.update({ currentStep: '1LIST' });
          }}
        >
          Confirm
        </AppButton>
      </div>
    </div>
  );
}
