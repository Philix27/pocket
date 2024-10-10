'use client';
import { Navbar, Spinner } from '@/comps';
import React from 'react';
import QuickActions from './QuickActions';
import { IoNotifications } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import dynamic from 'next/dynamic';

const Transactions = dynamic(() => import('./transactions'), { loading: () => <Spinner /> });

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
        <Transactions />
      </div>
    </>
  );
}
