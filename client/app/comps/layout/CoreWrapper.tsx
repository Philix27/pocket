'use client';
import { BottomNav, Drawer } from '@/comps';
import { AppStores, useWeb3Modal } from '@/lib';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

export function CoreLayoutWrapper(props: { children: ReactNode }) {
  const router = useRouter();
  const { isLoggedIn } = useWeb3Modal();
  const store = AppStores.useSettingsStore();

  //   if (!isLoggedIn) {
  //     router.push('/');
  //   }

  return (
    <div
      className="h-screen overscroll-none bg-background overflow-y-auto"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div className="min-h-[calc(100vh-250px)] mt-[50px]">
        {props.children}
        <BottomNav />
        {store.drawerIsOpen && <Drawer />}
      </div>
    </div>
  );
}
