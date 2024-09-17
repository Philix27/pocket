'use client';
import { AppButton, AppInput, AppSelect, Navbar } from '@/comps';
import { use3Wagmi } from '@/lib';
import { useTheme } from 'next-themes';
import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export default function SendMoneyPage() {
  const { address } = use3Wagmi();
  const theme = useTheme();
  const isDark = theme.theme == 'dark';
  return (
    <div>
      <Navbar title="Withdraw" isBack />

      <div className="px-5 w-full">
        <div className="py-4 space-y-4 flex flex-col w-full items-center">
          <AppInput control={undefined} name="amount" place={'Enter amount'} type="number" />
          <AppSelect data={options} onChange={(e) => {}} />
          <Select
            options={options}
            className="bg-card text-foreground w-full"
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                color: isDark ? '#e3e6e6' : '#e6e6e6',
                background: isDark ? '#19232f' : '#535353',
                borderColor: state.isFocused ? '#f24500' : '#4c4847',
                outline: state.isFocused ? '#f24500' : '#4c4847',
                border: 1,
                borderStyle: 'solid',
              }),
            }}
          />
          <AppButton className="w-[75%]">Send</AppButton>
        </div>
      </div>
    </div>
  );
}
// Comp icon to copy wallet address
// Share Icon to share generate image
