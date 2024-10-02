'use client';
import React from 'react';
import { useWithdraw } from './useWithraw';
import { AppButton, TextP } from '@/comps';

export function ConfirmTransaction() {
  const store = useWithdraw();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <TextP>Confirm your transaction details</TextP>
      <AppButton
        className="w-[75%]"
        onClick={() => {
          store.update({ currentStep: '3CONFIRM' });
        }}
      >
        Confirm
      </AppButton>
    </div>
  );
}
