'use client';
import { Navbar, Tabs } from '@/comps';
import { use3Wagmi } from '@/lib';
import React from 'react';
import { useReceive } from './useRecieve';
import WalletInfo from './WalletInfo';

export default function SendMoneyPage() {
  const { address } = use3Wagmi();
  const store = useReceive();

  return (
    <div>
      <Navbar title="Receive" isBack />
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
            title: 'Buy',
            isActive: store.screen === 'PARTNER',
            onClick: () => {
              store.update({ screen: 'PARTNER' });
            },
          },
        ]}
      />
      <WalletInfo />
    </div>
  );
}
// Comp icon to copy wallet address
// Share Icon to share generate image
