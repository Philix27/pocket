import { AppButton, AppTextInput } from '@/comps';
import { trpc } from '@/lib';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

export const schema = z.object({
  amount: z.number(),
  purpose: z
    .string()
    .min(3, { message: 'must contain 3 to 10 words ' })
    .max(10, { message: 'must contain 3 to 10 words ' }),

  shouldLock: z.boolean().refine((val) => val === true, {
    message: 'You must lock your funds',
  }),

  duration: z.enum(['1week', '2weeks', '3weeks', '4weeks', '5weeks'], {
    errorMap: () => ({ message: 'Please select a valid duration' }),
  }),
});

export type FormData = z.infer<typeof schema>;

export default function VerifyInfo() {
  const api = trpc.user.addNamesDob.useMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    api
      .mutateAsync({
        walletAddress: '',
        firstName: '',
        lastName: '',
        dob: '',
        residentialAddress1: '',
        residentialAddress2: '',
      })
      .then((res) => {
        toast.success('Otp Sent');
      })
      .catch((res) => {
        toast.error('Oops an error occurred');
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AppTextInput
          name={'firstName'}
          label="First name"
          control={register('amount')}
          errorMessage={errors.amount && errors.amount.message}
        />
        <AppTextInput
          name={'lastName'}
          label="Last name"
          control={register('amount')}
          errorMessage={errors.amount && errors.amount.message}
        />
        <AppTextInput
          name={'middleName'}
          label="Middle name"
          control={register('amount')}
          errorMessage={errors.amount && errors.amount.message}
        />
        <AppTextInput
          name={'dob'}
          label="Date of Birth"
          type="number"
          control={register('amount')}
          errorMessage={errors.amount && errors.amount.message}
        />
        <AppTextInput
          name={'address1'}
          label="Address 1"
          control={register('amount')}
          errorMessage={errors.amount && errors.amount.message}
        />
        <AppTextInput
          name={'address2'}
          label="Address 2"
          control={register('amount')}
          errorMessage={errors.amount && errors.amount.message}
        />
        <AppButton className="w-[75%]">Submit</AppButton>
      </form>
    </div>
  );
}
