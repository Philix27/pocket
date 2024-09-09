'use client';

import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { FormData, durationTransformer, schema } from './schema';
import { AppStores } from '@/lib';
import { useDeposit } from './useDeposit';
import { AppButton, AppTextInput } from '@/comps';

export default function CreateAdsSection() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // const { formattedBalance, userAddress } = useMain()
  const { depositFunds } = useDeposit();
  const store = AppStores.useChat();

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

            <select id="duration" {...register('duration')} className={`w-full border-2 border-primary p-2 rounded-md`}>
              <option value="duration">Select Duration</option>
              <option value="1week">1 week</option>
              <option value="2weeks">2 weeks</option>
              <option value="3weeks">1 months</option>
              <option value="4weeks">2 months</option>
              <option value="5weeks">3 months</option>
            </select>
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
