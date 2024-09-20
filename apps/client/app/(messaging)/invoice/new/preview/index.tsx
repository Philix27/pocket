import React from 'react';

import { AddressBar } from './addressBar';
import { FooterBar } from './footerBar';
import { ItemsBar } from './itemsBar';
import { TopBar } from './topBar';
import { TotalBar } from './totalBar';

export default function InvoicePreview(props: {
  fromAddress: string;
  fromPhone: string;
  fromEmail: string;
  toAddress: string;
  toPhone: string;
  toEmail: string;
  toWebsite: string;
  toBizName: string;
  fromDate: string;
  bizName: string;
  total: string;
  subtotal: string;
  tax: string;
  discount: string;
  item1Name: string;
  item1Quantity: number;
  item1Amount: number;
  item2Name: string;
  item2Quantity: number;
  item2Amount: number;
}) {
  return (
    <div className={'flex flex-col items-center justify-center my-5 w-full'}>
      <div
        className={`
          w-[90%]
          md:w-[60%] 
          bg-card border-[0.1px]
        `}
      >
        <TopBar bizName={props.bizName} invoiceDate={props.fromDate} />
        <AddressBar
          fromAddress={props.fromAddress}
          fromEmail={props.fromEmail}
          fromPhone={props.fromPhone}
          toAddress={props.toAddress}
          toPhone={props.toPhone}
          toEmail={props.toEmail}
          toWebsite={props.toWebsite}
          toBizName={props.toBizName}
        />
        <ItemsBar
          data={[
            {
              name: props.item1Name,
              quantity: props.item1Quantity,
              amount: props.item1Amount,
            },
            {
              name: props.item2Name,
              quantity: props.item2Quantity,
              amount: props.item2Amount,
            },
          ]}
        />
        <TotalBar total={props.total} subtotal={props.subtotal} tax={props.tax} discount={props.discount} />
        <FooterBar />
      </div>
    </div>
  );
}
