'use client';
import { useWeb3Modal, AppStores } from '@/lib';
import React, { useState } from 'react';
import { useXm } from './xs';
import { AppButton, TextH, TextP } from '@/comps';
import { CachedConversation, Conversations } from '@xmtp/react-sdk';
import { ConversationComp } from './Conversation';

export default function CoreComp() {
  const store = AppStores.useChat();
  const { initXmtp, client } = useXm();

  return (
    <div>
      <h1>Web3Auth XMTP Quickstart </h1>

      <h3>Web3Auth {store.web3Wallet}</h3>
      {store.isConnectedToXmpt || <AppButton onClick={initXmtp}>Connect xmtp</AppButton>}

      <div>{client ? <ConversationComp client={client} /> : 'No client'}</div>
      {/* <ConversationComp client={client} /> */}
    </div>
  );
}

function Messages(props: { message: CachedConversation }) {
  return <div>{/* <p>{props.message} </p> */}</div>;
}
