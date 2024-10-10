import React from 'react';
import { AppTextInput, TextH } from '@/comps';
import { UseFormReturn } from 'react-hook-form';

import form, { styles } from '..';
import { IFormSchema } from '../../formSchema';
import { IAccordionContent } from './accordion';

export function invoiceItems(props: { form: UseFormReturn<IFormSchema> }): IAccordionContent {
  const { form } = props;
  return {
    value: 'invoiceItems',
    title: (
      <div className={'w-full bg-primary py-2'}>
        <TextH v="h5">Invoice Items</TextH>
      </div>
    ),
    content: (
      <>
        <div className={styles.inputGroup}>
          <AppTextInput control={form.control} name={'item1_name'} label="Item 1" place="Name" />

          <AppTextInput control={form.control} name={'item1_amount'} label="Item 1" place="Quantity" type="number" />
          <AppTextInput control={form.control} name={'item1_quantity'} label="Item 1" place="Amount" type="number" />
        </div>
        <div className={styles.inputGroup}>
          <AppTextInput control={form.control} name={'item2_name'} label="Item 2" place="Name" />

          <AppTextInput control={form.control} name={'item2_amount'} label="Item 2" place="Quantity" type="number" />
          <AppTextInput control={form.control} name={'item2_quantity'} label="Item 2" place="Amount" type="number" />
        </div>
        <div className={styles.inputGroup}>
          <AppTextInput control={form.control} name={'item3_name'} label="Item 3" place="Name" />

          <AppTextInput control={form.control} name={'item3_amount'} label="Item 3" place="Quantity" type="number" />
          <AppTextInput control={form.control} name={'item3_quantity'} label="Item 3" place="Amount" type="number" />
        </div>
        <div className={styles.inputGroup}>
          <AppTextInput control={form.control} name={'item4_name'} label="Item 4" place="Name" />

          <AppTextInput control={form.control} name={'item4_amount'} label="Item 4" place="Quantity" type="number" />
          <AppTextInput control={form.control} name={'item4_quantity'} label="Item 4" place="Amount" type="number" />
        </div>
      </>
    ),
  };
}
