'use client';

<<<<<<< HEAD:apps/client/app/(marketing)/home/index.tsx
import React from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> main:client/app/(marketing)/home/index.tsx
import { JumbutronSection, HeroWithImg } from '../_comps';
import { useAppRouter } from '@/lib';
import { AppButton, TextH } from '@/comps';
import { use3Wagmi } from '@/lib';

export function HomeSection() {
  const router = useAppRouter();
  const { isConnected, login } = use3Wagmi();

  const handleClick = () => {
    if (isConnected) {
      router.push('/dashboard');
    } else {
      login();
    }
  };

  useEffect(() => {
    //  router.push('/dashboard');
  }, []);

  return (
    <div className={'flex flex-col items-center justify-center'} style={{ overscrollBehavior: 'none' }}>
      <HeroWithImg img={'/banner.png'}>
        <TextH v="h1" className={'text-[24px] font-extrabold md:text-[50px] text-card-foreground'}>
          <span className="text-primary tracking-wide"> Pocket Ramp </span>
        </TextH>
      </HeroWithImg>
      <div className="my-5 flex flex-col items-center justify-center">
<<<<<<< HEAD:apps/client/app/(marketing)/home/index.tsx
        {isConnected ? (
          <AppButton className="w-fit" onClick={() => router.go('/dashboard')}>
            Get Started
          </AppButton>
        ) : (
          <AppButton className="w-fit" onClick={login}>
            Login
          </AppButton>
        )}
=======
        <AppButton className="w-fit" onClick={handleClick}>
          {isConnected ? 'Get Started' : 'Login'}
        </AppButton>
>>>>>>> main:client/app/(marketing)/home/index.tsx
      </div>
      <JumbutronSection
        title={'Swift exchange'}
        subtitle="Easy to use off-ramping service. We also help you develop a good saving habit."
      />
    </div>
  );
}
