'use client';

import { Balance } from './balance';
import { SendTransaction } from './sendTransaction';
import { SwitchChain } from './switchNetwork';
import { WriteContract } from './writeContract';
import { AppButton } from '@/comps';
import { use3Wagmi } from './use3Wagmi';

export default function Profile() {
  const { address, connector, isConnected, connect, connectors, connectionErr, logout } = use3Wagmi();
  if (isConnected) {
    return (
      <div className="main">
        <div className="title">Connected to {connector?.name}</div>
        <div>{address}</div>
        <AppButton variant={'outline'} onClick={logout}>
          Disconnect
        </AppButton>
        <SendTransaction />
        <Balance />
        <WriteContract />
        <SwitchChain />
      </div>
    );
  } else {
    return (
      <div className="main gap-x-2 gap-y-3">
        {connectors.map((connector) => {
          return (
            <AppButton key={connector.id} onClick={() => connect({ connector })}>
              {connector.name}
            </AppButton>
          );
        })}
        {connectionErr && <div>{connectionErr.message}</div>}
      </div>
    );
  }
}
