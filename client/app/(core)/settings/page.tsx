'use client';

import React from 'react';
import { Navbar, Row, SimpleRow, Spinner, TextH } from '@/comps';
import { IoMoon, IoPersonOutline } from 'react-icons/io5';
import { AppStores, use3Wagmi, useAppRouter } from '@/lib';
import { BiLogOut, BiSun } from 'react-icons/bi';
import { useBalance } from 'wagmi';
import { SwitchChain } from './_comps';
import { useTheme } from 'next-themes';
import { AddressFn } from '@/lib';

export default function SettingsPage() {
  const store = AppStores.useChat();
  const router = useAppRouter();
  const { logout, address } = use3Wagmi(); // Just for initialization of values
  const { setTheme, theme } = useTheme();

  if (!address) return <Spinner />;

  return (
    <>
      <Navbar
        title={'Settings'}
        icon={theme === 'light' ? BiSun : IoMoon}
        onIconClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />

      <div className={'flex flex-col items-center px-4 py-4 mb-10'}>
        <div className="size-[120px]">
          <img src={store.userInfo?.profileImage!} className="size-full" />
        </div>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <SimpleRow left={'Name'} right={store.userInfo?.name!} />
          <SimpleRow left={'Email'} right={store.userInfo?.email!} />
          <Balance address={address} title={'celo'} />
          <Balance address={address} title={'cUSD'} tokenAddress="0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1" />
          <SimpleRow left={'Address'} right={AddressFn.shortenAddress(address)} isLast />
        </div>
        <TextH v="h5">More</TextH>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <SwitchChain />
          <Row
            title={'Verification'}
            subtitle={'KYC verification'}
            Icon={IoPersonOutline}
            onClick={() => router.push('/settings/kyc')}
          />
          <Row
            title={'Bank Accounts'}
            subtitle={'Manage all your bank accounts'}
            Icon={IoPersonOutline}
            onClick={() => router.push('/settings/bank')}
          />
          <Row
            title={'Logout'}
            subtitle={'Disconnect from Mobarter'}
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
  if (isLoading) return <SimpleRow left={props.title} right={'...'} />;
  if (error) return <SimpleRow left={props.title} right={'...x'} />;

  return <SimpleRow left={data?.symbol} right={AddressFn.shortValue(data.value!)} />;
}
