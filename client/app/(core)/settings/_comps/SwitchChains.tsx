'use client'
import { TextP, BottomSheet, AppRadio } from '@/comps';
import { useChainId, useSwitchChain } from 'wagmi';
import { RowItem } from './Row';
import { useState } from 'react';
import { LuNetwork } from 'react-icons/lu';

export function SwitchChain() {
  const chainId = useChainId();
  const { chains, switchChain, error } = useSwitchChain();
  const [showNetworks, setShowNetworks] = useState(false);
  // const { chain } = useNetwork();
  return (
    <>
      <RowItem
        title={'Switch Network'}
        subtitle={'Active network'}
        Icon={LuNetwork}
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
              {chains.map((chain) => (
                <div
                  key={chain.id}
                  onClick={() => switchChain({ chainId: chain.id })}
                  className="flex items-center gap-x-4 py-2 mb-1 bg-opacity/10"
                >
                  <AppRadio isSelected={chainId === chain.id} />
                  <TextP> {chain.name}</TextP>
                </div>
              ))}

              {error?.message}
            </div>
          </div>
        </BottomSheet>
      )}
    </>
  );
}
