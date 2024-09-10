'use client';

import { Suspense } from 'react';
import { Spinner } from '@/comps';
import { AppStores } from '@/lib';
import SavingsCards from './Savings';

// https://github.com/Philix27/Pocket
export default function WithdrawalSection() {
  const userAddress = AppStores.useChat().web3Wallet;

  if (!userAddress) {
    return (
      <div className="mt-[70px]">
        <Spinner />
      </div>
    );
  }

  return (
    <div className={`px-6 md:max-w-[60%]`}>
      <div className={`mt-2`}>
        <div className={`flex items-start justify-between`}>
          <p>Wallet Address:</p>
          {userAddress && (
            <p>
              {userAddress!
                .substring(0, 3)
                .concat('***')
                .concat(userAddress!.substring(userAddress!.length - 3, userAddress!.length))}
            </p>
          )}
        </div>
        <div className={`mt-2 flex items-start justify-between`}>
          <p>Total Savings:</p>
          <p>$100</p>
        </div>

        {userAddress && (
          <Suspense fallback={<Spinner />}>
            <SavingsCards address={userAddress as `0x${string}`} />
          </Suspense>
        )}
      </div>
    </div>
  );
}
