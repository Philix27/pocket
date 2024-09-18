'use client';
import { Navbar, TextH } from '@/comps';
import React from 'react';

import QuickActions from './QuickActions';
import TransactionHistory from './transactions';
import { IoNotifications } from 'react-icons/io5';

export default function DashboardScreen() {
  return (
    <>
      <Navbar title={'Xpensa'} icon={IoNotifications} onIconClick={() => {}} />
      <div className="px-6 py-4 mt-8 mb-10">
        <QuickActions />
        <TransactionHistory />
      </div>
    </>
  );
}
