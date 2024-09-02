'use client';
import { Navbar, TextH, TextP } from '@/comps';
import React from 'react';

export default function DashboardScreen() {
  return (
    <>
      <Navbar title={'Savings'} />
      <div className="px-8 py-4 mb-10">
        <TextP v={'p5'}>Lock funds / Stake</TextP>
      </div>
    </>
  );
}
