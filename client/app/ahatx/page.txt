'use client';

import React, { useEffect, useState } from 'react';
import { useAccount, useDisconnect } from 'wagmi';
import * as XmtpHandler from './xmtpClient';
import { AppStores } from '@/lib';
import { Conversation, Stream } from '@xmtp/xmtp-js';

export default function ChatPage() {
  const store = AppStores.useChat();

  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    initXmtpWithKeys();
    // if (store.isOnNetwork && isConnected) {
    // }
  }, []);

  async function initXmtpWithKeys() {
    try {
      // XmtpHandler.xclient();
    } catch (e) {
      console.log('4XMTP Error:', e);
    }
  }

  return (
    <div>
      ChatPage
      <Message toAddress={address!} />
      <button onClick={initXmtpWithKeys}>Connect to app</button>
    </div>
  );
}

type IConversation = {
  createdAt: string | number | Date;
  peerAddress: string;
  consentState: string;
  topic: string;
};

function Message(props: { toAddress: `0x${string}` }) {
  const [allowedConversations, setAllowedConversations] = useState<IConversation[]>([]);
  const [requestConversations, setRequestConversations] = useState<IConversation[]>([]);
  const [conversations, setConversations] = useState<IConversation[]>([]);
  const [conversationFound, setConversationFound] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isConsent, setIsConsent] = useState('');
  const [isLoading, setLoading] = useState<boolean>();
  const [lastMessages, setLastMessages] = useState([]); // Parallel array for last messages

  useEffect(() => {
    let isMounted = true;
    let stream: Stream<Conversation<string | undefined>, string | undefined>;

    const fetchAndStreamConversations = async () => {
      setLoading(true);
      if (isConsent) {
        //Refresh consent
        console.log('Refreshing consent list');
        await (await XmtpHandler.xclient()).contacts.refreshConsentList();
      }

      const allConversations = await XmtpHandler.getAllConversations();
      // const allConversations = await (await XmtpHandler.xclient()).conversations.list();
      // Assuming you have a method to fetch the last message for a conversation
      console.log('4XMTP: allConversations', allConversations);
      const sortedConversations = allConversations.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      if (isMounted) {
        setConversations(sortedConversations);
      }
      setLoading(false);

      stream = await (await XmtpHandler.xclient()).conversations.stream();
      for await (const conversation of stream) {
        console.log('New conversation:', conversation.consentState);
        //Need to fix this manually
        if (conversation.clientAddress === (await XmtpHandler.xclient()).address)
          await (await XmtpHandler.xclient()).contacts.allow([conversation.peerAddress]);
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

  useEffect(() => {
    const refreshAndFilterConversations = async () => {
      const filtered = conversations.filter(
        (conversation) =>
          conversation?.peerAddress.toLowerCase().includes(searchTerm.toLowerCase()) &&
          conversation?.peerAddress !== props.toAddress
      );

      if (filtered.length > 0) setConversationFound(true);
      else setConversationFound(false);

      if (isConsent) {
        const allowedConversations = filtered.filter((conversation) => conversation.consentState === 'allowed');

        const requestConversations = filtered.filter((conversation) => conversation.consentState === 'unknown');

        setAllowedConversations(allowedConversations);
        setRequestConversations(requestConversations);

        console.log('allowed', allowedConversations.length, 'requests', requestConversations.length);
      }
    };

    refreshAndFilterConversations();
    return () => {};
  }, []);

  // const query = useQuery({
  //   queryKey: ['getMessages'],
  //   queryFn: async () => {
  //     const result = await XmtpHandler.getAllConversations();
  //     console.log('4XMTP - getAllConversations:', result);
  //     return result;
  //   },
  // });

  const renderConversations = (conversations: IConversation[]) => {
    if (!searchTerm && conversations.length === 0) {
      return <small>No conversations found</small>;
    }

    return conversations.map((conversation, index) => {
      // Find the last message for this conversation by ID
      // const lastMessage = lastMessages.find((msg) => msg.topic === conversation.topic)?.content || '...';

      return (
        <div>
          {conversation.peerAddress}
          <span>
            {conversation.peerAddress.substring(0, 7) +
              '...' +
              conversation.peerAddress.substring(conversation.peerAddress.length - 5)}
          </span>
          {/* <span>{lastMessage}</span> */}
        </div>
      );
    });
  };

  // if (query.isLoading) return <div>Loading...</div>;
  // if (query.error) return <div>{query.error.toString()}</div>;
  return (
    <div>
      <div>
        {renderConversations(allowedConversations)}
        {renderConversations(requestConversations)}
        {/* {query.data?.map((val, i) => (
          <div key={i}>
            <p>Hey man </p>
          </div>
        ))} */}
      </div>
    </div>
  );
}
