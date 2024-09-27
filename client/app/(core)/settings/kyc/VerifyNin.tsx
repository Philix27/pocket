import { AppTextInput, AppButton } from '@/comps';
import React from 'react';
import { toast } from 'sonner';

export default function VerifyNin() {
  const onSubmit = () => {
    toast.success('BVN verified');
  };

  return (
    <div>
      <AppTextInput
        control={undefined}
        name={'nin'}
        label="National Identity Number"
        type="number"
        place="1234837828"
      />
      <AppButton className="w-[75%]" onClick={onSubmit}>
        Submit
      </AppButton>
    </div>
  );
}
