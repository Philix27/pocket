'use client';
import { ChainId, Token, TokenAddresses, TokenList } from '@/lib';
import { TokenIcon } from '@/public/tokens/TokenIcon';
import { BottomSheet, Row, TextP } from '@/comps';
import { useSwap } from './useSwap';
import { useAccount } from 'wagmi';
import { Balance } from '../_comps';

export function BottomCurrencies() {
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

export function CurrencyRow(props: { val: Token }): React.JSX.Element {
  const { update, lastClicked, selectedToken } = useSwap();
  const { chainId } = useAccount();

  return (
    <Row
      title={props.val.name}
      subtitle={props.val.id}
      hideArrow
      color={props.val.color}
      trailingComp={
        <TextP>
          <Balance tokenAddress={TokenAddresses[chainId! as ChainId][props.val.id] as `0x${string}`} />
        </TextP>
      }
      // trailingText={isLoading ? '...' : data?.value.toString()}
      // trailingText={balances[props.val.id]}
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
