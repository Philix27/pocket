'use client';
import React, { ReactNode } from 'react';
import { MarketingNavItems, NavbarMarketing } from './_comps/navbar';

export default function MarketingLayout(props: { children: ReactNode }) {
  return (
    <div className="h-screen overscroll-none bg-background" style={{ overscrollBehavior: 'none' }}>
      <NavbarMarketing title={'PR'} items={MarketingNavItems} />
      <div className="min-h-[calc(100vh-250px)]">{props.children}</div>
      <div className="hidden md:block"></div>
    </div>
  );
}
