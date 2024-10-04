'use client';

import React from 'react';
import { TextP } from '@/comps';
import { invoices } from './data';

export default function Page() {
  return (
    <>
      <div className={'w-full h-full py-4 px-4 flex flex-col items-center'}>
        {invoices.map((val, i) => (
          <div key={i} className="w-full hover:bg-accent grid grid-cols-4 self-center p-2 border-b">
            <TextP>{val.invoice}</TextP>
            <TextP>{val.paymentStatus}</TextP>
            <TextP>{val.paymentMethod}</TextP>
            <TextP>{val.totalAmount}</TextP>
          </div>
        ))}
      </div>
    </>
  );
}
