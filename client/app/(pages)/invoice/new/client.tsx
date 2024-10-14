'use client';

import React, { Suspense, useState } from 'react';
import { trpc } from '@/lib';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { AppButton, Navbar, Tabs, TextH } from '@/comps';

import FormComps from './form';
import { IFormSchema, defaultValues, formSchema } from './formSchema';
import PreviewComp from './preview';

export default function NewInvoiceClient() {
  const [isFormTab, setActiveTab] = useState<boolean>(true);
  const [showInvId, setInvId] = useState<string>('');
  const t = trpc.invoice.create.useMutation();

  // ... // 1. Define your form.
  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  // 2. Define a submit handler.
  async function onSubmit() {
    console.log('Submit clicked');

    try {
      // const invoiceId = await t.mutateAsync({
      //   ownerWalletAddress: '',
      //   toBusinessName: form.getValues('toBusinessName'),
      //   toEmail: form.getValues('toEmail'),
      //   fromBusinessName: form.getValues('fromBusinessName'),
      //   fromPhone: form.getValues('fromPhone'),
      //   fromEmail: form.getValues('fromEmail'),
      //   fromDate: form.getValues('fromDate'),
      //   fromAddress: form.getValues('fromAddress'),
      //   footerNote: form.getValues('footerNote'),
      //   thanksMsg: form.getValues('thanksMsg'),
      //   total: 2,
      //   subtotal: 0,
      // items: [
      //   {
      //     name: form.getValues("item1_name"),
      //     amount: form.getValues("item1_amount"),
      //     quantity: form.getValues("item1_quantity"),
      //   },
      //   {
      //     name: form.getValues("item2_name"),
      //     amount: form.getValues("item2_amount"),
      //     quantity: form.getValues("item2_quantity"),
      //   },
      // ],
      // });
      // setInvId(invoiceId);
      toast.success('Invoice created');
    } catch (error) {
      toast.error('Check your form and fill every');
    }
  }

  return (
    <div className={'w-full'}>
      <Navbar title="Add invoice" isBack />
      <Tabs
        data={[
          { title: 'Form', onClick: () => setActiveTab(true), isActive: isFormTab },
          { title: 'Preview', onClick: () => setActiveTab(false), isActive: !isFormTab },
        ]}
      />

      <div className={'w-full'}>
        {isFormTab ? (
          <div className="flex flex-col items-center">
            <FormComps form={form} onSubmit={onSubmit} />
            <AppButton
              type="submit"
              onClick={() => {
                onSubmit();
              }}
            >
              Submit
            </AppButton>

            {showInvId && (
              <div className="mt-2 px-4 py-2 bg-primary rounded-lg">
                <TextH v="h5">Invoice ID: {showInvId}</TextH>
              </div>
            )}
          </div>
        ) : (
          <PreviewComp
            fromAddress={form.getValues('fromAddress')}
            fromEmail={form.getValues('fromEmail')}
            fromPhone={form.getValues('fromPhone')}
            toAddress={form.getValues('toAddress') || ''}
            toPhone={form.getValues('toPhone') || ''}
            toEmail={form.getValues('toEmail')}
            toWebsite={form.getValues('toWebsite') || ''}
            toBizName={form.getValues('toBusinessName') || ''}
            fromDate={form.getValues('fromDate')}
            bizName={form.getValues('fromBusinessName')}
            item1Name={form.getValues('item1_name')}
            item1Quantity={form.getValues('item1_quantity')}
            item1Amount={form.getValues('item1_amount')}
            item2Name={form.getValues('item2_name')}
            item2Quantity={form.getValues('item2_quantity')}
            item2Amount={form.getValues('item2_amount')}
            total={(+form.getValues('item1_amount') + +form.getValues('item2_amount')).toString()}
            subtotal={'$'.concat((+form.getValues('item1_amount') + +form.getValues('item2_amount')).toString())}
            tax={'0%'}
            discount={'0'}
          />
        )}
      </div>
    </div>
  );
}
