import { AppTextInput } from '@/comps';
import { trpc } from '@/lib';
import React from 'react';

export default function VerifyBvn() {
  // const { isLoading, data: quiz_topics } = trpc.quiz_topics.get_all.useQuery();
  return (
    <div>
      <AppTextInput type="number" label="Bvn" place="22228902" control={undefined} name={'bvn'} />
    </div>
  );
}
