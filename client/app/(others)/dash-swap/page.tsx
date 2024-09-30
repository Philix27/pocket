'use client';
import { AppButton, BottomSheet, Navbar, Row, Separator, TextH, TextP } from '@/comps';
import { Token, TokenList, Tokens } from '@/lib';
import React, { useState } from 'react';
import { IoReload, IoSettings, IoSwapVertical } from 'react-icons/io5';
import { TokenIcon } from '@/public/tokens/TokenIcon';

export default function SwapPage() {
  const [showTokens, setShowTokens] = useState<{ fromTokens?: boolean; toTokens?: boolean }>();
  const [selectedToken, setSelectedToken] = useState<{ fromTokens: Token; toTokens: Token }>({
    fromTokens: Tokens.CELO,
    toTokens: Tokens.cUSD,
  });

  return (
    <div>
      <Navbar title="Swap tokens" isBack />

      <div className="px-5 py-4 gap-y-2 w-full flex flex-col items-center space-y-3">
        <div className="w-full">
          <div className="flex items-center justify-center w-full">
            <IoReload />
            <IoSettings />
          </div>

          <ChangeSection
            title={'You send'}
            balance={`4000 ${selectedToken.fromTokens.symbol}`}
            token={selectedToken.fromTokens}
          />
          <div>
            <IoSwapVertical />
            <Separator />
          </div>

          <ChangeSection
            title={'You receive'}
            balance={`4000 ${selectedToken.toTokens.symbol}`}
            token={selectedToken.fromTokens}
          />
        </div>
        <AppButton className="w-[75%]">Swap</AppButton>
      </div>

      <BottomSheet
        show={!showTokens?.fromTokens || !showTokens?.toTokens}
        onClose={() => {
          if (showTokens?.fromTokens) {
            setShowTokens({ fromTokens: false });
          }
          if (showTokens?.toTokens) {
            setShowTokens({ toTokens: false });
          }
        }}
      >
        <div className="w-full">
          {TokenList.map((val, i) => (
            <Row
              key={i}
              title={val.name}
              subtitle={val.id}
              imgComp={<TokenIcon token={val} size="s" />}
              onClick={() => {
                if (showTokens?.fromTokens) {
                  setSelectedToken((prev) => {
                    return { ...prev, fromTokens: val };
                  });
                }
                if (showTokens?.toTokens) {
                  setSelectedToken((prev) => {
                    return { ...prev, toTokens: val };
                  });
                }
                setShowTokens({ fromTokens: true });
              }}
            />
          ))}
        </div>
      </BottomSheet>
    </div>
  );
}

function ChangeSection(props: { title: string; balance: string; token: Token }) {
  return (
    <div className="bg-card w-full mb-2 flex items-center justify-between rounded-lg">
      <div>
        <TextP>{props.title}</TextP>
        <TextP className="text-muted text-[10px]">Bal: {props.balance} </TextP>
      </div>

      <div className="w-full flex items-center justify-between flex-col">
        <input
          type="number"
          placeholder="0.00"
          className={`outline-none w-full
                border-none bg-transparent
                px-2 py-2 text-xl tracking-wide`}
        />

        <TokenIcon token={props.token} size="s" />
      </div>

      <div>
        <TextP className="text-primary text-[10px]"> ~ $9000 Equi</TextP>
        <TextP className="text-primary text-[10px]">MAX</TextP>
      </div>
    </div>
  );
}
