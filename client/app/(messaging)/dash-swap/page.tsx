'use client';
import { AppButton, AppSelect, Navbar, TextH } from '@/comps';
import { use3Wagmi } from '@/lib';
import React from 'react';

export default function SwapPage() {
  const { address } = use3Wagmi();

  return (
    <div>
      <Navbar title="Swap tokens" isBack />

      <div className="px-5 py-4 gap-y-2 w-full flex flex-col items-center space-y-3">
        <AppSelect
          label="From:"
          onChange={(e) => {}}
          data={[
            {
              label: 'cUSD',
              value: 'cUSD',
            },
            {
              label: 'CELO',
              value: 'CELO',
            },
          ]}
        />
        <AppSelect
          label="To:"
          onChange={(e) => {}}
          data={[
            {
              label: 'cUSD',
              value: 'cUSD',
            },
            {
              label: 'CELO',
              value: 'CELO',
            },
          ]}
        />
        <TextH>4500</TextH>
        <AppButton className="w-[75%]">Swap</AppButton>
      </div>
    </div>
  );
}
