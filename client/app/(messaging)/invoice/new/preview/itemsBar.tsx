import React from 'react';
import * as T from '@/comps/table';

import { TextH } from '@/comps';

import { invoices } from './data';

export function ItemsBar(props: { data: { name: string; quantity: number; amount: number }[] }) {
  return (
    <div>
      <div className="flex flex-col items-center my-3">
        <TextH v="h5">Items List</TextH>
      </div>
      <T.Table>
        <T.TableCaption>A list of your recent invoices.</T.TableCaption>
        <T.TableHeader>
          <T.TableRow>
            <T.TableHead className="w-[100px]">Name</T.TableHead>
            <T.TableHead>Quantity</T.TableHead>
            <T.TableHead className="text-right">Amount</T.TableHead>
          </T.TableRow>
        </T.TableHeader>

        <T.TableBody>
          {props.data.map((val, i) => (
            <T.TableRow key={i} className={`hover:bg-secondary`}>
              <T.TableCell className="text-center">{val.name}</T.TableCell>
              <T.TableCell className="text-center">{val.quantity}</T.TableCell>
              <T.TableCell className="text-right">{val.amount}</T.TableCell>
            </T.TableRow>
          ))}
        </T.TableBody>
      </T.Table>
    </div>
  );
}
