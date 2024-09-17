'use client';
import { AppButton, AppInput, Navbar, SimpleRow, TextH, TextP } from '@/comps';
import { use3Wagmi } from '@/lib';
import React from 'react';
import QRCode from 'react-qr-code';

export default function SendMoneyPage() {
  const { address } = use3Wagmi();
  return (
    <div>
      <Navbar title="Send" isBack />

      <div className="px-5 gap-y-2 w-full">
        <AppInput control={undefined} name="wallet" place={'Enter wallet address'} />
        <AppInput control={undefined} name="username" place={'Enter username'} />
        <AppInput control={undefined} name="phone" place={'Enter phone number'} />
        <AppButton>Send</AppButton>
      </div>
    </div>
  );
}
// Comp icon to copy wallet address
// Share Icon to share generate image
