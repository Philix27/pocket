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
    return <Spinner />;
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
