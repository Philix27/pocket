'use client';
import { TextH } from '@/comps';
import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';
import { IoClose } from 'react-icons/io5';

export function BottomSheet(props: { children: ReactNode; onClose?: VoidFunction; title?: string; show: boolean }) {
  if(!props.show) return <></>
  return (
    <div className="fixed top-0 left-0 bg-black/30  w-full bottom-0 z-30 h-screen flex flex-col justify-between">
      <div className="bg-teal-600" onClick={props.onClose} />

      <motion.div
        initial={{ y: 2000 }}
        animate={{ y: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.4 }}
        className="bg-background w-full p-4 rounded-t-[20px] min-h-[calc(30vh)] border-t"
      >
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
          <div className="rounded-[10px] p-[4px] bg-card">
            <IoClose className="text-[15px]" />
          </div>
        </div>
        <hr className="" />
        <div className="px-2 py-5">{props.children}</div>
      </motion.div>
    </div>
  );
}
