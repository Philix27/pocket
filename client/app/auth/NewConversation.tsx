import React, { useCallback } from 'react';
import { MessageInput } from './MessageInput';
import { useStartConversation } from '@xmtp/react-sdk'; // import the required SDK hooks

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
        alert('Empty message');
        return;
      }
      if (!peerAddress) {
        alert('No peer address provided');
        return;
      }
      const newConversation = await startConversation(peerAddress, message);
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
