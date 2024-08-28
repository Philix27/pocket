import React, { useState } from 'react';
import { MessageContainer } from './MessageContainer';
import { useCanMessage, useClient } from '@xmtp/react-sdk';
import { ListConversations } from './ListConversations';
import { BrowserProvider } from 'ethers';
import { NewConversation } from './NewConversation';
import { AppButton } from '@/comps';
import { AppStores } from '@/lib';

type IProps = {
  isConsent?: boolean;
  isContained?: boolean;
};
export const ConversationContainer = (props: IProps) => {
  const { client } = useClient();
  const [searchTerm, setSearchTerm] = useState('');
  const [peerAddress, setPeerAddress] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingResolve, setLoadingResolve] = useState(false);
  const { canMessage } = useCanMessage();
  const [createNew, setCreateNew] = useState(false);
  const [conversationFound, setConversationFound] = useState(false);
  const store = AppStores.useChat();

  const isValidEthereumAddress = (address: string) => {
    return /^0x[a-fA-F0-9]{40}$/.test(address);
  };

  const handleSearchChange = async (e: any) => {
    setCreateNew(false);
    setConversationFound(false);
    setSearchTerm(e.target.value);
    console.log('handleSearchChange', e.target.value);
    setMessage('Searching...');
    const addressInput = e.target.value;
    const isEthDomain = /\.eth$/.test(addressInput);
    let resolvedAddress = addressInput;
    if (isEthDomain) {
      setLoadingResolve(true);
      try {
        // const provider = new ethers.BrowserProvider();
        const provider = new BrowserProvider(window.ethereum);
        resolvedAddress = await provider.resolveName(resolvedAddress);
      } catch (error) {
        console.log(error);
        setMessage('Error resolving address');
        setCreateNew(false);
      } finally {
        setLoadingResolve(false);
      }
    }
    if (resolvedAddress && isValidEthereumAddress(resolvedAddress)) {
      processEthereumAddress(resolvedAddress);
      setSearchTerm(resolvedAddress); // <-- Add this line
    } else {
      setMessage('Invalid Ethereum address');
      setPeerAddress(null);
      setCreateNew(false);
      //setCanMessage(false);
    }
  };

  const processEthereumAddress = async (address: string) => {
    setPeerAddress(address);
    if (address === client!.address) {
      setMessage('No self messaging allowed');
      setCreateNew(false);
      // setCanMessage(false);
    } else {
      const canMessageStatus = await client?.canMessage(address);
      if (canMessageStatus) {
        setPeerAddress(address);
        // setCanMessage(true);
        setMessage('Address is on the network ✅');
        setCreateNew(true);
      } else {
        //  setCanMessage(false);
        setMessage('Address is not on the network ❌');
        setCreateNew(false);
      }
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', fontSize: 'small' }}>Loading...</div>;
  }
  return (
    <div className="h-full">
      {!store.selectedConversation && (
        <ul className="p-0 m-0 list-none overflow-y-scroll">
          <input
            type="text"
            placeholder="Enter a 0x wallet or ENS address"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-2 box-border outline-none text-sm border border-white"
          />
          {loadingResolve && searchTerm && <small>Resolving address...</small>}
          <ListConversations
            isConsent={props.isConsent!}
            searchTerm={searchTerm}
            selectConversation={props.setSelectedConversation}
            onConversationFound={(state) => {
              setConversationFound(state);
              if (state === true) setCreateNew(false);
            }}
          />
          {message && conversationFound !== true && <small>{message}</small>}
          {peerAddress && createNew && !conversationFound && (
            // {peerAddress && createNew && (await canMessage(peerAddress)) && !conversationFound && (
            <>
              <AppButton
                onClick={() => {
                  props.setSelectedConversation({ messages: [] });
                }}
              >
                Create new conversation
              </AppButton>
            </>
          )}
        </ul>
      )}
      {props.selectedConversation && (
        <>
          {props.selectedConversation.id ? (
            <MessageContainer isContained={props.isContained!} conversation={props.selectedConversation} />
          ) : (
            <NewConversation selectConversation={props.setSelectedConversation} peerAddress={peerAddress} />
          )}
        </>
      )}
    </div>
  );
};
