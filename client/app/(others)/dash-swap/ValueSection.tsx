'use client';
import { TextP } from '@/comps';
import { ChainId, Token } from '@/lib';
import React from 'react';
import { TokenIcon } from '@/public/tokens/TokenIcon';
import { BiChevronDown } from 'react-icons/bi';
import { useBalance } from 'wagmi';
import { TokenSelector } from '../_comps';

export function ChangeSection(props: {
  isReadOnly?: boolean;
  title: string;
  balance: string;
  address: string;
  chainId: number;
  value: string;
  onChange: (val: string) => void;
  token: Token;
  onTokenClick: VoidFunction;
}) {
  // const { address, chainId } = useAccount();
  const chainValue = props.chainId as ChainId;
  // const { isLoading, error, data } = useBalance({
  //   address: props.address as `0x${string}`,
  //   token: '0x874069Fa1Eb16D44d622F2e0Ca25eeA172369bC1',
  //   // token: TokenAddresses[chainValue][props.token.id] as `0x${string}`,
  //   // token: TokenFn.getTokenAddress(props.val.id, chainId!) as `0x${string}`,
  //   // token: TokenAddresses[42220].USDC as `0x${string}`,
  // });

  return (
    <div className="bg-card w-full mb-1 flex flex-col items-center justify-between rounded-lg px-3 py-4">
      <div className="flex items-center justify-between w-full">
        <TextP>{props.title}</TextP>
        <TextP className="text-muted text-[10px]">Bal: ...</TextP>
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
