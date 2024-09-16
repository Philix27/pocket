'use client';
import { Navbar, Row, SimpleRow } from '@/comps';
import { use3Wagmi } from '@/lib';
import React from 'react';
import QRCode from 'react-qr-code';

export default function SendMoneyPage() {
  const { address } = use3Wagmi();
  return (
    <div>
      <Navbar title="Send" isBack />

      <div className="px-5">
        <div className="flex items-center justify-center p-2 ">
          <QRCode className="w-full" value={address!} viewBox={`0 0 256 256`} />
        </div>
        <SimpleRow right="Address" left={address!} />
        <SimpleRow right="Display name" left={'Username'} />
        <SimpleRow right="Phone" left={'081082293'} />
      </div>
    </div>
  );
}
