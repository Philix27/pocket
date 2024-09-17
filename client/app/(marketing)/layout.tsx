'use client';
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

  return (
    <div
      className="h-screen overscroll-none bg-background"
      style={{ overscrollBehavior: 'none', WebkitOverflowScrolling: 'touch', height: '100vh' }}
    >
      <NavbarMarketing title={'PR'} />
      <DisableZoom />
      <div className="min-h-[calc(100vh-250px)]">{props.children}</div>
    </div>
  );
}
