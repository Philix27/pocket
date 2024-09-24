'use client';
import { AppButton, AppTextInput, Navbar, Row } from '@/comps';
import React from 'react';
import { MdAddTask } from 'react-icons/md';

export default function AirtimePage() {
  return (
    <div>
      <Navbar title="Purchase airtime" isBack />
      <div className="px-5 py-4">
        <Row title={'MTN'} subtitle={''} Icon={MdAddTask} />
        <Row title={'Airtel'} subtitle={''} Icon={MdAddTask} />
        <Row title={'Glo'} subtitle={''} Icon={MdAddTask} />

        <div className="w-full py-4 flex flex-col items-center justify-center">
          <AppTextInput
            control={undefined}
            name={'phone'}
            place="Enter phone number"
            type="number"
            label="Phone number"
          />
          <AppTextInput control={undefined} name={'amount'} type="number" place="Enter amount" label="Amount" />
          <AppButton className="w-[75%]">Buy</AppButton>
        </div>
      </div>
    </div>
  );
}
