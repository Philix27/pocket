'use client';

import React from 'react';
import { TextH } from '@/comps';
import { useAppRouter } from '@/lib';
import { HeroSection, JumbutronSection } from './_comps';
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
      {/* <HeroCenter>
        <div className="h-500 w-full">
          <p>The ultimate all-in-one self-custodial crypto + neobanking-inspired solution</p>
        </div>
      </HeroCenter> */}
      {ContentBlock()}
      {Features()}
      {Cards()}
      {/* {ContentBlock()} */}

      {MobileBanner()}
      {Footer()}
    </>
  );
}

function Features() {
  return (
    <div className={'flex flex-col items-center w-full min-h-[80vh]'}>
      <div className="w-[80%] h-full flex items-center justify-center p-5 gap-x-5">
        <div className="w-[50%]">
          <h1 className="text-primary text-[50px] font-bold">A whole world of crypto</h1>
        </div>
        <div className="w-[50%] h-full flex item-center flex-col justify-between">
          <div>
            <p className="text-[50px] font-extrabold">Best selling</p>
            <p>Accelerate your financial freedom today</p>
          </div>
          <div>
            <p>The ultimate all-in-one self-custodial crypto + neobanking-inspired solution</p>
            <p>The ultimate all-in-one self-custodial crypto + neobanking-inspired solution</p>
            <p>The ultimate all-in-one self-custodial crypto + neobanking-inspired solution</p>
          </div>
        </div>
      </div>
    </div>
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
