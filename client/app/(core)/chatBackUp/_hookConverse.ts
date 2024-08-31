import { AppStores } from '@/lib';
import { Conversation, useClient } from '@xmtp/react-sdk';
import { useEffect, useState } from 'react';

export const useConverse = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<Conversation<any>[]>([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const { client } = useClient();
  const store = AppStores.useChat();
  let isMounted = true;
  let stream: any;

  useEffect(() => {
    fetchAndStreamConversations();

    return () => {
      isMounted = false;
      if (stream) {
        stream.return();
      }
    };
  }, []);

  const fetchAndStreamConversations = async () => {
    setLoading(true);
    if (store.isConsent) {
      //Refresh consent
      console.log('Refreshing consent list');
      await store.xmtpClient!.contacts.refreshConsentList();
    }

    // const allConversations = await client!.conversations.list();
    const allConversations = await store.xmtpClient!.conversations.list();
    // Assuming you have a method to fetch the last message for a conversation

    const sortedConversations = allConversations.sort(
      (a: { createdAt: string | number | Date }, b: { createdAt: string | number | Date }) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    if (isMounted) {
      setConversations(sortedConversations);
    }

    setLoading(false);

    stream = await store.xmtpClient!.conversations.stream();

    for await (const conversation of stream) {
      console.log('New conversation:', conversation.consentState);
      //Need to fix this manually
      if (conversation.client?.address === store.xmtpClient!.address)
        await store.xmtpClient!.contacts.allow([conversation.peerAddress]);

      if (isMounted) {
        setConversations((prevConversations) => {
          const newConversations = [...prevConversations, conversation];
          return newConversations.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        });
      }

      //break;
    }
  };

  return {
    conversations,
    isLoading: loading,
  };
};
