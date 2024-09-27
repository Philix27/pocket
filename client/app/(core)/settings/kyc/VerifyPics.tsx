import { AppButton } from '@/comps';
import React from 'react';
import { toast } from 'sonner';

export default function PictureBvn() {
  // const { isLoading, data: quiz_topics } = trpc.quiz_topics.get_all.useQuery();
  const onSubmit = () => {
    toast.success('Otp verified');
  };

  return (
    <div>
      PictureBvn
      <input type="file" />
      <AppButton className="w-[75%]" onClick={onSubmit}>
        Upload
      </AppButton>
    </div>
  );
}
