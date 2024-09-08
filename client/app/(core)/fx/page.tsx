'use client';
import { Navbar, Tabs } from '@/comps';
import React, { useState } from 'react';
import OrdersComp from './Orders';
import AdsComp from './Ads';
import { IoSwapHorizontal } from 'react-icons/io5';
import CreateAdsSection from './Deposit';

export default function SwapPage() {
  const [activeTab, setActiveTap] = useState<'CREATE' | 'ADS' | 'ORDERS'>('ORDERS');

  return (
    <>
      <Navbar title={'Exchange'} icon={IoSwapHorizontal} onIconClick={() => {}} />
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
            {
              title: 'Create',
              isActive: activeTab === 'CREATE',
              onClick: () => setActiveTap('CREATE'),
            },
          ]}
        />
        {activeTab === 'ORDERS' && <OrdersComp />}
        {activeTab === 'ADS' && <AdsComp />}
        {activeTab === 'CREATE' && <CreateAdsSection />}
      </div>
    </>
  );
}
