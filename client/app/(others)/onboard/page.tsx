'use client';
import { AppButton, AppSelect, AppTextInput, Navbar, Tabs } from '@/comps';
import React from 'react';

export default function OnboardPage() {
  return (
    <div>
      <Navbar title="Onboarding" isBack />

      <div className="px-5 py-4 gap-y-2 w-full flex flex-col items-center space-y-3">
        <AppTextInput control={undefined} name="first" place={'John'} label="First name" />
        <AppTextInput control={undefined} name="last" place={'Doe'} label="Last name" />
        {/* <AppTextInput control={undefined} name="phone" place={'2348012345678'} label="Last name" /> */}

        <AppSelect
          label="Select country"
          onChange={(e) => {}}
          data={[
            {
              label: 'Nigeria',
              value: 'cUSD',
            },
            {
              label: 'Kenya',
              value: 'CELO',
            },
            {
              label: 'South Africa',
              value: 'CELO',
            },
            {
              label: 'Ethopia',
              value: 'CELO',
            },
          ]}
        />
        <AppTextInput control={undefined} name="amount" place={'100'} label="Amount" />
        <AppButton className="w-[75%]">Send</AppButton>
      </div>
    </div>
  );
}
