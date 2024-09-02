'use client';

import React from 'react';
import { formatBalance, Navbar, shortenAddress, Spinner, TextH, TextP } from '@/comps';
import { useBalance } from 'wagmi';
import { TokenAddress, useMinipay } from '@/contract';

export default function SettingsPage() {
  const { walletAddress } = useMinipay();
  const result = useBalance({
    address: walletAddress,
    token: TokenAddress.CUSD_TESTNET as `0x${string}`,
  });

  if (!walletAddress) {
    return <Spinner />;
  }
  if (result.isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar title={'Profile'} />
      <div className={'flex flex-col items-center px-4 py-4 mb-10'}>
        <TextH v="h5">Personal</TextH>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          {walletAddress && <RowItem left={'Wallet'} right={shortenAddress(walletAddress)} />}
          {result.data && (
            <RowItem
              left={'Balance'}
              right={`${result.data?.symbol}- ${formatBalance(result.data?.value!).slice(0, -15)}`}
            />
          )}

          <RowItem left={'Email'} right={'myemail@gmail.com'} />
          <RowItem left={'Phone'} right={'2348108850572'} />
        </div>
        <TextH v="h5">Beneficiary</TextH>
        <div className="w-full my-4 bg-secondary px-4 rounded-md">
          <RowItem left={'Phone'} right={'2348108850572'} />
        </div>
      </div>
    </>
  );
}

function RowItem(props: { left: string; right: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-accent">
      <TextP className={'text-card-foreground'}>{props.left} </TextP>
      <TextP>{props.right}</TextP>
    </div>
  );
}
