'use client';
import { AppButton, AppTextInput, BottomSheet, Navbar, Row, TextP } from '@/comps';
import React, { useState } from 'react';
import { AirtimeData } from './data';
import Image from 'next/image';
import { GrRadial, GrRadialSelected } from 'react-icons/gr';
import { cn } from '@/lib';

export default function AirtimePage() {
  const [showNetworks, setNetworks] = useState<boolean>(false);
  return (
    <>
      <div>
        <Navbar title="Purchase airtime" isBack />
        <div className="w-full px-5 py-4 flex flex-col items-center justify-center">
          <div className="flex w-full items-center justify-between">
            <TextP
              className="text-primary text-[10px] font-semibold"
              onClick={() => {
                setNetworks(true);
              }}
            >
              Select Network
            </TextP>
            <Image src="/xmtp-icon.png" alt="" height={40} width={40} />
          </div>
          <AppTextInput
            control={undefined}
            name={'phone'}
            place="Enter phone number"
            type="number"
            label="Phone number"
            className="w-full"
          />
          <div className="w-full grid grid-cols-4 gap-2 my-4">
            {AirtimeData['Nigeria'].amount.map((val, i) => (
              <div key={i} className={cn(`px-4 py-2 bg-card rounded-full flex items-center justify-center`)}>
                <TextP className="text-primary">
                  {AirtimeData['Nigeria'].symbol}
                  {val.toString()}
                </TextP>
              </div>
            ))}
          </div>

          <AppTextInput control={undefined} name={'amount'} type="number" place="Enter amount" label="Amount" />
          <AppButton className="w-[75%]">Buy</AppButton>
        </div>
      </div>
      <BottomSheet
        onClose={() => {
          setNetworks(false);
        }}
        show={showNetworks}
      >
        <Row title={'MTN'} Icon={GrRadialSelected} hideArrow />
        <Row title={'Airtel'} Icon={GrRadial} hideArrow />
        <Row title={'Glo'} Icon={GrRadial} hideArrow />
      </BottomSheet>
    </>
  );
}
