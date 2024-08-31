import { AppStores } from '@/lib';
import {
  Client,
  useStreamMessages,
  useClient,
  useMessages,
  useConversations,
  useCanMessage,
  useStartConversation,
} from '@xmtp/react-sdk';
import { ethers } from 'ethers';
import { useCallback, useEffect, useState } from 'react';

export const useXm = () => {
  const { client, initialize } = useClient();
  const { startConversation } = useStartConversation();
  const conversationFn = useConversations();
  const { canMessage } = useCanMessage();
  const store = AppStores.useChat();
  //Initialize
  {
    // !isConnected && <button onClick={initXmtp}>Connect to XMTP</button>;
  }

  useEffect(() => {
    if (!client?.close) {
      initXmtp();
    }

    return () => {};
  }, []);

  const loadSavedWallet = () => {
    if (store.web3Wallet) {
      const privateKey = store.etherKey;

      if (privateKey) {
        const wallet = new ethers.Wallet(privateKey);
        store.update({ etherWallet: wallet });
        return wallet;
      }
    }
    return null;
  };

  const getKey = async () => {
    if (!store.newKeys) {
      try {
        // let gop: ethers.Wallet = {};

        // let currKey = await Client.getKeys(store.signer, {
        let currKey = await Client.getKeys(store.signer, {
          env: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
          skipContactPublishing: true,
          persistConversations: false,
        });

        return currKey;
      } catch (error) {
        console.log('client getKeys', error);
      }
    }
  };

  const initXmtp = async () => {
    const keys = await getKey();
    if (keys) {
      try {
        await initialize({
          keys: keys,
          options: {
            env: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
            persistConversations: true,
            skipContactPublishing: true,
            // privateKeyOverride: keys,
          },
          signer: store.signer,
        });
        store.update({
          // keys: getState.keys.set(address!, keys),
          newKeys: keys,
          isConnectedToXmpt: true,
        });
      } catch (error) {
        console.log('could not initialize xmtp', error);
      }
    }
  };

  // Start a conversation with XMTP
  const startCon = async () => {
    const add = '0x3F11b27F323b62B159D2642964fa27C46C841897';
    if (await canMessage(add)) {
      const conversation = await startConversation(add, 'hi');
    }
  };

  return {
    conversationFn,
    initXmtp,
  };
};

// const useStreamer = () => {
//   const { conversations, isLoading } = useConversations(); // for conversations
//   //Stream messages
//   const [history, setHistory] = useState(null);
//   const { messages } = useMessages(conversation); // inside a single conversation component
//   // Stream messages
//   const onMessage = useCallback((message) => {
//     setHistory((prevMessages) => {
//       const msgsnew = [...prevMessages, message];
//       return msgsnew;
//     });
//   }, []);
//   useStreamMessages(conversation, { onMessage });
// };
