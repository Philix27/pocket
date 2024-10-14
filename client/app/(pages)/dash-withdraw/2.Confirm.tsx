'use client';
import React from 'react';
import { useWithdraw } from './useWithraw';
import { AppButton, BottomSheet, TextH, TextP } from '@/comps';
import { toast } from 'sonner';

export function ConfirmTransaction() {
  const store = useWithdraw();
  return (
    <BottomSheet
      show={store.showConfirm}
      onClose={() => {
        store.update({ showConfirm: false });
      }}
    >
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex items-center justify-center flex-col">
          <TextH>Withdraw 50 cUSD</TextH>
          <TextP>Confirm your transaction details</TextP>
        </div>
        <AppButton
          className="w-fit"
          onClick={() => {
            toast.success('Enter pin and send');
          }}
        >
          Confirm
        </AppButton>
      </div>
    </BottomSheet>
  );
}
