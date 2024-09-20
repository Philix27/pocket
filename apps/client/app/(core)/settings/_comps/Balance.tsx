'use client';
import { BottomSheet, Row, SimpleRow } from '@/comps';
import { useChainId, useSwitchChain } from 'wagmi';
import { Fragment, useState } from 'react';
import { MdBalance } from 'react-icons/md';

export function WalletBalance() {
  const chainId = useChainId();
  const { error } = useSwitchChain();
  const [showNetworks, setShowNetworks] = useState(false);

  return (
    <>
      <Row
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
                  <SimpleRow left={value.title} right={value.network} />
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
