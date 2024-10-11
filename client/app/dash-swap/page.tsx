'use client';
import { AppButton, Navbar } from '@/comps';
import { AddressFn, Celo, fromWei, fromWeiRounded, HelperFn, TokenFn, TokenId, Tokens } from '@/lib';
import React, { useEffect, useMemo, useState } from 'react';
import { IoSettings, IoSwapVertical } from 'react-icons/io5';
import { ChangeSection } from './ValueSection';
import { useAccount } from 'wagmi';
import { useSwap } from './useAcctBalance';
import { BottomCurrencies } from './Currencies';
import { useSwapQuote } from './swap/useSwapQuote';
import { toast } from 'sonner';

export default function SwapPage() {
  const { selectedToken, update, exchangeValue, balances, ...store } = useSwap();
  const { address, chainId, isConnected } = useAccount();
  // const [fieldValue, setFieldValue] = useState();
  const tokensForChain = useMemo(() => {
    return chainId ? TokenFn.getTokenOptionsByChainId(chainId) : TokenFn.getTokenOptionsByChainId(Celo.chainId);
  }, [chainId]);

  const swappableTokenOptions = useMemo(() => {
    return TokenFn.getSwappableTokenOptions(selectedToken.fromTokens.id, chainId ? chainId : Celo.chainId);
  }, [chainId, exchangeValue]);

  const { isLoading, quote, rate } = useSwapQuote(
    exchangeValue.fromToken,
    store.direction,
    selectedToken.fromTokens.id,
    selectedToken.toTokens.id
  );
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

  useEffect(() => {
    // setFieldValue('quote', quote);
    update({
      quote: store.quote,
    });
  }, [store.quote]);

  useEffect(() => {
    if (
      chainId &&
      isConnected &&
      !TokenFn.isSwappable(selectedToken.fromTokens.id, selectedToken.toTokens.id, chainId)
    ) {
      update({
        selectedToken: {
          ...selectedToken,
          toTokens: TokenFn.getTokenById(swappableTokenOptions.length < 1 ? TokenId.cUSD : swappableTokenOptions[0])!,
        },
      });
      // setFieldValue('toTokenId', swappableTokenOptions.length < 1 ? TokenId.cUSD : swappableTokenOptions[0]);
    }
  }, [chainId, exchangeValue.fromToken, swappableTokenOptions, isConnected]);

  const roundedBalance = fromWeiRounded(
    balances[selectedToken.fromTokens.id],
    Tokens[selectedToken.fromTokens.id].decimals
  );
  const isRoundedBalanceGreaterThanZero = Boolean(Number.parseInt(roundedBalance) > 0);
  const onClickUseMax = () => {
    update({
      amount: fromWei(balances[selectedToken.fromTokens.id], Tokens[selectedToken.fromTokens.id].decimals),
    });

    if (selectedToken.fromTokens.id === TokenId.CELO) {
      toast.warning('Consider keeping some CELO for transaction fees');
    }
  };

  const onSubmit = () => {
    console.log('selected from', exchangeValue.fromToken.toString());
    console.log('selected to', exchangeValue.toToken.toString());
  };
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
                  toToken: parseInt(val) * 1.56,
                  fromToken: parseInt(val),
                },
              });
            }}
            address={store.address!}
            chainId={store.chainId!}
          />

          <div
            className="my-1 flex items-center justify-center  absolute bottom-[40%] left-[45%] "
            onClick={() => {
              update({
                selectedToken: {
                  toTokens: selectedToken.fromTokens,
                  fromTokens: selectedToken.toTokens,
                },
              });
            }}
          >
            <div className="bg-card p-2 rounded-lg border-4 border-background">
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
        {!isLoading && rate ? `${rate} ${selectedToken.fromTokens.id} ~ 1 ${selectedToken.toTokens.id}` : '...'}
        <AppButton className="w-[75%]" onClick={onSubmit}>
          Swap
        </AppButton>
      </div>

      <BottomCurrencies />
    </div>
  );
}
