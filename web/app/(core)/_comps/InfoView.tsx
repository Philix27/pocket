'use client';
import { AppStores } from '@/lib';
import { motion } from 'framer-motion';
import React from 'react';
import { TextH, TextP } from '@/comps';

export function InfoView() {
  const store = AppStores.useSettings();

  return (
    <div className="w-full h-screen flex  fixed top-0 right-0 bg-black/30 ">
      <div
        className={'w-full '}
        // className={'w-[40%]'}
        onClick={() => {
          store.update({ infoTabOpen: false });
        }}
      />
      <motion.div
        initial={{ x: 0, opacity: 0.5, translateX: -20 }}
        animate={{ x: 0, opacity: 1, translateX: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
        className={'w-[100%] max-w-[50%] bg-background rounded-r-2xl'}
      >
        <div className="mt-[50px] mb-[100px] flex flex-col">
          <TextH>Heading...</TextH>
          <TextP>Paragraph...</TextP>
          <TextP>Paragraph...</TextP>
          <TextP>Paragraph...</TextP>
        </div>
      </motion.div>
    </div>
  );
}
