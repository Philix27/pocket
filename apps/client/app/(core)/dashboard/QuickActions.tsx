'use client';
import { TextP } from '@/comps';
import { useAppRouter } from '@/lib';
import React from 'react';
import { IconType } from 'react-icons';
import { LuSend, LuUtilityPole } from 'react-icons/lu';
import { MdOutlineCallReceived, MdOutlineSettings } from 'react-icons/md';
import { CiDollar, CiLock } from 'react-icons/ci';
import { IoCallOutline, IoSettings } from 'react-icons/io5';
import { TbFileInvoice } from 'react-icons/tb';

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
      Icon: CiDollar,
      title: 'Withdraw',
      link: '/dash-withdraw',
    },
    {
      Icon: CiDollar,
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
      link: '/airtime',
    },
    {
      Icon: LuUtilityPole,
      title: 'Bills',
      link: '/bills',
    },
    {
      Icon: TbFileInvoice,
      title: 'Invoice',
      link: '/invoice',
    },
    {
      Icon: MdOutlineSettings,
      title: 'settings',
      link: '/settings',
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
              className="p-4 flex flex-col items-center justify-center bg-accent rounded-md"
              onClick={() => router.push(val.link)}
            >
              <Icon size={24} className="text-primary mb-2" />
              <TextP> {val.title}</TextP>
            </div>
          );
        })}
      </div>
    </>
  );
}
