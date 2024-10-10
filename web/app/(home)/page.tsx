'use client';

import React from 'react';
import { TextH, TextP } from '@/comps';
import { cn, useAppRouter } from '@/lib';
import { SearchInput } from '@/(core)/_comps';
import { HeroSection, JumbutronSection } from './_comps';

export default function Home() {
  const router = useAppRouter();

  return (
    <>
      <HeroSection title={'Mobarter'} subtitle={'One quick exchange'} img={'/support.png'} />
      <JumbutronSection title={'We sell and swap'} subtitle={'Everything one and off ramping'} />
      {Hero()}
      {Cards()}
      {ContentBlock()}
      {ContentBlock()}

      {MobileBanner()}
      {Footer()}
    </>
  );
}

const tags: {
  title: string;
  bg: string;
}[] = [
  {
    title: 'Blockchains',
    bg: 'bg-orange-500',
  },
  {
    title: 'Subsystems',
    bg: 'bg-purple-500',
  },
  {
    title: 'RPC Providers',
    bg: 'bg-blue-500',
  },
  {
    title: 'Auth Providers',
    bg: 'bg-blue-500',
  },
  {
    title: 'Toolings',
    bg: 'bg-blue-500',
  },
];
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
function Jumbutron() {
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
function NumbersCount() {
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

function ContentBlock() {
  return (
    <div className={'flex flex-col items-center w-full h-full bg-zinc-100  min-h-[50vh]'}>
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
