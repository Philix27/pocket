'use client';
import { Navbar, Tabs } from '@/comps';
import React, { useState } from 'react';
import OrdersComp from './orders';
import P2pComp from './p2p';
import { IoSwapHorizontal } from 'react-icons/io5';
import CreateAdsSection from './deposit';

export default function SwapPage() {
  const [activeTab, setActiveTap] = useState<'CREATE' | 'P2P' | 'ORDERS'>('ORDERS');

  return (
    <>
      <Navbar title={'Exchange'} icon={IoSwapHorizontal} onIconClick={() => {}} />
      <div className="mb-10">
        <Tabs
          data={[
            {
              title: 'Orders',
              isActive: activeTab === 'ORDERS',
              onClick: () => setActiveTap('ORDERS'),
            },
            {
              title: 'Create',
              isActive: activeTab === 'CREATE',
              onClick: () => setActiveTap('CREATE'),
            },
            {
              title: 'P2P',
              isActive: activeTab === 'P2P',
              onClick: () => setActiveTap('P2P'),
            },
          ]}
        />
        {activeTab === 'ORDERS' && <OrdersComp />}
        {activeTab === 'P2P' && <P2pComp />}
        {activeTab === 'CREATE' && <CreateAdsSection />}
      </div>
    </>
  );
}
