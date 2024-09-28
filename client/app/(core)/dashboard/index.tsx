'use client';
import { Navbar, TextH } from '@/comps';
import React from 'react';

import QuickActions from './QuickActions';
import TransactionHistory from './transactions';
import { IoNotifications } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

export default function DashboardScreen() {
  const router = useRouter();
  return (
    <>
      <Navbar
        title={'Mobarter'}
        icon={IoNotifications}
        onIconClick={() => {
          router.push('/dash-notify');
        }}
      />
      <div className="px-6 py-4 mt-8 mb-10">
        <QuickActions />
        <TransactionHistory />
      </div>
    </>
  );
}
