'use client';

import React from 'react';

export function HeroSection(props: { title: string; subtitle: string; img: string; imgFirst?: boolean }) {
  return (
    <section
      className={`container w-full min-h-[80vh] 
      flex flex-col items-center
      justify-center
       from-orange-600 via-pink-500 to-red-500 bg-gradient-to-tr`}
    >
      <div
        className={`
        w-full 
        grid grid-cols-1
        md:grid-cols-2
        md:px-[5%] 
    `}
      >
        {props.imgFirst ? (
          <>
            <div className={'flex items-center justify-center'}>
              <img src={props.img} alt="" className={'h-[500px] w-[200px]'} />
            </div>
            <TextBlock {...props} />
          </>
        ) : (
          <>
            <TextBlock {...props} />
            <div className={'flex items-center justify-center'}>
              <img src={props.img} alt="" className={'h-[400px] w-[200px]'} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
function TextBlock(props: { title: string; subtitle: string; img: string; imgFirst?: boolean }) {
  return (
    <div className="h-full flex flex-col items-start justify-center md:px-4 py-8 md:py-4">
      <p className="text-[80px] font-extrabold text-primary-foreground">{props.title}</p>
      <div className="mb-10" />
      <p className={'text-secondary-foreground text-xl font-extralight'}>{props.subtitle}</p>
    </div>
  );
}
