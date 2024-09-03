'use client';

import React from 'react';
import { Navbar, shortenAddress, TextH, TextP } from '@/comps';
import { IconType } from 'react-icons';
import { IoPersonOutline } from 'react-icons/io5';
import { AppStores, cn, useAppRouter, useWeb3Modal } from '@/lib';
import { MdEmail, MdSecurity, MdSupportAgent } from 'react-icons/md';
import { LuChevronRight } from 'react-icons/lu';
import { BiLogOut } from 'react-icons/bi';
import Image from 'next/image';

export default function SettingsPage() {
  const { logout } = useWeb3Modal();
  const store = AppStores.useChat();
  const router = useAppRouter();
  return (
    <>
      <Navbar title={'Profile'} />
      <div className={'flex flex-col items-center px-4 py-4 mb-10'}>
        <div className="size-[120px]">
          <img src={store.userInfo?.profileImage!} className="size-full" />
        </div>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <InfoRowItem left={'Name'} right={store.userInfo?.name!} Icon={IoPersonOutline} />
          <InfoRowItem left={'Email'} right={store.userInfo?.email!} Icon={MdEmail} />
          <InfoRowItem left={'MFA'} right={store.userInfo?.isMfaEnabled ? 'Enabled' : 'Disabled'} Icon={MdSecurity} />
          <InfoRowItem left={'Balance'} right={store.balance!} Icon={IoPersonOutline} />
          <InfoRowItem left={'Address'} right={shortenAddress(store.web3Wallet)} Icon={IoPersonOutline} />
        </div>
        <TextH v="h5">More</TextH>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <RowItem title={'Verification'} subtitle={'KYC verification'} Icon={IoPersonOutline} />
          <RowItem
            title={'Support'}
            subtitle={'Contact Agents'}
            Icon={MdSupportAgent}
            onClick={() => router.go('/support')}
          />
          <RowItem
            title={'Logout'}
            subtitle={'Disconnect from Pocket Ramp'}
            Icon={BiLogOut}
            onClick={() => {
              logout();
            }}
          />
        </div>
      </div>
    </>
  );
}

function InfoRowItem(props: { left: string; right: string; Icon: IconType; color?: string }) {
  const { Icon } = props;
  return (
    <div className="flex justify-between items-center py-2 border-b border-accent">
      <TextP className={'text-muted'}>{props.left} </TextP>
      <TextP className="font-semibold">{props.right}</TextP>
    </div>
  );
}

function RowItem(props: { title: string; subtitle: string; Icon: IconType; color?: string; onClick?: VoidFunction }) {
  const { Icon } = props;
  return (
    <div className="flex justify-between items-center py-2 border-b border-accent" onClick={() => props.onClick}>
      <div className="flex items-center justify-center">
        <Icon size={20} className={cn('text-primary mr-3')} />
        <div>
          <TextH v="h5" className={'text-card-foreground tracking-wide mb-1'}>
            {props.title}
          </TextH>
          <TextP className="text-muted">{props.subtitle}</TextP>
        </div>
      </div>
      <LuChevronRight size={20} onClick={props.onClick} />
    </div>
  );
}
