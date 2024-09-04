import './Inbox.css';
import { useCallback, useEffect, useState } from 'react';
import { useConsent, useConversations, type CachedConversation } from '@xmtp/react-sdk';
import { Messages } from './Messages';
import { useWallet } from '@/lib';
import { NoSelectedConversationNotification } from './NoSelectedConversationNotification';
import { AppButton } from '@/comps';

export const Inbox: React.FC = () => {
  const { disconnect } = useWallet();
  const { loadConsentList } = useConsent();
  const [selectedConversation, setSelectedConversation] = useState<CachedConversation | undefined>(undefined);
  const [isNewMessage, setIsNewMessage] = useState(false);
  const { conversations, isLoading } = useConversations();

  const handleConversationClick = useCallback((convo: CachedConversation) => {
    setSelectedConversation(convo);
    setIsNewMessage(false);
  }, []);

  const handleStartNewConversation = useCallback(() => {
    setIsNewMessage(true);
  }, []);

  const handleStartNewConversationSuccess = useCallback((convo?: CachedConversation) => {
    setSelectedConversation(convo);
    setIsNewMessage(false);
  }, []);

  const handleDisconnect = useCallback(() => {
    disconnect();
  }, [disconnect]);

  const getConvo = () => {
    // useStreamConversations();
    const supportConversation = conversations.filter(
      (conversation) => conversation.peerAddress === '0x20F50b8832f87104853df3FdDA47Dd464f885a49'
    )[0];

    handleConversationClick!(supportConversation);
  };

  useEffect(() => {
    void loadConsentList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getConvo();
  }, []);

  return (
    <div className="flex flex-col h-screen mb-[100px]">
      <div className="flex flex-shrink-0">
        <div className="flex items-center justify-between w-full">
          <AppButton className="fit" onClick={handleStartNewConversation}>
            New message
          </AppButton>
          <AppButton className="fit" variant={'destructive'} onClick={handleDisconnect}>
            Disconnect
          </AppButton>
        </div>
      </div>

      <div className="InboxConversations">
        <div className="InboxConversations__messages">
          {selectedConversation ? (
            <Messages conversation={selectedConversation} /> //! Remains
          ) : (
            <NoSelectedConversationNotification onStartNewConversation={handleStartNewConversation} /> //! remove
          )}
        </div>
      </div>
    </div>
  );
};
