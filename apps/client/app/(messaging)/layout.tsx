'use client';
import { CoreLayoutWrapper } from '@/comps';
import { ReactNode } from 'react';

export default function CoreLayout(props: { children: ReactNode }) {
  return <CoreLayoutWrapper hideBottomNav={true}>{props.children}</CoreLayoutWrapper>;
}
