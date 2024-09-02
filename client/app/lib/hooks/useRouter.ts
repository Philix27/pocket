'use client';

import { useRouter } from 'next/navigation';

type IRoutes =
  | '/'
  | '/core'
  | '/dashboard'
  | '/p2p'
  | '/swap'
  | '/savings'
  | '/docs'
  | '/inbox'
  | '/xmtp'
  | '/customer-care'
  | '/vendor-chat'
  | '/kyc'
  | '/settings'
  | '/profile';

export const useAppRouter = () => {
  const router = useRouter();

  const go = (props: IRoutes) => {
    router.push(props);
  };

  return {
    ...router,
    go,
  };
};
