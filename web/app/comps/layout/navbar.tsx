'use client';
import { TextP } from '@/comps';
import React from 'react';
import { IconType } from 'react-icons';
import { IoArrowBack, IoMenu } from 'react-icons/io5';
import { AppStores } from '@/lib';
import { useRouter } from 'next/navigation';
import { LuChevronLeft } from 'react-icons/lu';

export function Navbar(props: { title: string; icon?: IconType; isBack?: boolean; onIconClick?: VoidFunction }) {
  const Icon = props.icon!;
  const store = AppStores.useSettings();
  const router = useRouter();
  return (
    <div
      className={`
        h-[50px]  px-5 flex items-center 
        justify-between 
        fixed top-0 w-full 
        z-10 bg-background
      `}
    >
      <div className="flex items-center gap-x-2">
        {props.isBack ? (
          <LuChevronLeft
            size={22}
            onClick={() => {
              router.back();
            }}
          />
        ) : (
          <IoMenu
            size={23}
            onClick={() => {
              store.update({ drawerIsOpen: true });
            }}
          />
        )}
      </div>
      <TextP v="p4" className="text-card-foreground my-0 font-extrabold tracking-wide font-sans">
        {props.title}
      </TextP>
      <div className="flex items-center gap-x-3">
        {props.icon ? <Icon onClick={props.onIconClick} size={22} /> : <div />}
      </div>
    </div>
  );
}
