'use client';
import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Skeleton } from './Skeleton';

export function Spinner() {
  return <Skeleton className="h-4 w-full my-4" />;
  return (
    <div className="w-full flex items-center justify-center">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#ff6719"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
