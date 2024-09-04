'use client';
import { Navbar, TextP } from '@/comps';
import React from 'react';
import { App } from './comps';

export default function SupportPage() {
  return (
    <>
      <Navbar title="Support" isBack />
      <App />
    </>
  );
}
