'use client';
import { Navbar, TextP } from '@/comps';
import React from 'react';
import { useWithdraw } from './useWithraw';
import { CoinList } from './List';
import { ConfirmTransaction } from './2.Confirm';
import { BankAccountAmount } from './1.Account';
import { TokenSelector } from '../_comps';

//redirect to fast withdraw page
//Enter account number/ select account to send funds to
// move funds from wallet to pocket ramp wallet
export default function SendMoneyPage() {
  const store = useWithdraw();
  return (
    <div>
      <Navbar title="Withdraw" isBack />
      <div className="px-5 w-full">
        <div className="py-4 px-2 space-y-4 flex flex-col w-full items-center">
          <div className="flex items-center justify-between w-full">
            <TokenSelector
              onClick={() => {
                store.update({ showCurrencies: true });
              }}
              token={store.selectedToken}
            />
            <div>
              <TextP>Bal...</TextP>
            </div>
          </div>

          <BankAccountAmount />
          <ConfirmTransaction />
        </div>
      </div>
      <CoinList />
    </div>
  );
}
