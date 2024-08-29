'use client';
import { useWeb3Modal } from '@/auth/_hook';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

export default function CoreLayout(props: { children: ReactNode }) {
  const { loggedIn } = useWeb3Modal();
  const router = useRouter();

  if (loggedIn) {
    router.push('/');
  }
  return (
    <div className="h-screen ">
      <div className="min-h-[calc(100vh-250px)]">{props.children}</div>
    </div>
  );
}
