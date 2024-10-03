'use client';
import { Navbar, Tabs, TextP } from '@/comps';
import React from 'react';
import { useWithdraw } from './useWithraw';
import { CoinList } from './List';
import { ConfirmTransaction } from './2.Confirm';
import { BankAccountAmount } from './1.Account';
import { TokenIcon } from '@/public/tokens/TokenIcon';
import { BiChevronDown } from 'react-icons/bi';

//redirect to fast withdraw page
//Enter account number/ select account to send funds to
// move funds from wallet to pocket ramp wallet
export default function SendMoneyPage() {
  const store = useWithdraw();
  return (
    <div>
      <Navbar title="Withdraw" isBack />
      <Tabs
        data={[
          {
            title: 'Step 1',
            isActive: store.currentStep === '2ACCOUNT',
          },
          {
            title: 'Step 2',
            isActive: store.currentStep === '3CONFIRM',
          },
        ]}
      />
      <div className="px-5 w-full">
        <div className="py-4 px-2 space-y-4 flex flex-col w-full items-center">
          <div className='flex items-center justify-between'>
            <div
              className="bg-background border px-3 py-[0px] flex rounded-full items-center justify-center"
              onClick={() => {
                store.update({ showCurrencies: true });
              }}
            >
              <TokenIcon token={store.selectedToken} size="s" className="mr-3" />
              <BiChevronDown size={45} className="m-0" />
            </div>
            <div>
              <TextP>Bal...</TextP>
            </div>
          </div>
          {store.currentStep === '2ACCOUNT' && <BankAccountAmount />}
          {store.currentStep === '3CONFIRM' && <ConfirmTransaction />}
        </div>
      </div>
      <CoinList />
    </div>
  );
}
// Comp icon to copy wallet address
// Share Icon to share generate image
