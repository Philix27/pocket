'use client';
import { Navbar, Row } from '@/comps';
import { useRouter } from 'next/navigation';
import React from 'react';
import { MdAddTask } from 'react-icons/md';

export default function InvoicePage() {
  const router = useRouter();
  return (
    <div>
      <Navbar title="Invoice" isBack />
      <div className="px-5 py-4">
        <Row
          title={'Create new invoice'}
          subtitle={''}
          Icon={MdAddTask}
          onClick={() => {
            router.push('/invoice/new');
          }}
        />
        <Row
          title={'All Invoices'}
          subtitle={''}
          Icon={MdAddTask}
          onClick={() => {
            router.push('/invoice/all');
          }}
        />
        <Row title={'Invoices Templates'} subtitle={''} Icon={MdAddTask} onClick={() => {}} />
      </div>
    </div>
  );
}
