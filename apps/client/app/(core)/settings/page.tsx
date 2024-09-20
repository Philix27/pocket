'use client';

import React from 'react';
import { Navbar, Row, shortenAddress, SimpleRow, Spinner, TextH } from '@/comps';
import { IoPersonOutline } from 'react-icons/io5';
import { AppStores, use3Wagmi, useAppRouter } from '@/lib';
import { MdSupportAgent } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import { useBalance } from 'wagmi';
import { SwitchChain } from './_comps';
import { parseEther } from 'viem';

export default function SettingsPage() {
  const store = AppStores.useChat();
  const router = useAppRouter();
  const { logout, address } = use3Wagmi(); // Just for initialization of values

  if (!address) return <Spinner />;

  return (
    <>
      <Navbar title={'Settings'} isBack />
      <div className={'flex flex-col items-center px-4 py-4 mb-10'}>
        <div className="size-[120px]">
          <img src={store.userInfo?.profileImage!} className="size-full" />
        </div>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <SimpleRow left={'Name'} right={store.userInfo?.name!} />
          <SimpleRow left={'Email'} right={store.userInfo?.email!} />
          <Balance address={address} title={'celo'} />
          <Balance address={address} title={'cUSD'} tokenAddress="0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1" />
          <SimpleRow left={'Address'} right={shortenAddress(address)} isLast />
        </div>
        <TextH v="h5">More</TextH>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <SwitchChain />
          <Row
            title={'Verification'}
            subtitle={'KYC verification'}
            Icon={IoPersonOutline}
            onClick={() => router.push('/kyc')}
          />
          <Row
            title={'Bank Accounts'}
            subtitle={'Manage all your bank accounts'}
            Icon={IoPersonOutline}
            onClick={() => router.push('/bank')}
          />
          <Row
            title={'Support'}
            subtitle={'Contact Agents'}
            Icon={MdSupportAgent}
            onClick={() => router.push('/support')}
          />
          <Row
            title={'Logout'}
            subtitle={'Disconnect from Pocket Ramp'}
            Icon={BiLogOut}
            onClick={logout}
            isLast
            hideArrow
          />
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
  if (isLoading) return <SimpleRow left={'Balance' + props.title} right={'...'} />;
  if (error) return <SimpleRow left={'Balance ' + props.title} right={'...x'} />;

  return (
    <SimpleRow left={'Balance ' + props.title} right={Number(parseEther(Number(data?.value).toString())).toString()} />
  );
}
