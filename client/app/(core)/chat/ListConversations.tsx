import React, { useState, useEffect, useCallback } from 'react';
import { useConversations, useStreamConversations, useClient, Conversation } from '@xmtp/react-sdk';
import { AppStores } from '@/lib';

type IProps = {
  searchTerm: string;
  // selectConversation: any;
  onConversationFound: any;
  isConsent: boolean;
};

export const ListConversations = (props: IProps) => {
  const store = AppStores.useChat();
  const { client } = useClient();
  const { conversations } = useConversations();

  const filteredConversations = conversations.filter(
    (conversation) =>
      conversation?.peerAddress.toLowerCase().includes(props.searchTerm.toLowerCase()) &&
      conversation?.peerAddress !== client!.address
  );

  useEffect(() => {
    if (filteredConversations.length > 0) {
      props.onConversationFound(true);
    }
  }, [filteredConversations, props.onConversationFound]);

  const onConversation = useCallback((conversation: Conversation<any>) => {
    store.update({ conversations: [...store.conversations!, conversation] });
  }, []);

  const { error } = useStreamConversations({
    onConversation: onConversation,
    onError: () => {},
  });

  return (
    <>
      {filteredConversations.map((conversation, index) => (
        <li
          key={index}
          style={{ transition: 'background-color 0.3s ease' }}
          onClick={() => {
            // props.selectConversation(conversation);
            store.update({ selectedConverse: conversation, peerAddress: conversation.peerAddress });
          }}
          className={`
            flex justify-between items-center
            m-0 border-0 border-b bg-card p-2
          `}
        >
          <div
            className={`
            flex flex-col items-start
            w-[75%] ml-2 overflow-hidden
          `}
          >
            <span className="text-lg font-bold">
              {conversation.peerAddress.substring(0, 6) +
                '...' +
                conversation.peerAddress.substring(conversation.peerAddress.length - 4)}
            </span>
            <span className="text-slate-600 whitespace-nowrap overflow-hidden text-ellipsis text-lg">...</span>
          </div>
          <div
            className={`text-md text-slate-400 
            w-[25%] text-right flex flex-col items-end justify-between`}
          >
            {getRelativeTimeLabel(conversation.createdAt)}
          </div>
        </li>
      ))}
    </>
  );
};

const getRelativeTimeLabel = (dateString: string | number | Date) => {
  const diff = new Date().getTime() - new Date(dateString).getTime();
  const diffMinutes = Math.floor(diff / 1000 / 60);
  const diffHours = Math.floor(diff / 1000 / 60 / 60);
  const diffDays = Math.floor(diff / 1000 / 60 / 60 / 24);
  const diffWeeks = Math.floor(diff / 1000 / 60 / 60 / 24 / 7);

  if (diffMinutes < 60) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  return `${diffWeeks} week${diffWeeks > 1 ? 's' : ''} ago`;
};
