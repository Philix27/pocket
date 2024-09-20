'use client';
import { Navbar, Tabs } from '@/comps';
import React, { useState } from 'react';
import DepositSection from './_comps/deposit';
import WithdrawalSection from './_comps/withdraw';

export default function Savings() {
  const [IsDeposit, setIsDeposit] = useState(true);

  return (
    <>
      <Navbar title={'Savings'} isBack />
      <div className="mb-10">
        <Tabs
          data={[
            {
              title: 'Deposit',
              isActive: IsDeposit,
              onClick: () => setIsDeposit(true),
            },
            {
              title: 'Withdraw',
              isActive: !IsDeposit,
              onClick: () => setIsDeposit(false),
            },
          ]}
        />
        {IsDeposit ? <DepositSection /> : <WithdrawalSection />}
      </div>
    </>
  );
}
