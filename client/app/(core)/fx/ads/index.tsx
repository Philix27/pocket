import { TextP } from '@/comps';
import React from 'react';
import { boolean } from 'zod';
import { adsData } from './data';
import { cn } from '@/lib';

export default function AdsComp() {
  return (
    <div className="py-4 px-6 mb-[100px]">
      <TextP>Filters</TextP>
      <div className="my-2">
        {adsData.map((ads, index) => (
          <div className="w-full bg-card mb-2 rounded-lg p-3 border-muted border-[0.1px]" key={index}>
            <Row title={'Username'} subtitle={'Felix Eligbue'} />
            <Row title={'Limit'} subtitle={`${ads.lowerLimit.toString()} - ${ads.upperLimit.toString()}`} />
            <Row title={'SALE'} subtitle={ads.isBuy ? 'BUY' : 'SELL'} />
            <Row title={'Address'} subtitle={ads.owner} />
            <Row title={'Payment Method'} subtitle={ads.paymentMethod} />
            <Row title={'Rate'} subtitle={ads.rate.toString()} isLast />
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
