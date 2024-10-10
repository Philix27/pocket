'use client';
import React from 'react';
import { AppTextInput, TextH } from '@/comps';
import { UseFormReturn } from 'react-hook-form';

import form, { styles } from '..';
import { IFormSchema } from '../../formSchema';
import { IAccordionContent } from './accordion';

export function personalInfo(props: { form: UseFormReturn<IFormSchema> }): IAccordionContent {
  const { form } = props;
  return {
    value: 'item1',
    title: (
      <div className={'w-full bg-card py-2'}>
        <TextH v="h5">Personal Info</TextH>
      </div>
    ),
    content: (
      <>
        <AppTextInput control={form.control} name="fromBusinessName" label="Your name" />
        <div className={styles.inputGroup}>
          <AppTextInput control={form.control} name="fromEmail" label="Email" place="Enter email" />
          <AppTextInput control={form.control} name="fromDate" label="Date" />
        </div>
        <div className={styles.inputGroup}>
          <AppTextInput control={form.control} name="fromAddress" label="Address" />
          <AppTextInput control={form.control} name="fromPhone" label="Phone number" />
        </div>
      </>
    ),
  };
}
