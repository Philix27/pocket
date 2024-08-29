import React from 'react';
import { CachedMessage, ContentTypeMetadata, useClient } from '@xmtp/react-sdk';
import { cn } from '@/lib';
import { TextP } from '@/comps';

export default function MessageItem({
  message,
  senderAddress,
}: {
  message: CachedMessage<any, ContentTypeMetadata>;
  senderAddress: string;
}) {
  const { client } = useClient();

  const renderMessage = (msg: any) => {
    const contentType = ContentTypeId.fromString(msg.contentType);
    const codec = client!.codecFor(contentType);
    console.log('codec', codec);
    let content = msg.content;

    if (!codec) {
      /*Not supported content type*/
      if (msg?.contentFallback !== undefined) content = msg?.contentFallback;
      else return;
    }

    return (
      <div
        className={`bg-blue-200 
        px-3 py-2 self-start text-center 
        inline-block m-2 rounded-md
        max-w-[80%] break-words cursor-pointer list-none`}
      >
        <TextP className="break-words p-0 ">{content}</TextP>
        {renderFooter(msg.sentAt)}
      </div>
    );
  };

  const isSender = senderAddress === client?.address;

  return (
    <li
      className={cn(isSender ? 'self-start text-left list-none w-full' : 'self-end text-left list-none w-full')}
      // key={message.id}
    >
      {renderMessage(message)}
    </li>
  );
}

const renderFooter = (timestamp: string) => {
  return (
    <div className="flex items-center justify-end">
      <span className="text-md text-slate-400">
        {`${new Date(timestamp).getHours()}:${String(new Date(timestamp).getMinutes()).padStart(2, '0')}`}
      </span>
    </div>
  );
};
