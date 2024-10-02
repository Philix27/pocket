'use client';
import { BottomSheet, Row, Radial } from '@/comps';
import { useChainId, useSwitchChain } from 'wagmi';
import { useState } from 'react';
import { LuNetwork } from 'react-icons/lu';

export function SwitchChain() {
  const chainId = useChainId();
  const { chains, switchChain, error } = useSwitchChain();
  const [showNetworks, setShowNetworks] = useState(false);

  return (
    <>
      <Row
        title={'Switch Network'}
        subtitle={'Active network'}
        Icon={LuNetwork}
        onClick={() => {
          setShowNetworks(true);
        }}
      />

      <BottomSheet
        show={showNetworks}
        title="Select network"
        onClose={() => {
          setShowNetworks(false);
        }}
      >
        <div className="w-full">
          {chains.map((chain) => (
            <Row
              key={chain.id}
              title={chain.name}
              imgComp={<Radial isChecked={chainId === chain.id} />}
              hideArrow
              onClick={() => {
                switchChain({ chainId: chain.id });
              }}
            />
          ))}

          {error?.message}
        </div>
      </BottomSheet>
    </>
  );
}
