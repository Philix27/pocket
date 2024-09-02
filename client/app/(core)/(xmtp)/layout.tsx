'use client';
import React, { ReactNode } from 'react';
import XAppProvider from './provider';

export default function Layout(props: { children: ReactNode }) {
  return <XAppProvider>{props.children}</XAppProvider>;
}
