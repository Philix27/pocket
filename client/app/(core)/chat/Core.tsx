'use client';
import { useWeb3Modal, AppStores } from '@/lib';
import React from 'react';
import { useXm } from './xs';
import { AppButton, TextH, TextP } from '@/comps';
import { CachedConversation } from '@xmtp/react-sdk';

export default function CoreComp() {
  const { logout, address, isLoggedIn } = useWeb3Modal();
  const store = AppStores.useChat();
  const { initXmtp, client } = useXm();
  return (
    <div>
      <h1>Web3Auth XMTP Quickstart </h1>

      <h3>Web3Auth {store.web3Wallet}</h3>
      {!store.isConnectedToXmpt || (!client && <AppButton onClick={initXmtp}>Connect xmtp</AppButton>)}

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
  if (fn.error) {
    return (
      <div>
        <p>Error msg {fn.error.message}</p>
        <p>Error name {fn.error.name}</p>
        <p>Error stack {fn.error.stack}</p>
      </div>
    );
  }

  return (
    <div className="my-3">
      <TextH>Conversations</TextH>
      {fn.conversations.map((val, i) => (
        <div key={i} className="p-2 border rounded-md">
          <TextP>Peer Address: {val.peerAddress}</TextP>
          <TextP>Created At: {val.createdAt.getDate()}</TextP>
          <TextP>Wallet Address: {val.walletAddress}</TextP>
          <TextP>Topic: {val.topic}</TextP>
        </div>
      ))}
    </div>
  );
}

function Messages(props: { message: CachedConversation }) {
  return <div>{/* <p>{props.message} </p> */}</div>;
}
