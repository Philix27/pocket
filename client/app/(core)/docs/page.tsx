'use client';
import { Navbar, Row } from '@/comps';
import { useRouter } from 'next/navigation';
import React from 'react';
import { BiGroup, BiLock, BiReceipt } from 'react-icons/bi';
import { IoHelp } from 'react-icons/io5';

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
          hideArrow
          onClick={() => {
            // router.push('/docs');
            router.push('/docs/FAQ');
          }}
        />
        <Row
          title={'About us'}
          subtitle={'Mobarter, an easy to use offramping service'}
          Icon={BiGroup}
          hideArrow
          onClick={() => {
            router.push('/docs/ABOUT');
          }}
        />
        <Row
          title={'Privacy Policy'}
          subtitle={'Learn how we manage your data'}
          Icon={BiLock}
          hideArrow
          onClick={() => {
            router.push('/docs/PP');
          }}
        />
        <Row
          title={'Terms of Service'}
          subtitle={'Compliance'}
          Icon={BiReceipt}
          hideArrow
          onClick={() => {
            router.push('/docs/TOS');
          }}
        />
      </div>
    </div>
  );
}
