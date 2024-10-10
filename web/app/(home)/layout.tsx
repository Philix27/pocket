'use client';
import React, { ReactNode, useEffect } from 'react';
import { NavbarMarketing } from './_comps/Nav';
import { DisableZoom } from '@/comps';

export default function Layout(props: { children: ReactNode }) {
  return (
    <div className="h-screen overflow-y-scroll">
      <NavbarMarketing title={'Mobarter'} />

      <div className="min-h-[calc(100vh-80px)] flex flex-col h-full">{props.children}</div>
    </div>
  );
}
