import { useWeb3Modal, AppStores } from '@/lib';
import React from 'react';
import { useXm } from './xs';
import { AppButton, TextP } from '@/comps';

export default function CoreComp() {
  const { logout, address, isLoggedIn } = useWeb3Modal();
  const store = AppStores.useChat();
  const { initXmtp } = useXm();
  return (
    <div>
      <h1>Web3Auth XMTP Quickstart </h1>

      <h3>Web3Auth {store.web3Wallet}</h3>
      {store.isConnectedToXmpt || <AppButton onClick={initXmtp}>Connect xmtp</AppButton>}

      <div>
        <Conversations />
      </div>
    </div>
  );
}

function Conversations() {
  const { conversationFn: fn } = useXm();

  if (fn.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {fn.conversations.map((val, i) => (
        <div key={i}>
          <TextP>Peer Address: {val.peerAddress}</TextP>
        </div>
      ))}
    </div>
  );
}
