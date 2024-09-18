'use client'
import { Navbar, Row } from '@/comps';
import React from 'react';
import { MdAddTask } from 'react-icons/md';

export default function InvoicePage() {
  return (
    <div>
      <Navbar title="Invoice" />
      <div className="px-5 py-4">
        <Row title={'Create new invoice'} subtitle={''} Icon={MdAddTask} />
        <Row title={'All Invoices'} subtitle={''} Icon={MdAddTask} />
        <Row title={'Invoices Templates'} subtitle={''} Icon={MdAddTask} />
      </div>
    </div>
  );
}
