'use client';
import { Navbar, Row } from '@/comps';
import React from 'react';
import { MdAddTask } from 'react-icons/md';

export default function BillsPage() {
  return (
    <div>
      <Navbar title="Pay bills" />
      <div className="px-5 py-4">
        <Row title={'PHCN'} subtitle={''} Icon={MdAddTask} />
        <Row title={'Light'} subtitle={''} Icon={MdAddTask} />
        <Row title={'School Fees'} subtitle={''} Icon={MdAddTask} />
      </div>
    </div>
  );
}
