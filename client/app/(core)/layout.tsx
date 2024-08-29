'use client';
import { useWeb3Modal } from '@/lib';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

export default function CoreLayout(props: { children: ReactNode }) {
  const { isLoggedIn } = useWeb3Modal();
  const router = useRouter();

  // if (!isLoggedIn) {
  //   router.push('/');
  // }
  return (
    <div className="h-screen ">
      <div className="min-h-[calc(100vh-250px)]">{props.children}</div>
    </div>
  );
}
