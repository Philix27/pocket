'use client';
import { BottomNav, Drawer } from '@/comps';
import { AppStores, use3Wagmi } from '@/lib';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react';
<<<<<<< HEAD:apps/client/app/comps/layout/CoreWrapper.tsx
=======
import { DisableZoom } from './DissableZoom';
>>>>>>> main:client/app/comps/layout/CoreWrapper.tsx

export function CoreLayoutWrapper(props: { children: ReactNode; hideBottomNav?: boolean }) {
  const router = useRouter();
  const { isConnected } = use3Wagmi();
  const store = AppStores.useSettingsStore();

  if (!isConnected) {
    router.push('/');
  }

  useEffect(() => {
    document.addEventListener('gesturestart', function (e) {
      e.preventDefault();
      // special hack to prevent zoom-to-tabs gesture in safari
<<<<<<< HEAD:apps/client/app/comps/layout/CoreWrapper.tsx
      document.body.style.zoom = 0.99;
=======
      document.body.style.zoom = '0.99';
>>>>>>> main:client/app/comps/layout/CoreWrapper.tsx
    });

    document.addEventListener('gesturechange', function (e) {
      e.preventDefault();
      // special hack to prevent zoom-to-tabs gesture in safari
<<<<<<< HEAD:apps/client/app/comps/layout/CoreWrapper.tsx
      document.body.style.zoom = 0.99;
=======
      document.body.style.zoom = '0.99';
>>>>>>> main:client/app/comps/layout/CoreWrapper.tsx
    });

    document.addEventListener('gestureend', function (e) {
      e.preventDefault();
      // special hack to prevent zoom-to-tabs gesture in safari
<<<<<<< HEAD:apps/client/app/comps/layout/CoreWrapper.tsx
      document.body.style.zoom = 0.99;
=======
      document.body.style.zoom = '0.99';
>>>>>>> main:client/app/comps/layout/CoreWrapper.tsx
    });

    return () => {};
  }, []);

  return (
    <div
      className="h-screen overscroll-none bg-background overflow-y-auto"
      style={{ WebkitOverflowScrolling: 'touch' }}
    >
      <div className="min-h-[calc(100vh-250px)] mt-[50px]">
        <DisableZoom />
        {props.children}
        {props.hideBottomNav || <BottomNav />}
        {store.drawerIsOpen && <Drawer />}
      </div>
    </div>
  );
}
