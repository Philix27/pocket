'use client';
import { TextH, TextP } from '@/comps';
import { cn } from '@/lib';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IconType } from 'react-icons';
import { BiHome, BiLink } from 'react-icons/bi';
import { BsBank, BsTools } from 'react-icons/bs';
import { FaFileInvoice } from 'react-icons/fa';
import { GrGroup } from 'react-icons/gr';

export function AdminSidebar() {
  const pathname = usePathname();

  const checkActive = (val: string): boolean => {
    if (pathname === '/admin') {
      return true;
    }

    return pathname === val;
  };

  return (
    <div className="w-[250px] bg-card flex flex-col h-full border-r overflow-x-hidden">
      {/* <div className="h-[60px] flex items-center justify-center w-full bg-background">
        <TextH>Gasonomy </TextH>
      </div> */}
      {data.map((val, i) => {
        const { Icon } = val;
        return (
          <Link href={val.link}>
            <div
              key={i}
              className={cn(
                'py-3 px-5 hover:bg-background flex items-center',
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
    title: 'All',
    link: '/search/airtime',
    Icon: GrGroup,
  },
  {
    title: 'Blockchains',
    link: '/search/withdraw',
    Icon: BiLink,
  },
  {
    title: 'RPC',
    link: '/search/logs',
    Icon: FaFileInvoice,
  },
  {
    title: 'Tooling',
    link: '/search/support',
    Icon: BsTools,
  },
  {
    title: 'Subsystems',
    link: '/search/credit_bank',
    Icon: BsBank,
  },
  {
    title: 'Packages',
    link: '/search/credit_crypto',
    Icon: BiHome,
  },
];
