'use client';
import { Navbar, Row } from '@/comps';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiLock } from 'react-icons/bi';
import { FaInfo } from 'react-icons/fa';
import { IoHelp, IoInformation } from 'react-icons/io5';

export default function HelpDocPage() {
  const router = useRouter();
  return (
    <div>
      <Navbar title={'Help'} />
      <div className="w-full px-5">
        <Row
          title={'Faq'}
          subtitle={'Frequently asked questions'}
          Icon={IoHelp}
          onClick={() => {
            router.push('/docs/FAQ');
          }}
        />
        <Row
          title={'About us'}
          subtitle={'Mobarter, an easy to use offramping service'}
          Icon={IoInformation}
          onClick={() => {
            router.push('/docs/ABOUT');
          }}
        />
        <Row
          title={'Privacy Policy'}
          subtitle={''}
          Icon={BiLock}
          onClick={() => {
            router.push('/docs/PP');
          }}
        />
        <Row
          title={'Terms of Service'}
          subtitle={''}
          Icon={FaInfo}
          onClick={() => {
            router.push('/docs/TOS');
          }}
        />
      </div>
    </div>
  );
}
