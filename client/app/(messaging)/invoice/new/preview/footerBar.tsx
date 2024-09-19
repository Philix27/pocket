import React from 'react';
import { TextP } from '@/comps';

export function FooterBar(props: { thankYou?: string; msg?: string }) {
  return (
    <div
      className={`
      flex flex-col items-center 
      mt-3 py-3 border-t-2 
      border-secondary
    `}
    >
      <TextP v="p6">{props.thankYou ? props.thankYou : 'Thank you'}</TextP>
      <TextP v="p6">{props.msg ? props.msg : 'We hope to here from you as soon as possible'}</TextP>
    </div>
  );
}
