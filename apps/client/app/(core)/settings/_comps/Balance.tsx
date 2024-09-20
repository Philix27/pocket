<<<<<<< HEAD:apps/client/app/(core)/settings/_comps/Balance.tsx
import { BottomSheet } from '@/comps';
import { useChainId, useSwitchChain } from 'wagmi';
import { InfoRowItem, RowItem } from './Row';
import { Fragment, useState } from 'react';
import { IoCalendarNumber } from 'react-icons/io5';
=======
'use client';
import { BottomSheet, Row, SimpleRow } from '@/comps';
import { useChainId, useSwitchChain } from 'wagmi';
import { Fragment, useState } from 'react';
>>>>>>> main:client/app/(core)/settings/_comps/Balance.tsx
import { MdBalance } from 'react-icons/md';

export function WalletBalance() {
  const chainId = useChainId();
<<<<<<< HEAD:apps/client/app/(core)/settings/_comps/Balance.tsx
  const { chains, switchChain, error } = useSwitchChain();
=======
  const { error } = useSwitchChain();
>>>>>>> main:client/app/(core)/settings/_comps/Balance.tsx
  const [showNetworks, setShowNetworks] = useState(false);

  return (
    <>
<<<<<<< HEAD:apps/client/app/(core)/settings/_comps/Balance.tsx
      <RowItem
=======
      <Row
>>>>>>> main:client/app/(core)/settings/_comps/Balance.tsx
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
<<<<<<< HEAD:apps/client/app/(core)/settings/_comps/Balance.tsx
                  <InfoRowItem left={value.title} right={value.network} Icon={IoCalendarNumber} />
=======
                  <SimpleRow left={value.title} right={value.network} />
>>>>>>> main:client/app/(core)/settings/_comps/Balance.tsx
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
