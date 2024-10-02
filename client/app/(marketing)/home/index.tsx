'use client';

import React from 'react';
import { JumbutronSection, HeroWithImg } from '../_comps';
import { AppButton } from '@/comps';
import { useWallet, useAppRouter } from '@/lib';
import { useAccount, useConnect } from 'wagmi';

export function HomeSection() {
  const router = useAppRouter();
  // const { isConnected, isLoading } = useWallet();
  const { isConnected, isConnecting, isReconnecting } = useAccount();
  const { connect, connectors, isLoading: loadingConnect } = useConnect();
  const isLoading = isConnecting || isReconnecting || loadingConnect;

  const login = () => {
    const activeCon = connectors.filter((con) => con.name.toUpperCase() === 'WEB3AUTH')[0];

    connect({
      connector: activeCon,
    });
  };

  const handleClick = () => {
    if (isConnected) {
      router.push('/dashboard');
    } else {
      login();
    }
  };

  return (
    <div className={'flex flex-col items-center justify-center'} style={{ overscrollBehavior: 'none' }}>
      <HeroWithImg img={'/banner.png'}>{''}</HeroWithImg>

      <JumbutronSection
        title={'Swift exchange'}
        subtitle="Easy to use off-ramping service. We also help you develop a good saving habit."
      />

      <div className="my-5 flex flex-col items-center justify-center">
        <AppButton className="w-fit" onClick={handleClick} isLoading={isLoading}>
          {isConnected ? 'Get Started' : 'Login'}
        </AppButton>
      </div>
    </div>
  );
}
