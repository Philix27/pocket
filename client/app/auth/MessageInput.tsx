import { AppButton } from '@/comps';
import React, { useState } from 'react';

type IProps = {
  onSendMessage: (val: string) => void;
  replyingToMessage: string;
  isPWA: boolean;
};
export const MessageInput = ({ onSendMessage, replyingToMessage, isPWA }: IProps) => {
  const [newMessage, setNewMessage] = useState('');

  const handleInputChange = (event: any) => {
    if (event.key === 'Enter') {
      onSendMessage(newMessage);
      setNewMessage('');
    } else {
      setNewMessage(event.target.value);
    }
  };

  return (
    <div className="flex items-center pl-2 pr-2 flex-wrap pb-2">
      <input
        className="flex-grow p-2 border rounded-md text-lg outline-1 "
        type="text"
        value={newMessage}
        onChange={handleInputChange}
        placeholder="Type your message..."
      />
      <AppButton
        className={`px-3 py-2 
        border border-white cursor-pointer 
        rounded-lg text-center flex
        justify-center items-center`}
        onClick={() => {
          onSendMessage(newMessage);
          setNewMessage('');
        }}
      >
        {isPWA ? '📤' : 'Send'}
      </AppButton>
    </div>
  );
};
