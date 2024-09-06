'use client';
import { TextP } from '@/comps';
import React from 'react';
import { IconType } from 'react-icons';
import { LuSend } from 'react-icons/lu';
import { IoIosSwap } from 'react-icons/io';
import { MdOutlineCallReceived, MdSavings } from 'react-icons/md';
import { CiDollar } from 'react-icons/ci';

import { useAppRouter } from '@/lib';
import { BiPhoneCall } from 'react-icons/bi';

export default function QuickActions() {
  const router = useAppRouter();
  const data: { Icon: IconType; title: string; link: string }[] = [
    {
      Icon: LuSend,
      //display bottom sheet of address to send funds to
      title: 'Send',
      link: '/send',
    },
    {
      Icon: MdOutlineCallReceived,
      //display bottom sheet of address and barcode scanner
      title: 'Receive',
      link: '/send',
    },
    {
      Icon: IoIosSwap,
      //redirect to p2p market place
      title: 'Swap',
      link: '/p2p',
    },
    {
      Icon: CiDollar,
      //redirect to fast withdraw page
      //Enter account number/ select account to send funds to
      // move funds from wallet to pocket ramp wallet
      title: 'Withdraw',
      link: '/fx',
    },
    {
      Icon: MdSavings,
      title: 'Savings',
      link: '/savings',
    },
    {
      Icon: BiPhoneCall,
      title: 'Airtime',
      link: '/send',
    },
    {
      Icon: IoIosSwap,
      title: 'Swap',
      link: '/swap',
    },
    {
      Icon: CiDollar,
      title: 'Withdraw',
      link: '/fx',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-x-2 gap-y-2 w-full my-4">
      {data.map((val, i) => {
        const Icon = val.Icon;
        return (
          <div
            className="p-4 flex flex-col items-center justify-center bg-accent rounded-md"
            onClick={() => router.push(val.link)}
          >
            <Icon size={24} className="text-primary mb-2" />
            <TextP> {val.title}</TextP>
          </div>
        );
      })}
    </div>
  );
}
