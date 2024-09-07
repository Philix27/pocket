'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { IconType } from 'react-icons';
import { cn, useAppRouter } from '@/lib';
import { IoSwapHorizontal, IoHomeOutline } from 'react-icons/io5';
import { MdOutlineSettings, MdOutlineSavings } from 'react-icons/md';

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
      title: 'Savings',
      link: '/savings',
      Icon: MdOutlineSavings,
      onClick: () => router.go('/savings'),
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
    <div
      className={`
        fixed bottom-0 h-[70px]
        border-t-[0.5px] bg-secondary
        w-full flex items-center justify-center 
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
                isActive(link) ? 'bg-background' : 'bg-primary',
                isActive(link) && 'border-primary border-solid border-[1px]'
              )}
            >
              <Icon
                className={cn('text-primary-foreground', isActive(link) ? 'text-primary' : 'text-primary-foreground')}
                size={18}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
