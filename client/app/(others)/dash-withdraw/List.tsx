'use client';
import { BottomSheet, Row } from '@/comps';
import React from 'react';
import { useWithdraw } from './useWithraw';
import { TokenList } from '@/lib';
import { TokenIcon } from '@/public/tokens/TokenIcon';

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
          <Row
            key={i}
            title={val.name}
            subtitle={val.id}
            hideArrow
            color={val.color}
            imgComp={<TokenIcon token={val} size="s" className="mr-3" />}
            onClick={() => {
              store.update({ selectedToken: val });
            }}
          />
        ))}
      </div>
    </BottomSheet>
  );
}
