'use client';
import { Navbar, Row } from '@/comps';
import React from 'react';
import { IoCallOutline } from 'react-icons/io5';
import { LuUtilityPole } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';
import { FaRegAddressBook } from 'react-icons/fa';

export default function KycPage() {
  return (
    <div>
      <Navbar title="KYC Verification" isBack />
      <div className="px-5 w-full">
        <Row title="Name" subtitle="Full name" Icon={LuUtilityPole} />
        <Row title="Address" subtitle="Home Address" Icon={FaRegAddressBook} />
        <Row title="Profile Picture" subtitle="Passport photograph" Icon={FaRegAddressBook} />
        <Row title="Phone" subtitle="Verify phone number" Icon={IoCallOutline} />
        <Row title="Email" subtitle="Verify email address" Icon={HiOutlineMail} />
        <Row title="Date of Birth" subtitle="Enter your dob" Icon={LuUtilityPole} />
        <Row title="NIN" subtitle="National Identity Number" Icon={LuUtilityPole} />
        <Row title="BVN" subtitle="Verify BVN" Icon={IoCallOutline} />
      </div>
    </div>
  );
}
