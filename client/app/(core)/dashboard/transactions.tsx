'use client'
import { TextH, TextP } from '@/comps';
import React from 'react';
import { transData } from './transData';

export default function TransactionHistory() {
  return (
    <div>
      <TextH>Transactions</TextH>
      <div className="mt-3">
        {transData.map((transaction, index) => (
          <div key={index} className="w-full bg-card mb-1 p-2">
            <div className="flex w-full items-center justify-between">
              <TextH v="h5">{transaction.purpose}</TextH>
              <TextP>{transaction.balance}</TextP>
            </div>
            <div className="flex justify-between">
              <TextH v="h5">{transaction.amount}</TextH>
              <TextP>{transaction.balance}</TextP>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
