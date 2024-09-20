'use client';
import { Navbar, TextH } from '@/comps';
import React from 'react';

import QuickActions from './QuickActions';
import TransactionHistory from './transactions';
import { IoNotifications } from 'react-icons/io5';

export default function DashboardScreen() {
  return (
    <>
<<<<<<< HEAD:apps/client/app/(core)/dashboard/index.tsx
      <Navbar title={'Pocket Ramp'} icon={IoNotifications} onIconClick={() => {}} />
      <div className="px-6 py-4 mt-12 mb-10">
        {/* <TextH className="text-3xl font-bold">$300,000</TextH> */}
=======
      <Navbar title={'Xpensa'} icon={IoNotifications} onIconClick={() => {}} />
      <div className="px-6 py-4 mt-8 mb-10">
>>>>>>> main:client/app/(core)/dashboard/index.tsx
        <QuickActions />
        <TransactionHistory />
      </div>
    </>
  );
}
