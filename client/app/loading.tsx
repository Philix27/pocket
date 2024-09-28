'use client';

import React from 'react';
import { Skeleton, Spinner } from './comps';

export default function LoadingPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      {/* <Spinner /> */}
      <Skeleton className="h-4 w-[250px]" />
    </div>
  );
}
