'use client';
import { TextH, TextP } from '@/comps';
import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { BiDollar, BiHome, BiSupport } from 'react-icons/bi';
import { FaFileInvoice } from 'react-icons/fa';

export function AdminSidebar() {
  return (
    <div className="w-[200px] bg-card flex flex-col h-screen border-r">
      <div className="h-[60px] flex items-center justify-center w-full bg-background">
        <TextH>Mobarter</TextH>
      </div>
      {data.map((val, i) => (
        <Link href={val.link}>
          <div key={i} className="py-2 px-5 hover:bg-background">
            <TextP>{val.title}</TextP>
          </div>
        </Link>
      ))}
    </div>
  );
}

const data: {
  title: string;
  link: string;
  icon: IconType;
}[] = [
  {
    title: 'Home',
    link: '/admin',
    icon: BiHome,
  },
  {
    title: 'Airtime',
    link: '/airtime',
    icon: BiHome,
  },
  {
    title: 'Withdraw',
    link: '/airtime',
    icon: BiDollar,
  },
  {
    title: 'Logs',
    link: '/airtime',
    icon: FaFileInvoice,
  },
  {
    title: 'Support',
    link: '/airtime',
    icon: BiSupport,
  },
  {
    title: 'Credit Bank Account',
    link: '/airtime',
    icon: BiHome,
  },
  {
    title: 'Send Crypto',
    link: '/airtime',
    icon: BiHome,
  },
];
