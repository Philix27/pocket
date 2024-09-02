'use client';

import { AppButton, AppTextInput, TextP } from '@/comps';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AppContract, transferCusdTokens } from '@/contract/const';
import { useMinipay } from '@/contract';
import { useWriteContract } from 'wagmi';

export const formSchema = z.object({
  purpose: z.string().max(30, { message: 'Maximum of 25 characters' }),
  email: z.string().max(30, { message: 'Maximum of 25 characters' }).optional(),
  card_owner: z.string().optional(),
  phone: z
    .string()
    .max(11, { message: 'Maximum of 11 numbers' })
    .min(11, { message: 'Minimum of 11 numbers' })
    .optional(),
});

export const defaultValues: z.infer<typeof formSchema> = {
  phone: '',
  purpose: '',
  card_owner: '',
};

export type IFormSchema = z.infer<typeof formSchema>;

type ISendTo = 'PHONE' | 'EMAIL';
type IAmount = 100 | 200 | 300 | 400 | 500 | 1000;

export default function CreateGiftCard() {
  const [sendTo, setSendTo] = useState<ISendTo>('PHONE');
  const [amount, setAmount] = useState<IAmount>(100);
  const { writeContract } = useWriteContract();
  const { walletAddress } = useMinipay();

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  async function onSubmit(value: IFormSchema) {
    console.log('Called mutate', parseInt(amount as unknown as string) / 1500);
    const trxnHash = await transferCusdTokens({
      userAddress: walletAddress!,
      amount: parseInt(amount as unknown as string),
    });
    // console.log("Hashed", trxnHash);
    writeContract({
      abi: AppContract.abi,
      address: AppContract.address as `0x${string}`,
      functionName: 'createCard',
      args: [value.phone, parseInt(amount as unknown as string)],
    });
    // mutation.mutate({
    //   purpose: value.purpose,
    //   phone: value.phone,
    //   email: value.email,
    //   card_owner: value.card_owner,
    // });
  }

  return (
    <div className="w-full mt-4">
      <TextP className="mb-2">Send to:</TextP>
      <select
        className="w-full p-2 bg-secondary outline-secondary"
        onChange={(e) => {
          setSendTo(e.target.value as ISendTo);
        }}
      >
        <option value="PHONE">Phone</option>
        <option value="EMAIL">Email</option>
      </select>
      <div>
        {sendTo === 'EMAIL' && (
          <AppTextInput
            errorMessage={form.formState.errors.email?.message}
            control={form.control.register('email')}
            name="email"
            place="Enter email"
            className="mt-2"
            label="Email"
          />
        )}
        {sendTo === 'PHONE' && (
          <AppTextInput
            errorMessage={form.formState.errors.phone?.message}
            control={form.control.register('phone')}
            name="phone"
            place="Enter phone number"
            className="mt-2"
            label="Phone"
          />
        )}

        <AppTextInput
          errorMessage={form.formState.errors.card_owner?.message}
          control={form.control.register('card_owner')}
          name={'card_owner'}
          place="Name to show on card"
          className="mt-2"
          label="Card Owner"
        />
        <AppTextInput
          errorMessage={form.formState.errors.purpose?.message}
          control={form.control.register('purpose')}
          name={'purpose'}
          place="Purpose"
          className="mt-2"
          label="Purpose"
        />
        <TextP className="mb-2">Amount:</TextP>
        <select
          className="w-full p-2 bg-secondary outline-secondary"
          onChange={(e) => {
            setAmount(e.target.value as unknown as IAmount);
          }}
        >
          <option value={1}>$1</option>
          <option value={2}>$2</option>
          <option value={3}>$3</option>
          <option value={4}>$4</option>
          <option value={5}>$5</option>
        </select>
      </div>

      <AppButton
        className="mt-5 mb-2"
        onClick={() => {
          form.handleSubmit(onSubmit)();
        }}
      >
        Create
      </AppButton>
    </div>
  );
}
