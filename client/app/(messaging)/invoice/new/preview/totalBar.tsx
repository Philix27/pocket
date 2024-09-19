import React from 'react';
import { TextP, TextH } from '@/comps';

export function TotalBar(props: { total: string; subtotal: string; tax: string; discount: string }) {
  return (
    <div className={`flex flex-col md:flex-row justify-between items-center px-4 gap-y-2`}>
      <div>
        <TextP>Subtotal: {props.subtotal}</TextP>
        <TextP>Tax: {props.tax}</TextP>
        <TextP>Discount: {props.discount}</TextP>
      </div>
      <TextH v="h5">Total Due: ${props.total}</TextH>
    </div>
  );
}
