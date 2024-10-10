'use client';
import { Navbar, TextP } from '@/comps';
import { use3Wagmi } from '@/lib';
import { useTheme } from 'next-themes';
import React from 'react';

export default function SendMoneyPage() {
  const { address } = use3Wagmi();
  const theme = useTheme();
  return (
    <div>
      <Navbar title="Notifications" isBack />

      <div className="px-5 w-full">
        <div className="py-4 space-y-4 flex flex-col w-full items-center">
          <TextP> No notifications </TextP>
        </div>
      </div>
    </div>
  );
}
// Comp icon to copy wallet address
// Share Icon to share generate image
