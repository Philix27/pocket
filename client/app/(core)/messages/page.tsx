'use client';

import { TextP } from '@/comps';

export default function MessageChat() {
  return (
    <div className={`mt-4 px-4`}>
      <div className={`w-full flex items-center justify-between`}>
        <div className={`rounded bg-gray-800 px-2 pb-2 max-w-[70%] w-fit`}>
          <div className={`flex items-center justify-center`}>
            <TextP className={``}>How are you doing and your family, hope everyone is fine? what about the food</TextP>
          </div>
          <div className={`flex justify-end items-end`}>
            <TextP>12 pm</TextP>
          </div>
        </div>
        <div />
      </div>
      <div className={`w-full flex  justify-between`}>
        <div />
        <div className={`max-w-[70%] w-fit rounded bg-lime-500 px-2 pb-2 mt-4`}>
          <div className={`flex items-center justify-center`}>
            <TextP className={``}>hope everyone is fine? what about the food</TextP>
          </div>
          <div className={`flex justify-end items-end`}>
            <TextP>12:05 pm</TextP>
          </div>
        </div>
      </div>
    </div>
  );
}
