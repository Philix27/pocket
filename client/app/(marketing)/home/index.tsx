'use client';

import React from 'react';

import { CardsSection, HeroSection, JumbutronSection, HeroWithImg } from '../_comps';
import { AppImg, AppPages } from '@/lib';
import { AppButton, TextH } from '@/comps';
import { cardData } from './cards';
import { useRouter } from 'next/navigation';
import { useWeb3Modal } from '@/lib';

export function HomeSection() {
  const router = useRouter();
  const { login, isLoggedIn } = useWeb3Modal();

  return (
    <div className={'flex flex-col items-center justify-center'}>
      <HeroWithImg img={'/bit.jpeg'}>
        <TextH v="h1" className={'text-[24px] font-extrabold md:text-[50px] text-card-foreground'}>
          <span className="text-primary tracking-wide"> ChatX </span>
          {/* <span className="text-primary tracking-wide"> Chess </span> and
          <span className="text-primary tracking-wide"> Checkers</span> */}
        </TextH>
      </HeroWithImg>
      <div className="md:hidden my-5 flex flex-col items-center justify-center">
        {isLoggedIn ? (
          <AppButton className="w-fit" onClick={() => router.push('/chat')}>
            Chat Now
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

      {/* <CardsSection data={cardData} /> */}
    </div>
  );
}
