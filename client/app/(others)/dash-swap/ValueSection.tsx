'use client';
import { TextP } from '@/comps';
import { Token } from '@/lib';
import React, { memo } from 'react';
import { Balance, TokenSelector } from '../_comps';

function Comp(props: {
  isReadOnly?: boolean;
  title: string;
  balance: string;
  tokenAddress: string;
  value: string;
  onChange: (val: string) => void;
  token: Token;
  onTokenClick: VoidFunction;
}) {
  return (
    <div className="bg-card w-full mb-1 flex flex-col items-center justify-between rounded-lg px-3 py-4">
      <div className="flex items-center justify-between w-full">
        <TextP>{props.title}</TextP>
        <TextP className="text-muted text-[10px]">
          <Balance tokenAddress={props.tokenAddress as `0x${string}`} />
        </TextP>
        {/* Bal: {isLoading ? '...' : data?.value!.toString().substring(0, 4)} */}
      </div>

      <div className="w-full flex items-center justify-between">
        <input
          type="number"
          placeholder="0.00"
          className={`outline-none w-full
                border-none bg-transparent font-light
                px-2 py-2 text-2xl tracking-wide mr-2`}
          pattern={'[0-9]*'}
          inputMode="numeric"
          readOnly={props.isReadOnly}
          value={props.value}
          onChange={(e) => {
            props.onChange(e.target.value);
          }}
        />
        <TokenSelector onClick={props.onTokenClick} token={props.token} />
      </div>

      <div className="flex justify-between items-center w-full">
        <TextP className="text-primary text-[10px]"> ~ $9000 Equi</TextP>
        <TextP className="text-primary text-[10px] font-bold">MAX</TextP>
      </div>
    </div>
  );
}

export const ChangeSection = memo(Comp);
