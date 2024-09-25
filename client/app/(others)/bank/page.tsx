'use client';
import { AppSelect, AppTextInput, BottomSheet, Navbar, Row, Spinner, TextP } from '@/comps';
import React, { useState } from 'react';
import { LuUtilityPole } from 'react-icons/lu';
import { FaRegAddressBook } from 'react-icons/fa';
import { MdAdd } from 'react-icons/md';
import { trpc } from '@/lib';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

export const schema = z.object({
  accountNumber: z.number(),
});

export type FormData = z.infer<typeof schema>;

export default function BankAccountsPage() {
  const [showAdd, setShowAdd] = useState(false);
  const [bankName, setBankName] = useState<string>();

  const api = trpc.bankAccount.create.useMutation();
  const { isLoading, data } = trpc.bankAccount.get_all.useQuery({
    user_id: '1',
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (formData: FormData) => {
    if (!bankName) {
      toast.error('Select a bank');
      return;
    }
    api
      .mutateAsync({
        accountNumber: formData.accountNumber.toString(),
        bankName: bankName,
        accountName: '',
        userId: '1',
      })
      .then((res) => {
        toast.success('Otp Sent');
      })
      .catch((res) => {
        toast.error('Oops an error occurred');
      });
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <Navbar title="Bank accounts" isBack icon={MdAdd} onIconClick={() => {}} />
      <div className="px-5 w-full">
        {data!.length < 1 && <TextP>No accounts</TextP>}

        {data &&
          data?.map((value, i) => (
            <Row key={i} title={value.bankName} subtitle={value.accountName} Icon={LuUtilityPole} />
          ))}

        <Row title="Sample account" subtitle="Full Name" Icon={FaRegAddressBook} />
      </div>

      {showAdd && (
        <BottomSheet onClose={() => setShowAdd(false)}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <AppTextInput
              name={'accountNumber'}
              label="Account number"
              control={register('accountNumber', { valueAsNumber: true })}
              errorMessage={errors.accountNumber && errors.accountNumber.message}
            />
            <AppSelect
              label="Bank"
              onChange={(value) => {
                setBankName(value);
              }}
              data={[
                {
                  label: 'GTB',
                  value: '',
                },
                {
                  label: 'Zenith',
                  value: '',
                },
                {
                  label: 'UBA',
                  value: '',
                },
                {
                  label: 'Opay',
                  value: '',
                },
                {
                  label: 'Moniepoint',
                  value: '',
                },
              ]}
            />
          </form>
        </BottomSheet>
      )}
    </div>
  );
}
