import React from 'react';
import { TextP, TextH } from '@/comps';

export function AddressBar(props: {
  fromAddress: string;
  fromEmail: string;
  fromPhone: string;
  toBizName: string;
  toAddress: string;
  toEmail: string;
  toPhone: string;
  toWebsite: string;
}) {
  return (
    <div className={'p-5 flex justify-between'}>
      <div>
        <TextP v="p6">From:</TextP>
        <TextP>{props.fromAddress}</TextP>
        <TextP>{props.fromEmail}</TextP>
        <TextP>{props.fromPhone}</TextP>
      </div>
      <div>
        <TextP>To:</TextP>
        <TextH v="h5" className="">
          {props.toBizName}
        </TextH>
        <TextP>{props.toAddress}</TextP>
        <TextP>{props.toEmail}</TextP>
        <TextP>{props.toPhone}</TextP>
        <TextP>{props.toWebsite}</TextP>
      </div>
    </div>
  );
}
