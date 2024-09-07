'use client';

import { AppButton, TextP, TextH } from './comps';
import { useAppRouter } from '@/lib';

export default function NotFound() {
  const router = useAppRouter();
  return (
    <div className={'w-full flex items-center justify-center h-screen'}>
      <div className="flex flex-col items-center">
        <TextH className="mb-4">Not Found</TextH>
        <TextP className="mb-4"> Could not find requested resource</TextP>
        <AppButton onClick={() => router.back()}>Go back</AppButton>
      </div>
    </div>
  );
}
