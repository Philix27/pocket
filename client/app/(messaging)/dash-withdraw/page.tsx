'use client';
import { AppButton, AppInput, AppSelect, Navbar } from '@/comps';
import { use3Wagmi } from '@/lib';
import { useTheme } from 'next-themes';
import React from 'react';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

//redirect to fast withdraw page
//Enter account number/ select account to send funds to
// move funds from wallet to pocket ramp wallet
export default function SendMoneyPage() {
  const { address } = use3Wagmi();
  const theme = useTheme();
  const isDark = theme.theme == 'dark';
  return (
    <div>
      <Navbar title="Withdraw" isBack />

      <div className="px-5 w-full">
        <div className="py-4 space-y-4 flex flex-col w-full items-center">
          <AppInput control={undefined} name="amount" place={'Enter amount'} type="number" />
          <AppSelect data={options} onChange={(e) => {}} />
          <AppButton className="w-[75%]">Send</AppButton>
        </div>
      </div>
    </div>
  );
}
// Comp icon to copy wallet address
// Share Icon to share generate image
