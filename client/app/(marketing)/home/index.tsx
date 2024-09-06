'use client';

import React from 'react';

import { JumbutronSection, HeroWithImg } from '../_comps';
import { useAppRouter } from '@/lib';
import { AppButton, TextH } from '@/comps';
import { useWeb3Modal } from '@/lib';

export function HomeSection() {
  const router = useAppRouter();
  const { login, isLoggedIn } = useWeb3Modal();

  return (
    <div className={'flex flex-col items-center justify-center'} style={{ overscrollBehavior: 'none' }}>
      <HeroWithImg img={'/bit.jpeg'}>
        <TextH v="h1" className={'text-[24px] font-extrabold md:text-[50px] text-card-foreground'}>
          <span className="text-primary tracking-wide"> Pocket Ramp </span>
        </TextH>
      </HeroWithImg>
      <div className="md:hidden my-5 flex flex-col items-center justify-center">
        {isLoggedIn ? (
          <AppButton className="w-fit" onClick={() => router.go('/dashboard')}>
            Get Started
          </AppButton>
        ) : (
          <AppButton className="w-fit" onClick={login}>
            Login
          </AppButton>
        )}
      </div>

      <JumbutronSection
        title={'Lock and Grow'}
        subtitle="Easy to use off-ramping service. We also help you save your funds"
      />
    </div>
  );
}
