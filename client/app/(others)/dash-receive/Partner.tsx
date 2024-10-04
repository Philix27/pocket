import { AppButton, TextP } from '@/comps';
import React from 'react';

export function Partner() {
  return (
    <div className="px-5 h-full flex flex-col items-center justify-center w-full">
      <TextP>Select Token</TextP>
      <TextP>Show price equivalent in naira</TextP>
      <AppButton>Buy now</AppButton>
      <TextP>Show price equivalent in naira</TextP>
      <TextP>Paystack or Monify payment gateway pops-up </TextP>
      <TextP>Confirm user payment</TextP>
      <TextP>Your account will be credited in less than 5 minutes</TextP>
    </div>
  );
}
