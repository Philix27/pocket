'use client';
import { Tabs, TextP } from '@/comps';
import React, { useState } from 'react';
import { adsData } from './data';
import { cn } from '@/lib';

export default function OrdersComp() {
  const [isActive, setActive] = useState(false);

  return (
    <div className="px-6 mb-[100px]">
      <Tabs
        className="mt-[1px]"
        data={[
          {
            title: 'Pending',
            isActive: isActive,
            onClick: () => {
              setActive(true);
            },
          },
          {
            title: 'Canceled',
            isActive: !isActive,
            onClick: () => {
              setActive(false);
            },
          },
        ]}
      />
      <div className="my-2">
        {adsData.map((ads, index) => (
          <div className="w-full bg-card mb-2 rounded-lg p-3 border-muted border-[0.1px]" key={index}>
            <Row title={'Username'} subtitle={'Felix Eligbue'} />
            <Row title={'Amount'} subtitle={ads.amount.toString()} />
            <Row title={'Trade'} subtitle={ads.isBuy ? 'BUY' : 'SELL'} />
            <Row title={'Payment Method'} subtitle={ads.paymentMethod} />
            <Row title={'Trade with'} subtitle={ads.tradeWith} isLast />
          </div>
        ))}
      </div>
    </div>
  );
}

function Row(props: { title: string; subtitle: string; isLast?: boolean }) {
  return (
    <>
      <div className={cn('w-full flex items-center justify-between p-2 ', props.isLast || 'border-b-[0.1px]')}>
        <TextP className="text-muted">{props.title}</TextP>
        <TextP className="font-bold">{props.subtitle}</TextP>
      </div>
    </>
  );
}
