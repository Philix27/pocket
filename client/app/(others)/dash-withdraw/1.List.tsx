'use client';
import { AppButton } from '@/comps';
import React from 'react';
import { useWithdraw } from './useWithraw';
import { TokenList } from '@/lib';
import { CurrencyRow } from '../dash-swap/CurrencyRow';

export function CoinList() {
  const store = useWithdraw();
  return (
    <div className="w-full flex flex-col justify-center">
      {TokenList.map((val, i) => (
        <CurrencyRow key={i} val={val} />
      ))}

      <div className="flex items-center justify-evenly px-5 w-full space-x-2 my-4">
        <AppButton
          className="w-[30%]"
          onClick={() => {
            store.update({ currentStep: '2ACCOUNT' });
          }}
        >
          Continue
        </AppButton>
      </div>
    </div>
  );
}
