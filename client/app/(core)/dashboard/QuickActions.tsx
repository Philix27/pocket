'use client';
import { TextP } from '@/comps';
import { useAppRouter } from '@/lib';
import React from 'react';
import { IconType } from 'react-icons';
import { LuSend, LuUtilityPole } from 'react-icons/lu';
import { MdOutlineCallReceived } from 'react-icons/md';
import { CiDollar, CiLock } from 'react-icons/ci';
import { IoCallOutline, IoSwapHorizontalOutline } from 'react-icons/io5';
import { BsCashCoin } from 'react-icons/bs';

export default function QuickActions() {
  const router = useAppRouter();
  const data: { Icon: IconType; title: string; link: string }[] = [
    {
      Icon: LuSend,
      title: 'Send',
      link: '/dash-send',
    },
    {
      Icon: MdOutlineCallReceived,
      title: 'Receive',
      link: '/dash-receive',
    },
    {
      Icon: BsCashCoin,
      title: 'Withdraw',
      link: '/dash-withdraw',
    },
    {
      Icon: IoSwapHorizontalOutline,
      title: 'Swap',
      link: '/dash-swap',
    },
    {
      Icon: CiLock,
      title: 'Savings',
      link: '/savings',
    },
    {
      Icon: IoCallOutline,
      title: 'Airtime',
      link: '/dash-airtime',
    },
    {
      Icon: LuUtilityPole,
      title: 'Bills',
      link: '/dash-bills',
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-x-2 gap-y-2 w-full">
        {data.map((val, i) => {
          const Icon = val.Icon;
          return (
            <div
              key={i}
              className="p-4 flex flex-col items-center justify-center bg-accent rounded-md cursor-pointer"
              onClick={() => router.push(val.link)}
            >
              <Icon size={24} className="text-foreground mb-2" />
              <TextP> {val.title}</TextP>
            </div>
          );
        })}
      </div>
    </>
  );
}
