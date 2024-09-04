import './Inbox.css';
import { useCallback, useEffect, useState } from 'react';
import { useConsent, type CachedConversation } from '@xmtp/react-sdk';
import { Conversations } from './Conversations';
import { Messages } from './Messages';
import { NewMessage } from './NewMessage';
import { useWallet } from '@/lib';
import { NoSelectedConversationNotification } from './NoSelectedConversationNotification';
import { AppButton } from '@/comps';

export const Inbox: React.FC = () => {
  const { disconnect } = useWallet();
  const { loadConsentList } = useConsent();
  const [selectedConversation, setSelectedConversation] = useState<CachedConversation | undefined>(undefined);
  const [isNewMessage, setIsNewMessage] = useState(false);

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

  useEffect(() => {
    void loadConsentList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <div className="overflow-y-auto flex">
          <Conversations onConversationClick={handleConversationClick} selectedConversation={selectedConversation} />
        </div>
        
        <div className="InboxConversations__messages">
          {isNewMessage ? (
            <NewMessage onSuccess={handleStartNewConversationSuccess} />
          ) : selectedConversation ? (
            <Messages conversation={selectedConversation} />
          ) : (
            <NoSelectedConversationNotification onStartNewConversation={handleStartNewConversation} />
          )}
        </div>
      </div>
    </div>
  );
};
