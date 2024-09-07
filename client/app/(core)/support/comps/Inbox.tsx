'use client';
import './Inbox.css';
import { useCallback, useEffect, useState } from 'react';
import { useConsent, useConversations, useStreamConversations, type CachedConversation } from '@xmtp/react-sdk';
import { Messages } from './Messages';
import { AppButton, Spinner, TextP } from '@/comps';

export const Inbox: React.FC = () => {
  const { loadConsentList } = useConsent();
  const [selectedConversation, setSelectedConversation] = useState<CachedConversation | undefined>(undefined);

  const { conversations, isLoading } = useConversations();
  useStreamConversations();

  const handleConversationClick = useCallback((convo: CachedConversation) => {
    setSelectedConversation(convo);
  }, []);

  const getConvo = () => {
    const supportConversation = conversations.filter(
      (conversation) => conversation.peerAddress === '0xe6b6aAe8fA2718F5371e30F2ad2eEDa250801BB5'
    )[0];
    console.log('supportConversation:', supportConversation);
    handleConversationClick!(supportConversation);
  };

  useEffect(() => {
    void loadConsentList();
  }, []);

  return (
    <div className="flex flex-col h-screen mb-[100px]">
      <div className="InboxConversations">
        <div className="flex flex-col w-full">
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
    </div>
  );
};
