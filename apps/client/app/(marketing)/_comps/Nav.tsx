'use client';

import Link from 'next/link';

import { Drawer, TextH } from '@/comps';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { AppStores, useWeb3Modal } from '@/lib';

export interface MainNavProps {
  title: string;
}

export function NavbarMarketing(props: MainNavProps) {
  const router = useRouter();
  const store = AppStores.useSettingsStore();
  const { isLoggedIn, login } = useWeb3Modal();
  return (
    <header className="bg-background sticky top-0 z-20 w-full border-b">
      <div className="container flex h-[50px] md:h-[60px] items-center justify-between">
        <div className="flex gap-6 md:gap-10 ">
          {/* <img src={'/logoBlue.png'} className="size-[35px] rounded-[17.5px]" /> */}
          <Link href="/" className="items-center space-x-2">
            <TextH v="h3" className={'text-primary font-extrabold tracking-wider'}>
              {props.title}
            </TextH>
          </Link>
        </div>

        <div className="flex items-center justify-center md:gap-x-3">
          <div className={''}>
            {store.drawerIsOpen && <Drawer />}

            {store.drawerIsOpen ? (
              <AiOutlineClose
                className="size-[20px] text-primary"
                onClick={() => {
                  store.update({ drawerIsOpen: false });
                }}
              />
            ) : (
              <AiOutlineMenu
                className="size-[20px] text-primary"
                onClick={() => {
                  store.update({ drawerIsOpen: true });
                }}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
