'use client';

import { chatData } from './data';

export default function ChatPage() {
  return (
    <div className="mt-10">
      {chatData.map((val, i) => (
        <div key={i} className={`flex item-center justify-between  px-4`}>
          <div className={`border-2 border-white rounded-[35px] bg-white h-[70px] w-[70px]`}>
            <img src={val.img} />
          </div>

          <div className={``}>
            <h1>{val.name}</h1>
            <h4>{val.lastMsg}</h4>
          </div>

          <div>
            <p>{val.lastTime}</p>
            <div
              className={`border-2 border-red-600 rounded-[15px] bg-red-600 h-[30px] w-[30px] flex justify-center items-center `}
            >
              <h4 className={``}>{val.unreadMsgCount}</h4>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
