import { TextH } from '@/comps';
import { GRADIENT } from '../const';

export function ContentBlock() {
  return (
    <div className={'flex items-center justify-center w-full h-[60vh] my-10'}>
      <div className="w-[80%]  h-full flex items-center rounded-xl  gap-x-10">
        <div
          className={`w-[500px] h-full
          flex items-center justify-center rounded-2xl shadow-md p-4
             `}
        >
          <img src="btc-red.jpg" className="w-fit object-cover h-full rounded-lg" />
        </div>

        <div
          className={`w-full h-full flex items-center justify-center rounded-2xl p-10 shadow-md ${GRADIENT}`}
        >
          <div className="">
            <h1>A whole world of crypto, in one simple account.</h1>
            <TextH>Best selling</TextH>
          </div>
        </div>
      </div>
    </div>
  );
}
