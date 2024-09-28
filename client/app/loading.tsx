'use client';

import React from 'react';
import { Skeleton } from './comps';

export default function LoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <Skeleton />
    </div>
  );
}
