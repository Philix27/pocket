import { BottomSheet } from '@/comps';
import { useChainId, useSwitchChain } from 'wagmi';
import { InfoRowItem, RowItem } from './Row';
import { Fragment, useState } from 'react';
import { IoCalendarNumber } from 'react-icons/io5';
import { MdBalance } from 'react-icons/md';

export function WalletBalance() {
  const chainId = useChainId();
  const { chains, switchChain, error } = useSwitchChain();
  const [showNetworks, setShowNetworks] = useState(false);

  return (
    <>
      <RowItem
        title={'Balance'}
        subtitle={''}
        Icon={MdBalance}
        onClick={() => {
          setShowNetworks(true);
        }}
      />
      {showNetworks && (
        <BottomSheet
          title="Select network"
          onClose={() => {
            setShowNetworks(false);
          }}
        >
          <div className="w-full">
            <div>
              {walletBalance.map((value, index) => (
                <Fragment key={index}>
                  <InfoRowItem left={value.title} right={value.network} Icon={IoCalendarNumber} />
                </Fragment>
              ))}

              {error?.message}
            </div>
          </div>
        </BottomSheet>
      )}
    </>
  );
}

type IWalletBalance = { title: string; address: string; network: 'CELO' | 'ALFAJORES' | 'MAINNET' };
const walletBalance: IWalletBalance[] = [
  {
    title: 'cUSD',
    address: '',
    network: 'ALFAJORES',
  },
  {
    title: 'USDT',
    address: '',
    network: 'ALFAJORES',
  },
  {
    title: 'cUSD',
    address: '',
    network: 'ALFAJORES',
  },
  {
    title: 'cUSD',
    address: '',
    network: 'CELO',
  },
  {
    title: 'USDT',
    address: '',
    network: 'CELO',
  },
  {
    title: 'cUSD',
    address: '',
    network: 'CELO',
  },
];
