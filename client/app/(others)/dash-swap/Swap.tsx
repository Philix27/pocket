'use client';
import { AppButton } from '@/comps';
import { Celo, ChainId, fromWei, fromWeiRounded, TokenAddresses, TokenFn, TokenId, Tokens } from '@/lib';
import React, { useEffect, useMemo } from 'react';
import { IoSwapVertical } from 'react-icons/io5';
import { ChangeSection } from './ValueSection';
import { useAccount } from 'wagmi';
import { useSwap } from './useSwap';
// import { useSwapQuote } from './swap/useSwapQuote';
import { toast } from 'sonner';

export default function Swap() {
  const { selectedToken, update, exchangeValue, ...store } = useSwap();
  const { address, chainId, isConnected } = useAccount();
  // const [fieldValue, setFieldValue] = useState();
  const tokensForChain = useMemo(() => {
    return chainId ? TokenFn.getTokenOptionsByChainId(chainId) : TokenFn.getTokenOptionsByChainId(Celo.chainId);
  }, [chainId]);

  const swappableTokenOptions = useMemo(() => {
    return TokenFn.getSwappableTokenOptions(selectedToken.fromTokens.id, chainId ? chainId : Celo.chainId);
  }, [chainId, exchangeValue]);

  // const { isLoading, quote, rate } = useSwapQuote(
  //   exchangeValue.fromToken,
  //   store.direction,
  //   selectedToken.fromTokens.id,
  //   selectedToken.toTokens.id
  // );
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

  // const roundedBalance = fromWeiRounded(
  //   balances[selectedToken.fromTokens.id],
  //   Tokens[selectedToken.fromTokens.id].decimals
  // );
  // const isRoundedBalanceGreaterThanZero = Boolean(Number.parseInt(roundedBalance) > 0);
  const onClickUseMax = () => {
    // update({
    //   amount: fromWei(balances[selectedToken.fromTokens.id], Tokens[selectedToken.fromTokens.id].decimals),
    // });

    if (selectedToken.fromTokens.id === TokenId.CELO) {
      toast.warning('Consider keeping some CELO for transaction fees');
    }
  };

  const onSubmit = () => {
    console.log('selected from', exchangeValue.fromToken.toString());
    console.log('selected to', exchangeValue.toToken.toString());
    update({
      showConfirm: true,
    });
  };
  return (
    <div>
      <div className="w-full relative bg-background">
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
          tokenAddress={TokenAddresses[chainId! as ChainId][selectedToken.fromTokens.id] as `0x${string}`}
        />

        <div
          className="my-1 flex items-center justify-center absolute bottom-[40%] left-[45%] "
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
          tokenAddress={TokenAddresses[chainId! as ChainId][selectedToken.toTokens.id] as `0x${string}`}
        />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        {/* {!isLoading && rate ? `${rate} ${selectedToken.fromTokens.id} ~ 1 ${selectedToken.toTokens.id}` : '...'} */}
        <AppButton className="w-[75%]" onClick={onSubmit}>
          Continue
        </AppButton>
      </div>
    </div>
  );
}
