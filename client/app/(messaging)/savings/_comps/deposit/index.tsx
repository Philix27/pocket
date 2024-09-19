'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { FormData, IDuration, durationTransformer, schema } from './schema';
import { useDeposit } from './useDeposit';
import { AppButton, AppSelect, AppTextInput } from '@/comps';

export default function DepositSection() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // const { formattedBalance, userAddress } = useMain()
  const { depositFunds } = useDeposit();

  const submitData = async (formData: FormData) => {
    try {
      // await ContractFn.deposit({
      //   userAddress: userAddress as `0x${string}`,
      //   // userAddress: account.address as `0x${string}`,
      //   purpose: formData.purpose,
      //   timeInSeconds: durationTransformer(formData.duration),
      //   amount: formData.amount,
      // })
      await depositFunds({
        purpose: formData.purpose,
        timeInSeconds: durationTransformer(formData.duration),
        amount: formData.amount,
      });
      toast('Deposit Successful');
    } catch (error) {
      toast('Oops an error occured');
    }
  };

  return (
    <div className={`px-6`}>
      <div className={`my-4 flex flex-col items-center justify-center`}>
        <form onSubmit={handleSubmit(submitData)} className="w-full">
          <div className={`w-full space-y-4 pb-4`}>
            <AppTextInput
              control={register('amount', { valueAsNumber: true })}
              name={'amount'}
              place="Amount"
              type="number"
              className={`text-black w-full`}
            />
            {/* <input
              type="number"
              placeholder="Amount"
              {...register('amount', { valueAsNumber: true })}
              className={`w-full border-2 border-primary p-2  text-black`}
            /> */}
            {errors.amount && <span className={`text-red-700`}>{errors.amount.message}</span>}

            <AppTextInput control={register('purpose')} name={'amount'} place="Purpose" className={`text-black`} />
            {errors.purpose?.message && <span className={`text-red-700`}>{errors.purpose.message}</span>}

            <AppSelect
              data={[
                {
                  label: '1 week',
                  value: '1week',
                },
                {
                  label: '2 weeks',
                  value: '2weeks',
                },
                {
                  label: '3 weeks',
                  value: '3weeks',
                },
                {
                  label: '4 weeks',
                  value: '4weeks',
                },
                {
                  label: '5 weeks',
                  value: '5weeks',
                },
              ]}
              label="Duration"
              onChange={(newValue: string) => {
                setValue('duration', newValue as IDuration);
                throw new Error('Function not implemented.');
              }}
            />
            {errors.duration?.message && <span className={`text-red-700`}>{errors.duration.message}</span>}

            <div className={`w-full space-x-2`}>
              <label>
                <input {...register('sholdLock')} type="checkbox" placeholder="lock" className={`mr-2`} />
                Locked
              </label>
            </div>
            {errors.sholdLock?.message && <span className={`text-red-700`}>{errors.sholdLock.message}</span>}
          </div>

          <div className={`mt-6  flex items-center justify-center`}>
            <AppButton className="w-[70%]">Next</AppButton>
          </div>
        </form>
      </div>
    </div>
  );
}
