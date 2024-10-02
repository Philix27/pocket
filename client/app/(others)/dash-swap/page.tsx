'use client';
import { AppButton, BottomSheet, Navbar, Row } from '@/comps';
import { Token, TokenList, Tokens } from '@/lib';
import React, { useEffect } from 'react';
import { IoReload, IoSettings, IoSwapVertical } from 'react-icons/io5';
import { TokenIcon } from '@/public/tokens/TokenIcon';
import { ChangeSection } from './ValueSection';
import { useAccount } from 'wagmi';
import { useSwap } from './useAcctBalance';

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
      <Navbar title="Swap tokens" isBack />

      <div className="px-5 py-2 gap-y-2 w-full flex flex-col items-center space-y-3">
        <div className="w-full">
          <div className="flex items-center justify-between w-full p-4">
            <IoReload size={22} />
            <IoSettings size={22} />
          </div>

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
            className="relative my-3 flex items-center justify-center"
            onClick={() => {
              update({
                selectedToken: { toTokens: selectedToken.fromTokens, fromTokens: selectedToken.toTokens },
              });
            }}
          >
            <div className="bg-card p-2 rounded-lg">
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

function CurrencyRow(props: { val: Token }): React.JSX.Element {
  const { update, lastClicked, selectedToken } = useSwap();

  return (
    <Row
      title={props.val.name}
      subtitle={props.val.id}
      hideArrow
      color={props.val.color}
      // trailingText={'...'}
      // trailingText={isLoading ? '...' : data?.value.toString()}
      imgComp={<TokenIcon token={props.val} size="s" className="mr-3" />}
      onClick={() => {
        if (lastClicked === 'SEND') {
          update({
            selectedToken: { ...selectedToken, fromTokens: props.val },
            showTokens: false,
          });
        } else {
          update({
            selectedToken: { ...selectedToken, toTokens: props.val },
            showTokens: false,
          });
        }
      }}
    />
  );
}
