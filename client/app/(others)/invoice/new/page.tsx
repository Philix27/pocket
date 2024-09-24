'use client';
import React from 'react';
import NewInvoiceClient from './client';
import { Navbar } from '@/comps';

export default function Page() {
  return (
    <>
      <Navbar title="New invoice" isBack />
      <NewInvoiceClient />
    </>
  );
}
