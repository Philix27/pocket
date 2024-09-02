import { AppStores, useWeb3Modal } from '@/lib';
import { Client, useClient, useConversations, useCanMessage, useStartConversation } from '@xmtp/react-sdk';
import { ethers } from 'ethers';
import { useEffect, useState } from 'react';
import { loadKeys, storeKeys } from '../chatBackUp/_store';

export const useXm = () => {
  const { client, initialize } = useClient();
  const { startConversation } = useStartConversation();
  const conversationFn = useConversations();
  const { canMessage } = useCanMessage();
  const store = AppStores.useChat();
  const { manageSigner } = useWeb3Modal();
  const [xClient, setXmtpClient] = useState<Client>();
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

  const getKey = async () => {
    const signer = await manageSigner();
    let keys = loadKeys(store.web3Wallet);

    if (!keys) {
      console.log('no key found');
      try {
        let currKey = await Client.getKeys(signer!, {
          env: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
          skipContactPublishing: true,
          persistConversations: false,
        });

        console.log('could not store keys');
        storeKeys(store.web3Wallet, currKey);
        return currKey;
      } catch (error) {
        console.log('client getKeys', error);
      }
    } else {
      console.log('has keys');
      return keys;
    }
  };

  const initXmtp = async () => {
    const keys = await getKey();

    if (keys) {
      try {
        const client = await initialize({
          keys: keys,
          options: {
            env: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
            persistConversations: true,
            skipContactPublishing: true,
            // privateKeyOverride: keys,
          },
          signer: store.signer,
        });
        console.log("xmtp client:", client)
        setXmtpClient(client);
        store.update({
          // keys: getState.keys.set(address!, keys),
          newKeys: keys,
          isConnectedToXmpt: true,
        });
      } catch (error) {
        console.log('could not initialize xmtp', error, 'Signer', store.signer);
      }
    }
  };

  return {
    conversationFn,
    initXmtp,
    client: xClient,
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
