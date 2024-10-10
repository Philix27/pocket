'use client';

import React from 'react';
import { TextH, TextP } from '@/comps';

export function JumbutronSection(props: { title: string; subtitle: string }) {
  return (
    <section className="container w-full bg-slate-200">
      <div className="flex items-center justify-center ">
        <div
          className={`
    flex flex-col items-center 
    gap-4 justify-center 
    max-w-[85vw] md:max-w-[50%] 
    md:my-8 my-8 text-center
    `}
        >
          <TextH v={'h2'} className="leading-loose text-xl text-secondary">
            {props.title}
          </TextH>
          <TextP v={'p5'} className="leading-loose">
            {props.subtitle}
          </TextP>
        </div>
      </div>
    </section>
  );
}
