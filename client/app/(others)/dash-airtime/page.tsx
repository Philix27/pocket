'use client';
import { AppButton, AppTextInput, BottomSheet, Navbar, Radial, Row, TextP } from '@/comps';
import React from 'react';
import { AirtimeData } from './data';
import Image from 'next/image';
import { cn } from '@/lib';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { useAirtime } from './useAirtime';

const zSchema = z.object({
  network: z.string().max(10),
  amount: z.number(),
  phone: z.string().min(11, { message: 'mut be 11 digits' }).max(11, { message: 'must be 11 digits' }),
});

export type FormData = z.infer<typeof zSchema>;

export default function AirtimePage() {
  const store = useAirtime();

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(zSchema),
    defaultValues: {
      network: 'MTN',
    },
  });

  const onSubmit = (data: FormData) => {
    toast.success('Airtime sent');
    // api
    //   .mutateAsync({
    //     walletAddress: '',
    //     firstName: '',
    //     lastName: '',
    //     dob: '',
    //     residentialAddress1: '',
    //     residentialAddress2: '',
    //   })
    //   .then((res) => {
    //     toast.success('Otp Sent');
    //   })
    //   .catch((res) => {
    //     toast.error('Oops an error occurred');
    //   });
  };

  return (
    <>
      <div>
        <Navbar title="Purchase airtime" isBack />
        <form className="w-full px-5 py-4 flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full items-center justify-between mb-4">
            <TextP
              className="text-primary"
              onClick={() => {
                store.update({ showNetwork: true });
              }}
            >
              Select Network
            </TextP>
            <Image src={getImgPath(store.networkSelected)!} alt="" height={35} width={35} />
          </div>
          <AppTextInput
            control={register('phone')}
            name={'phone'}
            place="Enter phone number"
            type="number"
            label="Phone number"
            className="w-full"
            errorMessage={errors.phone && errors.phone.message}
          />
          <div className="w-full grid grid-cols-4 gap-2 my-4">
            {AirtimeData['Nigeria'].amount.map((val, i) => (
              <div
                key={i}
                className={cn(
                  `px-4 py-2 bg-card rounded-full flex items-center justify-center`,
                  store.amountSelected === val && 'border-primary border'
                )}
                onClick={() => {
                  setValue('amount', val);
                  store.update({ amountSelected: val });
                }}
              >
                <TextP className="text-primary">{`${AirtimeData['Nigeria'].symbol}  ${val.toString()}`}</TextP>
              </div>
            ))}
          </div>

          <AppTextInput
            control={register('amount', { valueAsNumber: true })}
            name={'amount'}
            type="number"
            place="Enter amount"
            label="Amount"
            errorMessage={errors.amount && errors.amount.message}
          />

          <AppButton className="w-[75%] my-4">Buy</AppButton>

          <BottomSheet
            onClose={() => {
              store.update({ showNetwork: false });
            }}
            show={store.showNetwork}
          >
            <Row
              title={'MTN'}
              imgComp={<Radial className="mr-4" isChecked={getValues().network === 'MTN'} />}
              trailingComp={<img src={getImgPath('MTN')} className="size-[40px] rounded-lg" />}
              hideArrow
              onClick={() => {
                setValue('network', 'MTN');
                store.update({ networkSelected: 'MTN' });
              }}
            />
            <Row
              title={'Airtel'}
              imgComp={<Radial className="mr-4" isChecked={getValues().network === 'AIRTEL'} />}
              trailingComp={<img src={getImgPath('AIRTEL')} className="size-[40px] rounded-lg" />}
              hideArrow
              onClick={() => {
                setValue('network', 'AIRTEL');
                store.update({ networkSelected: 'AIRTEL' });
              }}
            />
            <Row
              title={'Glo'}
              imgComp={<Radial className="mr-4" isChecked={getValues().network === 'GLO'} />}
              trailingComp={<img src={getImgPath('GLO')} className="size-[40px] rounded-lg" />}
              hideArrow
              onClick={() => {
                setValue('network', 'GLO');
                store.update({ networkSelected: 'GLO' });
              }}
            />
          </BottomSheet>
        </form>
      </div>
    </>
  );
}

const getImgPath = (name: string) => {
  if (name.trim().toUpperCase() === 'MTN') return '/networks/mtn2.png';
  if (name.trim().toUpperCase() === 'GLO') return '/networks/glo.png';
  if (name.trim().toUpperCase() === 'AIRTEL') return '/networks/airtel.png';
  return '/networks/mtn2.png';
};
