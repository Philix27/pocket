'use client';
import { AppButton, AppTextInput, BottomSheet, Navbar, Row, TextP } from '@/comps';
import React, { useState } from 'react';
import { AirtimeData } from './data';
import Image from 'next/image';
import { GrRadial, GrRadialSelected } from 'react-icons/gr';
import { cn } from '@/lib';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const zSchema = z.object({
  network: z.string().max(10),
  amount: z.number(),
  phone: z.string().min(11, { message: 'mut be 11 digits' }).max(11, { message: 'mut be 11 digits' }),
});

export type FormData = z.infer<typeof zSchema>;

export default function AirtimePage() {
  const [showNetworks, setNetworks] = useState<boolean>(false);

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

  const NetworkComps = (val: string) =>
    getValues().network === val ? <GrRadialSelected className="text-primary" /> : <GrRadial />;

  return (
    <>
      <div>
        <Navbar title="Purchase airtime" isBack />
        <form className="w-full px-5 py-4 flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex w-full items-center justify-between my-4">
            <TextP
              className="text-primary"
              onClick={() => {
                setNetworks(true);
              }}
            >
              Select Network
            </TextP>
            <Image src="/xmtp-icon.png" alt="" height={40} width={40} />
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
                  getValues().amount === val && 'border-primary border'
                )}
                onClick={() => {
                  setValue('amount', val);
                }}
              >
                <TextP className="text-primary">{`${AirtimeData['Nigeria'].symbol}  ${val.toString()}`}</TextP>
              </div>
            ))}
          </div>

          <AppTextInput
            control={register('amount')}
            name={'amount'}
            type="number"
            place="Enter amount"
            label="Amount"
            errorMessage={errors.amount && errors.amount.message}
          />
          <AppButton className="w-[75%] my-4">Buy</AppButton>
          <BottomSheet
            onClose={() => {
              setNetworks(false);
            }}
            show={showNetworks}
          >
            <Row
              title={'MTN'}
              imgComp={NetworkComps('MTN')}
              hideArrow
              onClick={() => {
                setValue('network', 'MTN');
              }}
            />
            <Row
              title={'Airtel'}
              imgComp={NetworkComps('AIRTEL')}
              hideArrow
              onClick={() => {
                setValue('network', 'AIRTEL');
              }}
            />
            <Row
              title={'Glo'}
              imgComp={NetworkComps('GLO')}
              hideArrow
              onClick={() => {
                setValue('network', 'GLO');
              }}
            />
          </BottomSheet>
        </form>
      </div>
    </>
  );
}
