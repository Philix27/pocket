import { AppTextInput } from '@/comps';
import React from 'react';

export default function VerifyInfo() {
  return (
    <div>
      <AppTextInput control={undefined} name={'firstName'} label="First name" />
      <AppTextInput control={undefined} name={'lastName'} label="Last name" />
      <AppTextInput control={undefined} name={'middleName'} label="Middle name" />
      <AppTextInput control={undefined} name={'dob'} label="Date of Birth" type="number" />
      <AppTextInput control={undefined} name={'address1'} label="Address 1" />
      <AppTextInput control={undefined} name={'address2'} label="Address 2" />
    </div>
  );
}
