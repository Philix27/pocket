'use client';
import { CoreLayoutWrapper } from '@/comps';
import { ReactNode } from 'react';

export default function CoreLayout(props: { children: ReactNode }) {
  // return <CoreLayoutWrapper>{props.children}</CoreLayoutWrapper>;
  return <>{props.children}</>;
}
