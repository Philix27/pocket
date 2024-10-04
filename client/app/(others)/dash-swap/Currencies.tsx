import { Token, TokenList } from '@/lib';
import { TokenIcon } from '@/public/tokens/TokenIcon';
import { BottomSheet, Row } from '@/comps';
import { useSwap } from './useAcctBalance';

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
