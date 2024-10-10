'use client';

import React from 'react';
import { TextP } from '@/comps';
import { cn, useAppRouter } from '@/lib';
import { BsSearch } from 'react-icons/bs';
import Link from 'next/link';

export function HomeSection() {
  const router = useAppRouter();

  return (
    <div className={'flex flex-col items-center justify-center w-full h-full'} style={{ overscrollBehavior: 'none' }}>
      <div className="w-[60%] h-full flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center border-2 rounded-full 300 px-1">
          <input
            type="text"
            className={`
          bg-transparent w-full  px-2 py-4
          outline-none border-none rounded-full
        `}
            placeholder="Search"
          />
          <Link href={'/search/'}>
            <div className="bg-card rounded-full w-fit">
              <BsSearch size={20} className="m-2" />
            </div>
          </Link>
        </div>
        <div className="flex mt-4 cursor-pointer flex-wrap justify-center">
          {tags.map((val, i) => (
            <div key={i} className={cn('text-white rounded-full py-1 px-4 mx-2 my-2', val.bg)}>
              <TextP className="text-xs">{val.title}</TextP>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const tags: {
  title: string;
  bg: string;
}[] = [
  {
    title: 'Blockchains',
    bg: 'bg-orange-500',
  },
  {
    title: 'Subsystems',
    bg: 'bg-purple-500',
  },
  {
    title: 'RPC Providers',
    bg: 'bg-blue-500',
  },
  {
    title: 'Auth Providers',
    bg: 'bg-blue-500',
  },
  {
    title: 'Toolings',
    bg: 'bg-blue-500',
  },
];
