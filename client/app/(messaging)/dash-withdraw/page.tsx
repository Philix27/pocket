'use client';
import { AppButton, AppTextInput, AppSelect, Navbar, TextH } from '@/comps';
import { use3Wagmi } from '@/lib';
import { useTheme } from 'next-themes';
import React from 'react';

const options = [
  { value: 'GTB', label: 'GTB' },
  { value: 'Zenith', label: 'Zenith' },
  { value: 'UBA', label: 'UBA' },
];
const tokensOptions = [
  { value: 'cUSD', label: 'cUSD' },
  { value: 'CELO', label: 'CELO' },
  { value: 'cEURO', label: 'cEURO' },
];

//redirect to fast withdraw page
//Enter account number/ select account to send funds to
// move funds from wallet to pocket ramp wallet
export default function SendMoneyPage() {
  const { address } = use3Wagmi();
  const theme = useTheme();
  return (
    <div>
      <Navbar title="Withdraw" isBack />

      <div className="px-5 w-full">
        <div className="py-4 space-y-4 flex flex-col w-full items-center">
          <AppSelect data={tokensOptions} onChange={(e) => {}} label="Select token" />
          <AppTextInput control={undefined} name="amount" place={'Enter amount'} type="number" label="Amount" />
          <AppSelect data={options} onChange={(e) => {}} label="Bank account" />
          <TextH>You get 3400</TextH>
          <AppButton className="w-[75%]">Send</AppButton>
        </div>
      </div>
    </div>
  );
}
// Comp icon to copy wallet address
// Share Icon to share generate image
