import React, { useCallback } from 'react';
import { MessageInput } from './MessageInput';
import { useStartConversation } from '@xmtp/react-sdk'; // import the required SDK hooks
import { toast } from 'sonner';

export const NewConversation = ({
  selectConversation,
  peerAddress,
}: {
  selectConversation: any;
  peerAddress: string;
}) => {
  const { startConversation } = useStartConversation();

  const handleSendMessage = useCallback(
    async (message: string) => {
      if (!message.trim()) {
        toast.error('Empty message');
        return;
      }
      if (!peerAddress) {
        toast.error('No peer address provided');
        return;
      }
      const newConversation: {
        cachedConversation: any;
        cachedMessage: any;
        conversation: any;
      } = await startConversation(peerAddress, message);
      selectConversation(newConversation?.cachedConversation);
    },
    [peerAddress, startConversation, selectConversation]
  );

  return (
    <div className="flex flex-col justify-end h-full">
      <MessageInput onSendMessage={handleSendMessage} replyingToMessage={''} isPWA={false} />
    </div>
  );
};
