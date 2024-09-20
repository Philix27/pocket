'use client';
import { Navbar, Tabs } from '@/comps';
import React, { useState } from 'react';
import { OrdersComp } from './_comps/orders';
import AdsComp from './_comps/ads';
import { useAccount } from 'wagmi';

export default function SwapPage() {
  const [activeTab, setActiveTap] = useState<'CREATE' | 'ADS' | 'ORDERS'>('ORDERS');
  const { address } = useAccount();
  return (
    <>
      <Navbar title={'Exchange'} isBack />
      <div className="mb-[100px]">
        <Tabs
          data={[
            {
              title: 'Ads',
              isActive: activeTab === 'ADS',
              onClick: () => setActiveTap('ADS'),
            },
            {
              title: 'Orders',
              isActive: activeTab === 'ORDERS',
              onClick: () => setActiveTap('ORDERS'),
            },
          ]}
        />
        {activeTab === 'ADS' && <AdsComp />}
        {activeTab === 'ORDERS' && <OrdersComp />}
      </div>
    </>
  );
}
