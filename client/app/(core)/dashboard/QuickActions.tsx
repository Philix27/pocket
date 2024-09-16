'use client';
import { TextH, TextP } from '@/comps';
import React from 'react';
import { IconType } from 'react-icons';
import { LuSend, LuUtilityPole } from 'react-icons/lu';
import { IoIosSwap } from 'react-icons/io';
import { MdOutlineCallReceived } from 'react-icons/md';
import { CiDollar, CiLock } from 'react-icons/ci';
import { useAppRouter } from '@/lib';
import { IoCallOutline } from 'react-icons/io5';
import { TbFileInvoice } from 'react-icons/tb';

export default function QuickActions() {
  const router = useAppRouter();
  const data: { Icon: IconType; title: string; link: string }[] = [
    {
      Icon: LuSend,
      //display bottom sheet of address to send funds to
      title: 'Send',
      link: '/dash-send',
    },
    {
      Icon: MdOutlineCallReceived,
      //display bottom sheet of address and barcode scanner
      title: 'Receive',
      link: '/dash-receive',
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
      Icon: IoIosSwap,
      title: 'Buy',
      link: '/swap',
    },
    {
      Icon: CiDollar,
      title: 'Withdraw',
      link: '/fx',
    },
  ];
  const moreData: { Icon: IconType; title: string; link: string }[] = [
    {
      Icon: CiLock,
      title: 'Savings',
      link: '/savings',
    },
    {
      Icon: IoCallOutline,
      title: 'Airtime',
      link: '/send',
    },
    {
      Icon: LuUtilityPole,
      title: 'Bills',
      link: '/send',
    },
    {
      Icon: TbFileInvoice,
      title: 'Invoice',
      link: '/swap',
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
      <TextH className='mt-4'>More</TextH>
      <div className="grid grid-cols-4 gap-x-2 gap-y-2 w-full my-4">
        {moreData.map((val, i) => {
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
