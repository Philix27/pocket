'use client';

import React from 'react';
import { TextH, TextP } from '@/comps';
import { cn, useAppRouter } from '@/lib';
import { HeroCenter, HeroSection, JumbutronSection } from './_comps';
import { ContentBlock } from './_comps/content';

export default function Home() {
  const router = useAppRouter();

  return (
    <>
      <HeroSection
        title={`More than just a card`}
        subtitle={`Access the new era 
        of interoperable finance, all
        in the palm of your hands.`}
        img={'/phone.png'}
      />
      <JumbutronSection title={'We sell and swap'} subtitle={'Everything one and off ramping'} />
      <HeroCenter>
        <div className="h-500 w-full">
          <p>The ultimate all-in-one self-custodial crypto + neobanking-inspired solution</p>
        </div>
      </HeroCenter>
      {Hero()}
      {Cards()}
      {ContentBlock()}
      {/* {ContentBlock()} */}

      {MobileBanner()}
      {Footer()}
    </>
  );
}

function Goals() {
  return (
    <div className={'flex flex-col items-center w-full h-full bg-zinc-100 min-h-[50vh]'}>
      <div className="w-[80%] h-full flex items-center justify-center">
        <div className="w-[50%] bg-slate-200">
          <h1>A whole world of crypto, in one simple account.</h1>
        </div>
        <div className="w-[50%] bg-pink-600">
          <TextH>Best selling</TextH>
        </div>
      </div>
      <div className="w-[80%] h-full flex items-center justify-center"></div>
    </div>
  );
}
function Testimonial() {
  return (
    <div className={'flex flex-col items-center w-full h-full bg-zinc-100 min-h-[50vh]'}>
      <div className="w-[80%] h-full flex items-center justify-center">
        <div className="w-[50%] bg-slate-200">
          <h1>A whole world of crypto, in one simple account.</h1>
        </div>
        <div className="w-[50%] bg-pink-600">
          <TextH>Best selling</TextH>
        </div>
      </div>
      <div className="w-[80%] h-full flex items-center justify-center"></div>
    </div>
  );
}

function MobileBanner() {
  return (
    <div className={'flex flex-col items-center w-full h-full bg-zinc-100 min-h-[50vh]'}>
      <div className="w-[80%] h-full flex items-center justify-center">
        <div className="w-[50%] bg-slate-200">
          <h1>A whole world of crypto, in one simple account.</h1>
        </div>
        <div className="w-[50%] bg-pink-600">
          <TextH>Best selling</TextH>
        </div>
      </div>
      <div className="w-[80%] h-full flex items-center justify-center"></div>
    </div>
  );
}


function Footer() {
  return (
    <div className={'flex flex-col items-center w-full h-full bg-teal-950 min-h-[50vh]'}>
      <div className="w-[80%] h-full flex items-center justify-center">
        <div className="w-[50%] bg-slate-200">
          <h1>A whole world of crypto, in one simple account.</h1>
        </div>
        <div className="w-[50%] bg-pink-600">
          <TextH>Best selling</TextH>
        </div>
      </div>
      <div className="w-[80%] h-full flex items-center justify-center"></div>
    </div>
  );
}

function Cards() {
  return (
    <div className={'flex flex-col items-center w-full h-full bg-slate-100  min-h-[50vh]'}>
      <div className="w-[80%] h-full flex items-center justify-center">
        <div className="w-[50%] bg-slate-200">
          <h1>A whole world of crypto, in one simple account.</h1>
        </div>
        <div className="w-[50%] bg-pink-600">
          <TextH>Best selling</TextH>
        </div>
      </div>
      <div className="w-[80%] h-full flex items-center justify-center"></div>
    </div>
  );
}

function Hero() {
  return (
    <div className={'flex flex-col items-center w-full h-full bg-teal-950 min-h-[60vh]'}>
      <div className="w-[80%] h-full flex items-center justify-center">
        <div className="w-[50%] bg-slate-200">
          <h1>A whole world of crypto, in one simple account.</h1>
        </div>
        <div className="w-[50%] bg-pink-600">
          <TextH>Best selling</TextH>
        </div>
      </div>
    </div>
  );
}
