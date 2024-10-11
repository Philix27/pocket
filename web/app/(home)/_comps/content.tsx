import { TextH } from '@/comps';

export function ContentBlock() {
  return (
    <div className={'flex items-center justify-center w-full h-[60vh]'}>
          <div className="w-[80%] h-full flex items-center rounded-xl  gap-x-5">
              
        <div className="w-[500px] h-full flex items-center justify-center rounded-lg shadow-lg">
          <img src="btc-red.jpg" className="w-fit object-cover h-full rounded-lg" />
        </div>

        <div className="w-full h-full flex items-center justify-center  rounded-lg bg-green-200">
          <div className="">
            <h1>A whole world of crypto, in one simple account.</h1>
            <TextH>Best selling</TextH>
          </div>
        </div>
      </div>
    </div>
  );
}
