'use client';
import { AppButton } from '@/comps';
import React from 'react';
import { useWithdraw } from './useWithraw';
import { TokenList } from '@/lib';
import { CurrencyRow } from '../dash-swap/CurrencyRow';

export function CoinList() {
  const store = useWithdraw();
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {TokenList.map((val, i) => (
        <CurrencyRow key={i} val={val} />
      ))}

      <AppButton
        className="w-[75%]"
        onClick={() => {
          store.update({ currentStep: '2ACCOUNT' });
        }}
      >
        Send
      </AppButton>
    </div>
  );
}
