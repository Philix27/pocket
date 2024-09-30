'use client';
import { AppButton, BottomSheet, Navbar, Row, Separator, TextP } from '@/comps';
import { Token, TokenList, Tokens } from '@/lib';
import React, { useState } from 'react';
import { IoReload, IoSettings, IoSwapVertical } from 'react-icons/io5';
import { TokenIcon } from '@/public/tokens/TokenIcon';

export default function SwapPage() {
  const [showTokens, setShowTokens] = useState<boolean>(false);
  const [lastClicked, setLastClicked] = useState<'SEND' | 'RECEIVE'>('SEND');
  const [selectedToken, setSelectedToken] = useState<{ fromTokens: Token; toTokens: Token }>({
    fromTokens: Tokens.CELO,
    toTokens: Tokens.cUSD,
  });

  return (
    <div>
      <Navbar title="Swap tokens" isBack />

      <div className="px-5 py-4 gap-y-2 w-full flex flex-col items-center space-y-3">
        <div className="w-full">
          <div className="flex items-center justify-between w-full">
            <IoReload />
            <IoSettings />
          </div>

          <ChangeSection
            title={'You send'}
            balance={`4000 ${selectedToken.fromTokens.symbol}`}
            token={selectedToken.fromTokens}
            onTokenClick={() => {
              setShowTokens(true);
              setLastClicked('SEND');
            }}
          />
          <div className="relative my-4 flex items-center justify-center">
            <IoSwapVertical size={24} className="text-primary" />
          </div>

          <ChangeSection
            title={'You receive'}
            balance={`4000 ${selectedToken.toTokens.symbol}`}
            token={selectedToken.toTokens}
            onTokenClick={() => {
              setShowTokens(true);
              setLastClicked('RECEIVE');
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
              imgComp={<TokenIcon token={val} size="s" />}
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

function ChangeSection(props: { title: string; balance: string; token: Token; onTokenClick: VoidFunction }) {
  return (
    <div className="bg-card w-full mb-2 flex flex-col items-center justify-between rounded-lg px-3 py-4">
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
                px-2 py-2 text-2xl tracking-wide`}
          pattern={'[0-9]*'}
          inputMode="numeric"
        />

        <div className="bg-primary p2" onClick={props.onTokenClick}>
          <TokenIcon token={props.token} size="s" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <TextP className="text-primary text-[10px]"> ~ $9000 Equi</TextP>
        <TextP className="text-primary text-[10px] font-bold">MAX</TextP>
      </div>
    </div>
  );
}
