'use client';
import { ReactNode } from 'react';
import { AdminSidebar } from './_comps';

export default function AdminLayout(props: { children: ReactNode }) {
  // return <CoreLayoutWrapper hideBottomNav={true}>{props.children}</CoreLayoutWrapper>;
  return (
    <div className="flex w-full">
      <AdminSidebar />
      <div className='w-full'>{props.children}</div>
    </div>
  );
}
