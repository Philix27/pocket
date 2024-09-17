'use client';
import { Navbar, SimpleRow, TextH } from '@/comps';
import { use3Wagmi } from '@/lib';
import React from 'react';
import QRCode from 'react-qr-code';

export default function SendMoneyPage() {
  const { address } = use3Wagmi();
  return (
    <div>
      <Navbar title="Receive" isBack />

      <div className="px-5">
        <div className="flex items-center justify-center p-2 ">
          <QRCode className="w-full" value={address!} viewBox={`0 0 256 256`} />
        </div>
        <TextH>{address}</TextH>
        <SimpleRow left={'Display name'} right="philix27" />
        <SimpleRow left={'Phone'} right="081082293" />
      </div>
    </div>
  );
}
// Comp icon to copy wallet address
// Share Icon to share generate image
