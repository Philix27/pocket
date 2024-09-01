'use client';
import { useWeb3Modal, AppStores } from '@/lib';
import React, { useEffect, useState } from 'react';
import { useXm } from './xs';
import { AppButton, TextH, TextP } from '@/comps';
import { CachedConversation, Client, Conversation } from '@xmtp/react-sdk';

export function ConversationComp({ client }: { client: Client }) {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [conversations, setConversations] = useState<Conversation<any>[]>([]);
  const [isLoading, setLoading] = useState(false);
  const { conversationFn: fn } = useXm();

  //! Fetch Stream conversations
  useEffect(() => {
    let isMounted = true;
    let isConsent = false;
    let stream: any;

    const fetchAndStreamConversations = async () => {
      setLoading(true);
      if (isConsent) {
        //Refresh consent
        console.log('Refreshing consent list');
        await client.contacts.refreshConsentList();
      }

      const allConversations = await client.conversations.list();
      // Assuming you have a method to fetch the last message for a conversation

      const sortedConversations = allConversations.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      if (isMounted) {
        setConversations(sortedConversations);
      }
      setLoading(false);

      stream = await client.conversations.stream();
      for await (const conversation of stream) {
        console.log('New conversation:', conversation.consentState);
        //Need to fix this manually
        if (conversation.clientAddress === client.address) await client.contacts.allow([conversation.peerAddress]);
        if (isMounted) {
          setConversations((prevConversations) => {
            const newConversations = [...prevConversations, conversation];
            return newConversations.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
          });
        }

        //break;
      }
    };

    fetchAndStreamConversations();

    return () => {
      isMounted = false;
      if (stream) {
        stream.return();
      }
    };
  }, []);

  if (fn.isLoading) {
    return <div>Loading...</div>;
  }

  if (fn.error) {
    return (
      <div>
        <p>Error msg {fn.error.message}</p>
        <p>Error name {fn.error.name}</p>
        <p>Error stack {fn.error.stack}</p>
      </div>
    );
  }

  return (
    <div className="my-3">
      <TextH>Conversations</TextH>
      {conversations.map((val, i) => (
        <div key={i} className="p-2 border rounded-md">
          <TextP>Peer Address: {val.peerAddress}</TextP>
          <TextP>Created At: {val.createdAt.getDate()}</TextP>
          <TextP>Wallet Address: {val.clientAddress}</TextP>
          <TextP>Topic: {val.topic}</TextP>
        </div>
      ))}
    </div>
  );
}
