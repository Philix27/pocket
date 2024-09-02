'use client';

import React from 'react';

import { HeroSection, JumbutronSection, HeroWithImg } from '../_comps';
import { useAppRouter } from '@/lib';
import { AppButton, TextH } from '@/comps';
import { useWeb3Modal } from '@/lib';

export function HomeSection() {
  const router = useAppRouter();
  const { login, isLoggedIn } = useWeb3Modal();

  return (
    <div className={'flex flex-col items-center justify-center'}>
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
      <div className="hidden md:block">
        <HeroSection img={'/bit.jpeg'} title={'Play chess with friends a'} subtitle={``} />
      </div>
      <JumbutronSection title={'Fun time'} subtitle="Play chess and have fun with friends and top chess master." />
    </div>
  );
}
