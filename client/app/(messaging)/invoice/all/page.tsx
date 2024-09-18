'use client';

import React from 'react';

import { TextH } from '@/comps';
import { Table, TableCaption, TableRow, TableBody, TableHeader, TableHead, TableCell } from '@/comps';

import { invoices } from './data';

export default function Page() {
  return (
    <div className={'bg-primary w-full h-full py-4 px-4 flex items-center justify-center'}>
      <div className={'w-[80%] h-full'}>
        <TextH v="h3"> All invoices</TextH>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {invoices.map((val, i) => (
              <TableRow key={i} className={`hover:bg-secondary`}>
                <TableCell className="font-medium">{val.invoice}</TableCell>
                <TableCell className="text-center">{val.paymentStatus}</TableCell>
                <TableCell className="text-center">{val.paymentMethod}</TableCell>
                <TableCell className="text-right">{val.totalAmount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
