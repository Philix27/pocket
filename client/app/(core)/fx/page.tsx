'use client';
import { Navbar, Tabs, TextH, TextP } from '@/comps';
import React, { useState } from 'react';
import OrdersComp from './orders';
import P2pComp from './p2p';
import { IoSwapHorizontal } from 'react-icons/io5';

export default function SwapPage() {
  const [isSwap, setIsSwap] = useState(true);

  return (
    <>
      <Navbar title={'Exchange'} icon={IoSwapHorizontal} onIconClick={() => {}} />
      <div className="mb-10">
        <Tabs
          data={[
            {
              title: 'Orders',
              isActive: isSwap,
              onClick: () => setIsSwap(true),
            },
            {
              title: 'P2P',
              isActive: !isSwap,
              onClick: () => setIsSwap(false),
            },
          ]}
        />
        {isSwap ? <OrdersComp /> : <P2pComp />}
      </div>
    </>
  );
}
