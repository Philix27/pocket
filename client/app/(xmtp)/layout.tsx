'use client';
import React, { ReactNode } from 'react';
import { CoreLayoutWrapper } from '@/comps';

export default function Layout(props: { children: ReactNode }) {
  return <CoreLayoutWrapper>{props.children}</CoreLayoutWrapper>;
}
