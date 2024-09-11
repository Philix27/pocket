'use client';
import { Spinner, Tabs, TextP } from '@/comps';
import React, { useState } from 'react';
import { cn, shortAddress } from '@/lib';
import { FHE } from '@/contract';
import { useAccount } from 'wagmi';

export default function OrdersComp() {
  const { address } = useAccount();
  const {
    data,
    result: { isLoading, error },
  } = FHE.useGetAllTransactionsForUser(address!);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p className="text-destructive">{error.message}</p>;
  }

  return (
    <div className="px-6 mb-[100px]">
      <div className="my-2">
        {data && data.map((ads, index) => (
          <div className="w-full bg-card mb-2 rounded-lg p-3 border-muted border-[0.1px]" key={index}>
            <Row title={'Amount'} subtitle={ads.amount.toString()} />
            <Row title={'Status'} subtitle={ads.isCompleted ? 'Completed' : 'Pending'} />
            <Row title={'Dispute'} subtitle={ads.isDisputed ? 'Yes' : 'None'} />
            <Row title={'Dispute'} subtitle={shortAddress(ads.seller)} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Row(props: { title: string; subtitle: string; isLast?: boolean }) {
  return (
    <>
      <div className={cn('w-full flex items-center justify-between p-2 ', props.isLast || 'border-b-[0.1px]')}>
        <TextP className="text-muted">{props.title}</TextP>
        <TextP className="font-bold">{props.subtitle}</TextP>
      </div>
    </>
  );
}
