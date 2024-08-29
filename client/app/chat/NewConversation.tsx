import React, { useCallback } from 'react';
import { MessageInput } from './MessageInput';
import { useStartConversation } from '@xmtp/react-sdk'; // import the required SDK hooks
import { toast } from 'sonner';
import { AppStores } from '@/lib';

export const NewConversation = () => {
  const store = AppStores.useChat();
  const { startConversation } = useStartConversation();

  const handleSendMessage = useCallback(
    async (message: string) => {
      if (!message.trim()) {
        toast.error('Empty message');
        return;
      }
      if (!store.peerAddress) {
        toast.error('No peer address provided : ' + store.peerAddress);
        return;
      }
      const newConversation: {
        cachedConversation: any;
        cachedMessage: any;
        conversation: any;
        // } = await startConversation('0x20F50b8832f87104853df3FdDA47Dd464f885a49', message);
      } = await startConversation(store.peerAddress, message);
      // store.update({ selectedConversation: newConversation });
    },
    [store.peerAddress, startConversation, store.selectedConversation]
  );

  return (
    <div className="flex flex-col justify-end h-full">
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};
