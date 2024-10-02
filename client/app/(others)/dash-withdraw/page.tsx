'use client';
import { Navbar, Tabs } from '@/comps';
import React from 'react';
import { useWithdraw } from './useWithraw';
import { CoinList } from './1.List';
import { ConfirmTransaction } from './3.Confirm';
import { BankAccountAmount } from './2.Account';

//redirect to fast withdraw page
//Enter account number/ select account to send funds to
// move funds from wallet to pocket ramp wallet
export default function SendMoneyPage() {
  const store = useWithdraw();
  return (
    <div>
      <Navbar title="Withdraw" isBack />
      <Tabs
        data={[
          {
            title: 'Step 1',
            isActive: store.currentStep === '1LIST',
          },
          {
            title: 'Step 2',
            isActive: store.currentStep === '2ACCOUNT',
          },
          {
            title: 'Step 3',
            isActive: store.currentStep === '3CONFIRM',
          },
        ]}
      />
      <div className="px-5 w-full">
        <div className="py-4 px-2 space-y-4 flex flex-col w-full items-center">
          {store.currentStep === '1LIST' && <CoinList />}
          {store.currentStep === '2ACCOUNT' && <BankAccountAmount />}
          {store.currentStep === '3CONFIRM' && <ConfirmTransaction />}
        </div>
      </div>
    </div>
  );
}
// Comp icon to copy wallet address
// Share Icon to share generate image
