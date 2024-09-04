'use client';
import React, { ReactNode } from 'react';
import AppProvider from './provider';
import { CoreLayoutWrapper } from '@/comps';

export default function Layout(props: { children: ReactNode }) {
  return (
    <AppProvider>
      <CoreLayoutWrapper>{props.children}</CoreLayoutWrapper>
    </AppProvider>
  );
}
