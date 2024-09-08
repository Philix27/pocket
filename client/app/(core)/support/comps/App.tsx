'use client';
import './App.css';
import { CachedConversation, useClient, useConsent, useConversations, useStreamConversations } from '@xmtp/react-sdk';
import { useCallback, useEffect, useState } from 'react';
import { use3Wagmi } from '@/lib';
import { Spinner, AppButton } from '@/comps';
import { XMTPConnect } from './XMTPConnect';
import { Messages } from './Messages';

const SUPPORT_ADDRESS = '0xe6b6aAe8fA2718F5371e30F2ad2eEDa250801BB5';

export const App = () => {
  const { client, disconnect } = useClient();
  const { address } = use3Wagmi();

  // disconnect XMTP client when the wallet changes
  useEffect(() => {
    void disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  if (!client) {
    return <XMTPConnect />;
  }

  return <Inbox />;
};

function Inbox() {
  const { loadConsentList } = useConsent();
  const [selectedConversation, setSelectedConversation] = useState<CachedConversation | undefined>(undefined);

  const { conversations, isLoading } = useConversations();
  useStreamConversations();

  const handleConversationClick = useCallback((convo: CachedConversation) => {
    setSelectedConversation(convo);
  }, []);

  const getConvo = () => {
    const supportConversation = conversations.filter((conversation) => conversation.peerAddress === SUPPORT_ADDRESS)[0];
    console.log('supportConversation:', supportConversation);
    handleConversationClick!(supportConversation);
  };

  useEffect(() => {
    void loadConsentList();
  }, []);
  return (
    <div className="flex flex-col h-screen mb-[100px]">
      <div className="flex flex-col w-full items-center justify-center h-full">
        {isLoading && <Spinner />}
        {selectedConversation ? (
          <Messages conversation={selectedConversation} />
        ) : (
          <AppButton className="w-fit h-fit" onClick={getConvo}>
            Get conv
          </AppButton>
        )}
      </div>
    </div>
  );
}
