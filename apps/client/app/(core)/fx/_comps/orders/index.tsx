'use client';
import { AppButton, Spinner, TextP } from '@/comps';
import React, { memo, useState } from 'react';
import { cn, shortAddress } from '@/lib';
import { FHE } from '@/contract';
import { useAccount } from 'wagmi';
import { parseEther } from 'viem';
import { toast } from 'sonner';

export const OrdersComp = memo(() => {
  const [fundsProcessing, setFundsProcessing] = useState<number>();
  const { address } = useAccount();
  const {
    data,
    result: { isLoading, error },
  } = FHE.useGetAllTransactionsForUser(address!);

  const { releaseFunds, result: releaseFundsResult } = FHE.useReleaseFunds();

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <p className="text-destructive">{error.message}</p>;
  }

  return (
    <div className="px-6 mb-[100px]">
      <div className="my-2">
        {data &&
          data.map((ads, index) => {
            if (fundsProcessing === ads.id && releaseFundsResult.isLoading) {
              return <Spinner />;
            }
            // if (releaseFundsResult.error) {
            //   return <p>{releaseFundsResult.error.message}</p>;
            // }
            return (
              <div className="w-full bg-card mb-2 rounded-lg p-3 border-muted border-[0.1px]" key={index}>
                <Row title={'Id'} subtitle={ads.id.toString()} />
                <Row title={'Amount'} subtitle={Number(parseEther(ads.amount.toString())).toString()} />
                <Row title={'Status'} subtitle={ads.isCompleted ? 'Completed' : 'Pending'} />
                <Row title={'Dispute'} subtitle={ads.isDisputed ? 'Yes' : 'None'} />
                <Row title={'Dispute'} subtitle={shortAddress(ads.seller)} />
                <AppButton
                  onClick={() => {
                    setFundsProcessing(ads.id);
                    releaseFunds(ads.id);
                    setTimeout(() => {
                      toast.success('Funds released to seller');
                    }, 5000);
                  }}
                >
                  Release Funds
                </AppButton>
              </div>
            );
          })}
      </div>
    </div>
  );
});

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
