'use client';
import { Navbar, TextH, TextP } from '@/comps';
import React from 'react';
import CreateGiftCard from './create';
import { CardsCreationHistory } from './history';

export default function DashboardScreen() {
  return (
    <>
      <Navbar title={'Pocket Ramp'} />
      <div className="px-8 py-4 mb-10">
        <TextP v={'p5'}>Send a gift card to your loved ones</TextP>
        {/* <CreateGiftCard />
        <CardsCreationHistory /> */}
      </div>
    </>
  );
}
