import { Client, Stream } from '@xmtp/xmtp-js';
import { useEffect } from 'react';
import { AppStores } from '@/lib';
import { loadKeys, storeKeys } from './store';

export const xclient = async () => {
  const getState = AppStores.useChat.getState();
  const setState = AppStores.useChat.setState;

  const address = getState.web3Wallet;
  const signer = getState.signer;
  // const signer = await ContractUtils.geSigner(address!);

  let currKey = loadKeys(address) as Uint8Array;
  // const currKey = getState.keys.get(address!);
  // let keys;

  // if (!getState.keys.has(address!)) {
  if (!currKey) {
    // let keys = await Client.getKeys(signer, {
    currKey = await Client.getKeys(signer, {
      env: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
      skipContactPublishing: true,
      persistConversations: false,
    });
    storeKeys(address, currKey);
    setState({
      // keys: getState.keys.set(address!, keys),
      newKeys: currKey,
    });
    // storeKeys(address, keys);
  }

  const xmtpClient = await Client.create(signer, {
    env: process.env.NODE_ENV === 'production' ? 'production' : 'dev',
    persistConversations: true,
    skipContactPublishing: true,
    privateKeyOverride: currKey,
  });

  setState({ isOnNetwork: true });

  // setState({
  //   xmtpClient: xmtpClient!,
  // });

  return xmtpClient;
};

async function getMsgStream(msgWith: string) {
  const messages: string[] = [];
  const xmtp = await xclient();
  const conversation = await xmtp.conversations.newConversation(msgWith);

  for await (const message of await conversation.streamMessages()) {
    if (message.senderAddress === xmtp.address) {
      // This message was sent from me
      continue;
    }
    messages.push(message.content!);
    // console.log(`New message from ${message.senderAddress}: ${message.content}`);
  }

  return messages;
}

async function stopLoop() {
  const xmtp = await xclient();
  //   const stream = new Stream(xmtp, ["*"], {});
  //   stream.return();
}

export const useMsgStream = async (msgWith: string) => {
  useEffect(() => {
    getMsgStream(msgWith);
    return () => {
      stopLoop();
    };
  }, []);
};

export async function getAllConversations() {
  const xmtp = await xclient();

  const allConversations = await xmtp.conversations.list();
  return allConversations;
}

export async function sendConversations(toAddress: string, msg: string) {
  const xmtp = await xclient();
  try {
    const conversation = await xmtp.conversations.newConversation(toAddress);
    await conversation.send(msg);
    return true;
  } catch (error) {
    return false;
  }
}

export async function getChatMessages(toAddress: string) {
  const xmtp = await xclient();

  const conversation = await xmtp.conversations.newConversation(toAddress);
  const messages = await conversation.messages();
  return messages;
}

export async function sendBroadcastMsg(msg: string, addresses: string[]) {
  const xmtp = await xclient();

  const broadcasts_canMessage = await Client.canMessage(addresses);

  for (let i = 0; i < addresses.length; i++) {
    const wallet = addresses[i];

    if (broadcasts_canMessage[i]) {
      const conversation = await xmtp.conversations.newConversation(wallet);
      const sent = await conversation.send('gm');
    }
  }
}

export const getRelativeTimeLabel = (dateString: string) => {
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
