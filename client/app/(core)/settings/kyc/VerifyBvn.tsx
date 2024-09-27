import { AppButton, AppTextInput } from '@/comps';
import { trpc } from '@/lib';
import React from 'react';
import { toast } from 'sonner';

export default function VerifyBvn() {
  // const { isLoading, data: quiz_topics } = trpc.quiz_topics.get_all.useQuery();
  const onSubmit = () => {
    toast.success('BVN verified');
  };

  return (
    <div>
      <AppTextInput control={undefined} name={'bvn'} label="Bank Verification Number" type="number" place="22228902" />
      <AppButton onClick={onSubmit}>Submit</AppButton>
    </div>
  );
}
