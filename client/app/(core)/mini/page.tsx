'use client';
import React from 'react';
import { IRow, Navbar, Row, TextP } from '@/comps';
import { MdSavings } from 'react-icons/md';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useAppRouter } from '@/lib';
import { FaFileInvoice, FaFileInvoiceDollar } from 'react-icons/fa';

export default function MiniAppsPage() {
  const router = useAppRouter();

  return (
    <>
      <Navbar title={'Mini Apps'} />
      <div className="px-5">
        <div>
          {getApps(router).map((val, i) => (
            <Row key={i} title={val.title} subtitle={val.subtitle} Icon={val.Icon} onClick={val.onClick} />
          ))}
        </div>
      </div>
    </>
  );
}

function getApps(router: AppRouterInstance): IRow[] {
  return [
    {
      title: 'Quick Locked Savings',
      subtitle: 'Lock your funds for over a short period of time. Unlock anytime',
      Icon: MdSavings,
      onClick: () => {
        router.push('/savings');
      },
    },
    {
      title: 'Annual Locked Savings',
      subtitle: 'Lock and Earn interest on your savings',
      Icon: MdSavings,
      onClick: () => {
        router.push('/savings');
      },
    },
    {
      title: 'Invoice generator',
      subtitle: 'Generate invoice for your employer',
      Icon: FaFileInvoiceDollar,
      onClick: () => {},
    },
    {
      title: 'Receipt generator',
      subtitle: '',
      Icon: FaFileInvoice,
      onClick: () => {},
    },
  ];
}
