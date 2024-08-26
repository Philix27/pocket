import React, { useRef, useEffect } from 'react';
import { MessageInput } from './MessageInput';
import { useMessages, useSendMessage, useStreamMessages, useClient } from '@xmtp/react-sdk';
import MessageItem from './MessageItem';
import { toast } from 'sonner';

type IProps = { conversation: any; isPWA: boolean; isContained: boolean };
export const MessageContainer = ({ conversation, isPWA, isContained }: IProps) => {
  const messagesEndRef = useRef(null);

  const { client } = useClient();
  const { messages, isLoading } = useMessages(conversation);

  useStreamMessages(conversation);
  const { sendMessage } = useSendMessage();

  const handleSendMessage = async (newMessage: string) => {
    if (!newMessage.trim()) {
      toast.error('empty message');
      return;
    }
    if (conversation && conversation.peerAddress) {
      await sendMessage(conversation, newMessage);
    }
  };

  useEffect(() => {
    if (!isContained) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col justify-between h-full text-md">
      {isLoading ? (
        <small className="text-center">Loading messages...</small>
      ) : (
        <>
          <ul className="px-2 m-0 items-start flex-grow flex flex-col overflow-y-auto">
            {messages.slice().map((message) => {
              return (
                <MessageItem
                  isPWA={isPWA}
                  key={message.id}
                  message={message}
                  senderAddress={message.senderAddress}
                  client={client}
                />
              );
            })}
            <div ref={messagesEndRef} />
          </ul>
          <MessageInput
            isPWA={isPWA}
            onSendMessage={(msg) => {
              handleSendMessage(msg);
            }}
            replyingToMessage={''}
          />
        </>
      )}
    </div>
  );
};
