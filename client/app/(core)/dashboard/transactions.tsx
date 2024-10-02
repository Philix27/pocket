'use client';
import { Row, Spinner, TextH } from '@/comps';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '@/calls';
import { useAccount } from 'wagmi';
import { AddressFn } from '@/lib';
import { FaPoundSign } from 'react-icons/fa';
import { parseEther } from 'viem';
import { dateFromBigint } from '@/(others)/savings/_comps/withdraw/fn';

function generateArray(length: number) {
  return Array.from({ length }, (_, index) => index);
}

export default function TransactionHistory() {
  const { address } = useAccount();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['transactions'],
    queryFn: async () => {
      const res = await getTransactions({ address: address! });
      console.log('result45', res);
      return res;
    },
  });

  if (isLoading) {
    return (
      <div className="flex flex-col w-full space-y-1 mt-2">
        {generateArray(10).map((val, i) => (
          <div className="flex h-[50px] gap-x-2" key={i}>
            <Spinner skeleton skeletonStyle={'h-full w-full '} />
          </div>
        ))}
      </div>
    );
  }
  if (isError) {
    return <div> An error</div>;
  }
  dateFromBigint;
  return (
    <div className="mt-4">
      <TextH v="h5">Transactions</TextH>
      <div className="mt-3 rounded-md">
        {data.length > 0 &&
          data!.map((trans, index) => (
            <Row
              title={Number(parseEther(trans.value)).toString()}
              subtitle={`to: ${AddressFn.shortenAddress(trans.to)}`}
              Icon={FaPoundSign}
              key={index}
              hideArrow
            />
          ))}
      </div>
    </div>
  );
}
