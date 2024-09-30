'use client';
import { AppButton, BottomSheet, Navbar, Row, TextP } from '@/comps';
import { Token, TokenList, Tokens } from '@/lib';
import React, { useState } from 'react';
import { IoReload, IoSettings, IoSwapVertical } from 'react-icons/io5';
import { TokenIcon } from '@/public/tokens/TokenIcon';
import { ChangeSection } from './ValueSection';

export default function SwapPage() {
  const [showTokens, setShowTokens] = useState<boolean>(false);
  const [lastClicked, setLastClicked] = useState<'SEND' | 'RECEIVE'>('SEND');
  const [selectedToken, setSelectedToken] = useState<{ fromTokens: Token; toTokens: Token }>({
    fromTokens: Tokens.CELO,
    toTokens: Tokens.cUSD,
  });
  const [exchangeValue, setExchangeValue] = useState<{ fromToken: number; toToken: number }>({
    fromToken: 0.0,
    toToken: 0.0,
  });

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
            balance={`4000 ${selectedToken.fromTokens.symbol}`}
            token={selectedToken.fromTokens}
            onTokenClick={() => {
              setShowTokens(true);
              setLastClicked('SEND');
            }}
            value={exchangeValue.fromToken.toString()}
            // value={formatToCurrency(exchangeValue.fromToken)}
            onChange={function (val: string): void {
              setExchangeValue((prev) => {
                return {
                  ...prev,
                  fromToken: parseInt(val),
                };
              });
            }}
          />
          <div
            className="relative my-3 flex items-center justify-center"
            onClick={() => {
              setSelectedToken((prev) => {
                return { toTokens: prev.fromTokens, fromTokens: prev.toTokens };
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
              setShowTokens(true);
              setLastClicked('RECEIVE');
            }}
            value={exchangeValue.toToken.toString()}
            onChange={function (val: string): void {
              setExchangeValue((prev) => {
                return {
                  ...prev,
                  toToken: parseInt(val),
                };
              });
            }}
          />
        </div>
        <AppButton className="w-[75%]">Swap</AppButton>
      </div>

      <BottomSheet
        show={showTokens}
        onClose={() => {
          setShowTokens(false);
        }}
      >
        <div className="w-full">
          {TokenList.map((val, i) => (
            <Row
              key={i}
              title={val.name}
              subtitle={val.id}
              hideArrow
              color={val.color}
              trailingText={'$90.2'}
              imgComp={<TokenIcon token={val} size="s" className="mr-3" />}
              onClick={() => {
                if (lastClicked === 'SEND') {
                  setSelectedToken((prev) => {
                    return { ...prev, fromTokens: val };
                  });
                } else {
                  setSelectedToken((prev) => {
                    return { ...prev, toTokens: val };
                  });
                }
                setShowTokens(false);
              }}
            />
          ))}
        </div>
      </BottomSheet>
    </div>
  );
}

function formatToCurrency(num: number) {
  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
