'use client';
import { AppButton, AppSelect, AppTextInput, Navbar, Tabs } from '@/comps';
import { AppStores, use3Wagmi } from '@/lib';
import React from 'react';

export default function SendMoneyPage() {
  const { address } = use3Wagmi();
  const store = AppStores.useTabs();

  return (
    <div>
      <Navbar title="Send" isBack />
      <Tabs
        data={[
          {
            title: 'To wallet',
            isActive: store.sendToWallet === 'WALLET',
            onClick: () => {
              store.update({ sendToWallet: 'WALLET' });
            },
          },
          {
            title: 'To phone',
            isActive: store.sendToWallet === 'PHONE',
            onClick: () => {
              store.update({ sendToWallet: 'PHONE' });
            },
          },
        ]}
      />
      <div className="px-5 py-4 gap-y-2 w-full flex flex-col items-center space-y-3">
        <AppSelect
          label="Select currency"
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

        {store.sendToWallet === 'WALLET' && (
          <AppTextInput control={undefined} name="wallet" place={'Enter wallet address'} label="Wallet Address" />
        )}
        
        {store.sendToWallet === 'PHONE' && (
          <AppTextInput control={undefined} name="phone" place={'2348012345678'} label="Phone number" />
        )}

        <AppTextInput control={undefined} name="amount" place={'100'} label="Amount" />
        <AppButton className="w-[75%]">Send</AppButton>
      </div>
    </div>
  );
}
