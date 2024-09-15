'use client';
import { AppStores } from '@/lib';
import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import { useTheme } from 'next-themes';
import { HomeDrawer } from './HomeDrawer';
import { InAppDrawer } from './InApp';
import { InfoContent } from './InfoContent';

export function Drawer() {
  const store = AppStores.useSettingsStore();
  const router = useRouter();
  const { setTheme, theme } = useTheme();
  const path = usePathname();

  return (
    <div className="w-full h-screen flex  fixed top-0 left-0 bg-black/30 ">
      <motion.div
        initial={{ x: 0, opacity: 0.5, translateX: -20 }}
        animate={{ x: 0, opacity: 1, translateX: 0 }}
        transition={{ ease: 'easeInOut', duration: 0.3 }}
        className={'w-[60%] max-w-[300px] bg-secondary rounded-r-2xl'}
      >
        <div className="px-4 mt-[50px] mb-[100px] flex flex-col justify-between h-[80%]">
          {homePaths.includes(path) ? <HomeDrawer router={router} /> : <InAppDrawer router={router} />}
          <InfoContent router={router} />
        </div>
      </motion.div>
      <div
        className={'w-[40%]'}
        onClick={() => {
          store.update({ drawerIsOpen: false });
        }}
      />
    </div>
  );
}

const homePaths = ['/', '/about-us', '/contact-us', '/faq', '/privacy', '/terms-condition'];
