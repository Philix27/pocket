'use client';
import React from 'react';
import { ColorRing, ThreeDots } from 'react-loader-spinner';
import { Skeleton } from './Skeleton';

export function Spinner(props: { isBtn?: boolean; size?: number }) {
  // return <Skeleton className="h-4 w-full my-4" />;
  if (props.isBtn) {
    return (
      <div className="w-full flex items-center justify-center">
        <ColorRing
          visible={true}
          height={props.size || '80'}
          width={props.size || '80'}
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
        />
      </div>
    );
  }
  return (
    <div className="w-full flex items-center justify-center">
      <ThreeDots
        visible={true}
        height={props.size || '80'}
        width={props.size || '80'}
        color="#ff6719"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
