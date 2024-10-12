'use client';
import { Navbar, Spinner } from '@/comps';
import React from 'react';
import { IoSettings } from 'react-icons/io5';
import { useSwap } from './useSwap';
import { BottomCurrencies } from './Currencies';
import { MdClose } from 'react-icons/md';
import dynamic from 'next/dynamic';

const SwapConfirm = dynamic(() => import('./SwapConfirm'), {
  loading: () => <Spinner />,
});
const Swap = dynamic(() => import('./Swap'), { loading: () => <Spinner /> });

export default function SwapPage() {
  const { showConfirm, update } = useSwap();

  return (
    <div>
      <Navbar
        title={showConfirm ? 'Confirm Swap' : 'Swap tokens'}
        isBack
        icon={showConfirm ? MdClose : IoSettings}
        onIconClick={() => {
          update({
            showConfirm: false,
          });
        }}
      />

      <div className="px-5 py-2 gap-y-2 w-full flex flex-col items-center space-y-3">
        {showConfirm ? <SwapConfirm /> : <Swap />}
        {/* <SwapConfirm /> */}
      </div>

      <BottomCurrencies />
    </div>
  );
}
