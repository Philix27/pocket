'use client';
import { TextH, TextP } from '@/comps';
import { cn } from '@/lib';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IconType } from 'react-icons';
import { BiDollar, BiHome, BiSupport } from 'react-icons/bi';
import { BsBank, BsPhone } from 'react-icons/bs';
import { FaFileInvoice } from 'react-icons/fa';

export function AdminSidebar() {
  const pathname = usePathname();

  const checkActive = (val: string): boolean => {
    if (pathname === '/admin') {
      return true;
    }

    return pathname === val;
  };

  return (
    <div className="w-[250px] bg-card flex flex-col h-screen border-r">
      <div className="h-[60px] flex items-center justify-center w-full bg-background">
        <TextH>Mobarter </TextH>
      </div>
      {data.map((val, i) => {
        const { Icon } = val;
        return (
          <Link href={val.link}>
            <div
              key={i}
              className={cn(
                'py-2 px-5 hover:bg-background flex items-center',
                checkActive(val.link) && 'bg-background'
              )}
            >
              <Icon className={cn('mr-4', checkActive(val.link) && 'text-primary')} size={20} />
              <TextP>{val.title}</TextP>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

const data: {
  title: string;
  link: string;
  Icon: IconType;
}[] = [
  {
    title: 'Home',
    link: '/admin',
    Icon: BiHome,
  },
  {
    title: 'Airtime',
    link: '/admin/airtime',
    Icon: BsPhone,
  },
  {
    title: 'Withdraw',
    link: '/admin/withdraw',
    Icon: BiDollar,
  },
  {
    title: 'Logs',
    link: '/admin/logs',
    Icon: FaFileInvoice,
  },
  {
    title: 'Support',
    link: '/admin/support',
    Icon: BiSupport,
  },
  {
    title: 'Credit Account',
    link: '/admin/credit_bank',
    Icon: BsBank,
  },
  {
    title: 'Credit Crypto',
    link: '/admin/credit_crypto',
    Icon: BiHome,
  },
];
