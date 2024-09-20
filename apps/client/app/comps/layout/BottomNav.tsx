'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';
import { cn, useAppRouter } from '@/lib';
import { IoSwapHorizontal, IoHomeOutline } from 'react-icons/io5';
import { MdOutlineSettings, MdOutlineSavings } from 'react-icons/md';
import { FaAppStoreIos } from 'react-icons/fa';

type INavItem = { title: string; Icon: IconType | IconType; link: string; onClick: VoidFunction };

export function BottomNav() {
  const router = useAppRouter();
  const path = usePathname();

  const navItems: INavItem[] = [
    {
      title: 'home',
      link: '/dashboard',
      Icon: IoHomeOutline,
      onClick: () => router.go('/dashboard'),
    },
    {
      title: 'Swap',
      link: '/fx',
      Icon: IoSwapHorizontal,
      onClick: () => router.go('/fx'),
    },
    {
      title: 'Settings',
      link: '/settings',
      Icon: MdOutlineSettings,
      onClick: () => router.go('/settings'),
    },
  ];

  function isActive(link: string): boolean {
    if (link === path) {
      return true;
    }
    return false;
  }

  return (
    <div // border-t-[0.5px]
      className={`
        fixed bottom-0 h-[60px]
      bg-background
        w-full flex items-center justify-center
        pb-[10px] 
      `}
    >
      <div
        className={`
      flex justify-evenly items-center
      py-2 w-full 
      `}
      >
        {navItems.map(({ Icon, title, link, onClick }, i) => {
          return (
            <div
              onClick={onClick}
              key={i}
              className={cn(
                `size-[40px] 
              flex flex-col items-center justify-center
              rounded-[10px]`,
                isActive(link) ? 'bg-card' : 'bg-card'
                // isActive(link) && 'border-primary border-solid border-[1px]'
              )}
            >
              <Icon
                className={cn('text-primary-foreground', isActive(link) ? 'text-primary' : 'text-muted')}
                size={18}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
