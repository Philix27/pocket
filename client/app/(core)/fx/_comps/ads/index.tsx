import { AppButton, TextP } from '@/comps';
import React, { useState } from 'react';
import { boolean } from 'zod';
import { adsData, IAds } from './data';
import { cn, shortAddress } from '@/lib';
import { FHE } from '@/contract';
import { toast } from 'sonner';

export default function AdsComp() {
  const [order, setOrder] = useState<IAds>();
  const { createEscrow } = FHE.useCreateEscrow();

  const submitData = async () => {
    if (!order) {
      toast.error('Please select an order');
      return;
    }

    try {
      createEscrow(order?.owner, order?.rate);
      toast('Escrow created successfully');
    } catch (error) {
      console.log('Error: ads', error);
      toast('Oops an error occured');
    }
  };

  return (
    <div className="py-4 px-6 mb-[100px]">
      <TextP>Filters</TextP>
      <div className="my-2">
        {adsData.map((ads, index) => (
          <div className="w-full bg-card mb-2 rounded-lg p-3 border-muted border-[0.1px]" key={index}>
            <Row title={'Username'} subtitle={'Felix Eligbue'} />
            <Row title={'Limit'} subtitle={`${ads.lowerLimit.toString()} - ${ads.upperLimit.toString()}`} />
            <Row title={'SALE'} subtitle={ads.isBuy ? 'BUY' : 'SELL'} />
            <Row title={'Address'} subtitle={shortAddress(ads.owner)} />
            <Row title={'Payment Method'} subtitle={ads.paymentMethod} />
            <Row title={'Rate'} subtitle={ads.rate.toString()} isLast />
            <AppButton
              onClick={() => {
                setOrder(ads);
                if (ads) {
                  submitData();
                }
              }}
            >
              Buy
            </AppButton>
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
