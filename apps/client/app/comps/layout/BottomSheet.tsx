'use client';
import { TextH } from '@/comps';
import React, { ReactNode } from 'react';
import { IoClose } from 'react-icons/io5';

export function BottomSheet(props: { children: ReactNode; onClose?: VoidFunction; title?: string }) {
  return (
    <div className="bg-card w-full fixed p-4 bottom-0 left-0 z-30 rounded-t-[20px] min-h-[calc(30vh)]">
      <div
        onClick={props.onClose}
        className={`
      w-full 
      rounded-md
      flex items-center justify-between
      px-2 pb-2`}
      >
        {props.title ? (
          <TextH className="" v="h5">
            {props.title}
          </TextH>
        ) : (
          <div />
        )}
        <div className="rounded-[10px] p-[4px] bg-background">
          <IoClose className="text-xl" />
        </div>
      </div>
      <hr />
      <div className="p-2">{props.children}</div>
    </div>
  );
}
