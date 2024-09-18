'use client';
import { Row, Spinner, TextH, TextP } from '@/comps';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getTransactions } from '@/calls';
import { useAccount } from 'wagmi';
import { shortAddress } from '@/lib';
import { FaPoundSign } from 'react-icons/fa';
import { parseEther } from 'viem';
import { dateFromBigint } from '@/(messaging)/savings/_comps/withdraw/fn';

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
              subtitle={`to: ${shortAddress(trans.to)}`}
              Icon={FaPoundSign}
              key={index}
              hideArrow
            />
          ))}
      </div>
    </div>
  );
}

//  <Row
//    title={Number(parseEther(trans.value)).toString()}
//    subtitle={`to: ${shortAddress(trans.to)}`}
//    Icon={FaPoundSign}
//    key={index}
//    hideArrow
//  />;

// <div key={index} className="w-full bg-card mb-1 p-2">

//   <div className="flex w-full items-center justify-between mb-2">
//     <TextH v="h5">cELO: {Number(parseEther(trans.value)).toString()}</TextH>
//     <TextP>gas: {trans.gasUsed}</TextP>
//   </div>

//   <div className="flex justify-between">
//     <TextH v="h5">{dateFromBigint(trans.timeStamp as unknown as BigInt)}</TextH>
//     <TextP>{shortAddress(trans.to)}</TextP>
//   </div>
// </div>
