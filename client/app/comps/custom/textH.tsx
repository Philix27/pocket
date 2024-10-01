'use client';

import React, { ReactNode } from 'react';
import { cn } from '@/lib';

type IVariants = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const cNames: Record<IVariants, string> = {
  h1: 'text-3xl font-extrabold',
  h2: 'text-2xl font-bold',
  h3: 'text-xl font-bold',
  h4: 'text-lg font-bold',
  h5: 'text-sm font-bold',
  h6: 'text-xs font-medium',
};

export function TextH(props: { children: ReactNode; v?: IVariants; className?: string }) {
  return <h1 className={cn(cNames[props.v || 'h4'], props.className)}>{props.children}</h1>;
}
