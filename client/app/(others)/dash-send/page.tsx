'use client';
import { Navbar, Tabs } from '@/comps';
import React from 'react';
import { useAppSend } from './useSend';
import { WalletScreen } from './Wallet';
import { PhoneScreen } from './Phone';
import { BankAccountScreen } from './BankAccount';

export default function SendMoneyPage() {
  const store = useAppSend();

  return (
    <div>
      <Navbar title="Send" isBack />
      <Tabs
        data={[
          {
            title: 'Wallet Address',
            isActive: store.screen === 'WALLET',
            onClick: () => {
              store.update({ screen: 'WALLET' });
            },
          },
          {
            title: 'Phone',
            isActive: store.screen === 'PHONE',
            onClick: () => {
              store.update({ screen: 'PHONE' });
            },
          },
          {
            title: 'Bank Account',
            isActive: store.screen === 'BANK',
            onClick: () => {
              store.update({ screen: 'BANK' });
            },
          },
        ]}
      />
      {store.screen === 'WALLET' && <WalletScreen />}
      {store.screen === 'PHONE' && <PhoneScreen />}
      {store.screen === 'BANK' && <BankAccountScreen />}
    </div>
  );
}
