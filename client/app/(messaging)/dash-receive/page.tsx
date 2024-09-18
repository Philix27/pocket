'use client';
import { Navbar, SimpleRow, TextH, TextP } from '@/comps';
import { use3Wagmi } from '@/lib';
import React from 'react';
import QRCode from 'react-qr-code';

export default function SendMoneyPage() {
  const { address } = use3Wagmi();
  return (
    <div>
      <Navbar title="Receive" isBack />

      <div className="px-5 h-full flex flex-col items-center justify-center w-full">
        <div className="flex items-center justify-center my-4 ">
          <QRCode className="w-full bg-white p-2 rounded-md" value={address!} viewBox={`0 0 256 256`} />
        </div>
        <div className="w-[70%] flex items-center justify-center  bg-card rounded-lg p-2 break-words my-4">
          <TextP className="text-center truncate ">{address}</TextP>
        </div>
        <div className="w-full">
          <SimpleRow left={'Display name'} right="philix27" />
          <SimpleRow left={'Phone'} right="081082293" />
        </div>
      </div>
    </div>
  );
}
// Comp icon to copy wallet address
// Share Icon to share generate image
