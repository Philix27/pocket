'use client';
import React, { ReactNode } from 'react';
import XAppProvider from './provider';
import { CoreLayoutWrapper } from '@/comps';

export default function Layout(props: { children: ReactNode }) {
  return (
    <XAppProvider>
      <CoreLayoutWrapper>{props.children}</CoreLayoutWrapper>
    </XAppProvider>
  );
}
