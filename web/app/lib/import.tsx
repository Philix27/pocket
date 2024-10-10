import React from 'react';
import dynamic from 'next/dynamic';

export default function Import(props: { path: string }) {
  const ClientComponent = dynamic(() => import(props.path));
  return ClientComponent;
}
