'use client';

import { TextP } from '@/comps';
import { messageData } from './data';

export default function MessageChat() {
  return (
    <div className={`mt-4 px-4`}>
      {messageData.map((val, index) => (
        <>
          <div className={`w-full flex items-center justify-between`} key={index}>
            <div className={` rounded bg-gray-800 px-2 pb-2 max-w-[70%] w-fit`}>
              <div className={`flex items-center justify-center`}>
                <TextP className={``}>{val.messageSenter}</TextP>
              </div>
              <div className={`flex justify-end items-end`}>
                <TextP>{val.messageTime}</TextP>
              </div>
            </div>

            <div />
          </div>
          <div className={`w-full flex  justify-between`}>
            <div />
            <div className={`max-w-[70%] w-fit rounded bg-lime-500 px-2 pb-2 mt-4 mb-4`}>
              <div className={`flex items-center justify-center`}>
                <TextP className={``}>{val.messageReciever}</TextP>
              </div>
              <div className={`flex justify-end items-end`}>
                <TextP>{val.messageTime}</TextP>
              </div>
            </div>
          </div>
        </>
      ))}
      
    </div>
  );
}
