'use client';
import { BottomSheet } from '@/comps';
import React from 'react';
import { useWithdraw } from './useWithraw';
import { TokenList } from '@/lib';
import { CurrencyRow } from '../dash-swap/CurrencyRow';

export function CoinList() {
  const store = useWithdraw();
  return (
    <BottomSheet
      show={store.showCurrencies}
      onClose={() => {
        store.update({ showCurrencies: false });
      }}
    >
      <div className="w-full">
        {TokenList.map((val, i) => (
          <CurrencyRow key={i} val={val} />
        ))}
      </div>
    </BottomSheet>
  );
}
