'use client';

import React from 'react';
import { GRADIENT } from '../const';
import { TextH } from '@/comps';

export function HeroSection(props: { title: string; subtitle: string; img: string; imgFirst?: boolean }) {
  return (
    <section
      className={
        `w-full min-h-[calc(100vh-50px)] 
      flex flex-col items-center
      justify-center 
      ` + GRADIENT
      }
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
      <TextH className="text-[80px] font-extrabold">{props.title}</TextH>
      <div className="mb-10" />
      <p className={'text-xl font-extralight'}>{props.subtitle}</p>
    </div>
  );
}
