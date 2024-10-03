'use client';
import { AppButton, BottomSheet, Navbar } from '@/comps';
import { TokenList, Tokens } from '@/lib';
import React from 'react';
import { IoReload, IoSettings, IoSwapVertical } from 'react-icons/io5';
import { ChangeSection } from './ValueSection';
import { useAccount } from 'wagmi';
import { useSwap } from './useAcctBalance';
import { CurrencyRow } from './CurrencyRow';

export default function SwapPage() {
  const { selectedToken, update, exchangeValue, ...store } = useSwap();
  const { address, chainId } = useAccount();

  // useEffect(() => {
  //   if (store.address === null || store.chainId === null) {
  //     if (address && chainId) {
  //       update({
  //         address,
  //         chainId,
  //       });
  //     }
  //   }
  // }, []);

  return (
    <div>
      <Navbar title="Swap tokens" isBack icon={IoSettings} />

      <div className="px-5 py-2 gap-y-2 w-full flex flex-col items-center space-y-3">
        <div className="w-full relative">
          <ChangeSection
            title={'You send'}
            balance={`4000 ${Tokens.CELO}`}
            // balance={`4000 ${selectedToken.fromTokens.symbol ?? Tokens.CELO}`}
            token={selectedToken.fromTokens}
            onTokenClick={() => {
              update({
                showTokens: true,
                lastClicked: 'SEND',
              });
            }}
            value={exchangeValue.fromToken.toString()}
            onChange={function (val: string): void {
              update({
                exchangeValue: {
                  toToken: exchangeValue.toToken * 1.56,
                  fromToken: parseInt(val),
                },
              });
            }}
            address={store.address!}
            chainId={store.chainId!}
          />

          <div
            className="my-1 flex items-center justify-center absolute bottom-[40%] left-[45%]"
            onClick={() => {
              update({
                selectedToken: {
                  toTokens: selectedToken.fromTokens,
                  fromTokens: selectedToken.toTokens,
                },
              });
            }}
          >
            <div className="bg-background p-2 rounded-lg">
              <IoSwapVertical size={24} className="text-primary" />
            </div>
          </div>

          <ChangeSection
            title={'You receive'}
            balance={`4000 ${selectedToken.toTokens.symbol}`}
            token={selectedToken.toTokens}
            isReadOnly
            onTokenClick={() => {
              update({
                showTokens: true,
                lastClicked: 'RECEIVE',
              });
            }}
            value={exchangeValue.toToken.toString()}
            onChange={function (val: string): void {}}
            address={address!}
            chainId={chainId!}
          />
        </div>

        <AppButton className="w-[75%]">Swap</AppButton>
      </div>

      <BottomCurrencies />
    </div>
  );
}

function BottomCurrencies() {
  const { update, showTokens } = useSwap();
  return (
    <BottomSheet
      show={showTokens}
      onClose={() => {
        update({ showTokens: false });
      }}
    >
      <div className="w-full">
        {TokenList.map((val, i) => (
          <CurrencyRow key={i} val={val} />
        ))}
      </div>
    </BottomSheet>
  );
}
