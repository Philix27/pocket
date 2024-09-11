'use client';
import React, { ReactNode } from 'react';
import { NavbarMarketing } from './_comps/Nav';

export default function MarketingLayout(props: { children: ReactNode }) {
  return (
    <div
      className="h-screen overscroll-none bg-background"
      style={{ overscrollBehavior: 'none', WebkitOverflowScrolling: 'touch', height: '100vh' }}
    >
      <NavbarMarketing title={'PR'} />
      <div className="min-h-[calc(100vh-250px)]">{props.children}</div>
    </div>
  );
}
