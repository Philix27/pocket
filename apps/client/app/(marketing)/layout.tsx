'use client';
<<<<<<< HEAD:apps/client/app/(marketing)/layout.tsx
import React, { ReactNode } from 'react';
import { NavbarMarketing } from './_comps/Nav';
=======
import React, { ReactNode, useEffect } from 'react';
import { NavbarMarketing } from './_comps/Nav';
import { DisableZoom } from '@/comps';

export default function Layout(props: { children: ReactNode }) {
  useEffect(() => {
    document.addEventListener('gesturestart', function (e) {
      e.preventDefault();
      // special hack to prevent zoom-to-tabs gesture in safari
      document.body.style.zoom = '0.99';
    });

    document.addEventListener('gesturechange', function (e) {
      e.preventDefault();
      // special hack to prevent zoom-to-tabs gesture in safari
      document.body.style.zoom = '0.99';
    });

    document.addEventListener('gestureend', function (e) {
      e.preventDefault();
      // special hack to prevent zoom-to-tabs gesture in safari
      document.body.style.zoom = '0.99';
    });

    return () => {};
  }, []);
>>>>>>> main:client/app/(marketing)/layout.tsx

  return (
    <div
      className="h-screen overscroll-none bg-background"
      style={{ overscrollBehavior: 'none', WebkitOverflowScrolling: 'touch', height: '100vh' }}
    >
      <NavbarMarketing title={'PR'} />
<<<<<<< HEAD:apps/client/app/(marketing)/layout.tsx
=======
      <DisableZoom />
>>>>>>> main:client/app/(marketing)/layout.tsx
      <div className="min-h-[calc(100vh-250px)]">{props.children}</div>
    </div>
  );
}
