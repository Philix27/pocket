'use client';

import React from 'react';

import { JumbutronSection, HeroWithImg } from '../_comps';
import { useAppRouter, useWeb3Modal } from '@/lib';
import { AppButton, TextH } from '@/comps';
import { use3Wagmi } from '@/lib';
import { useAccount, useConnect } from 'wagmi';

export function HomeSection() {
  const router = useAppRouter();
  const { isConnected, connectors, connectionErr, connect } = use3Wagmi();
  const { login } = useWeb3Modal();
  return (
    <div className={'flex flex-col items-center justify-center'} style={{ overscrollBehavior: 'none' }}>
      <HeroWithImg img={'/banner.png'}>
        <TextH v="h1" className={'text-[24px] font-extrabold md:text-[50px] text-card-foreground'}>
          <span className="text-primary tracking-wide"> Pocket Ramp </span>
        </TextH>
      </HeroWithImg>
      <div className="md:hidden my-5 flex flex-col items-center justify-center">
        {isConnected ? (
          <AppButton className="w-fit" onClick={() => router.go('/dashboard')}>
            Get Started
          </AppButton>
        ) : (
          <div className="main gap-x-2 gap-y-3">
            {connectors
              .filter((con, i) => con.name.toUpperCase() == 'WEB3AUTH')
              .map((connector) => {
                return (
                  <AppButton
                    key={connector.id}
                    onClick={async () => {
                      login();
                      // try {
                      //   connect({ connector });
                      //   console.log('connect 256', connector);
                      // } catch (error) {
                      //   console.log('connect 456', error);
                      // }
                    }}
                  >
                    Login with {connector.name}
                  </AppButton>
                );
              })}
            {connectionErr && <div>{connectionErr.message}</div>}
          </div>
        )}
      </div>
      <JumbutronSection
        title={'Swift exchange'}
        subtitle="Easy to use off-ramping service. We also help you develop a good saving habit."
      />
    </div>
  );
}
