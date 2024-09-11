'use client';

import React from 'react';
import { Navbar, shortenAddress, Spinner, TextH, TextP } from '@/comps';
import { IconType } from 'react-icons';
import { IoPersonOutline } from 'react-icons/io5';
import { AppStores, cn, use3Wagmi, useAppRouter, useWeb3Modal } from '@/lib';
import { MdEmail, MdSecurity, MdSupportAgent } from 'react-icons/md';
import { LuChevronRight } from 'react-icons/lu';
import { BiLogOut } from 'react-icons/bi';
import Image from 'next/image';
import { useBalance } from 'wagmi';
import { InfoRowItem, RowItem } from './_comps/Row';

export default function SettingsPage() {
  const store = AppStores.useChat();
  const router = useAppRouter();
  const { logout, address } = use3Wagmi(); // Just for initialization of values

  if (!address) return <Spinner />;

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
          <Balance address={address} title={'celo'} />
          <Balance address={address} title={'cUSD'} tokenAddress="0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1" />
          <InfoRowItem left={'Address'} right={shortenAddress(address)} Icon={IoPersonOutline} />
        </div>
        <TextH v="h5">More</TextH>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <RowItem title={'Verification'} subtitle={'KYC verification'} Icon={IoPersonOutline} />
          <RowItem
            title={'Support'}
            subtitle={'Contact Agents'}
            Icon={MdSupportAgent}
            onClick={() => router.push('/support')}
          />
          <RowItem title={'Logout'} subtitle={'Disconnect from Pocket Ramp'} Icon={BiLogOut} onClick={logout} />
        </div>
      </div>
    </>
  );
}

function Balance(props: { address: string; title: string; tokenAddress?: `0x${string}` }) {
  const { isLoading, error, data } = useBalance({
    address: props.address as `0x${string}`,
    token: props.tokenAddress,
  });
  if (isLoading) return <InfoRowItem left={'Balance' + props.title} right={'...'} Icon={IoPersonOutline} />;
  if (error) return <InfoRowItem left={'Balance ' + props.title} right={'...x'} Icon={IoPersonOutline} />;
  console.log('Balances ' + props.title, data);
  return <InfoRowItem left={'Balance ' + props.title} right={Number(data?.value).toString()} Icon={IoPersonOutline} />;
}
