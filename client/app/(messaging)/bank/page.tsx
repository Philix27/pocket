'use client';
import { Navbar, Row } from '@/comps';
import React from 'react';
import { LuUtilityPole } from 'react-icons/lu';
import { FaRegAddressBook } from 'react-icons/fa';

export default function KycPage() {
  return (
    <div>
      <Navbar title="Bank accounts" isBack />
      <div className="px-5 w-full">
        <Row title="GTB" subtitle="Full Name" Icon={LuUtilityPole} />
        <Row title="Zenith" subtitle="Full Name" Icon={FaRegAddressBook} />
        <Row title="UBA" subtitle="Full Name" Icon={FaRegAddressBook} />
      </div>
    </div>
  );
}
