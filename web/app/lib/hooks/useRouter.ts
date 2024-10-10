'use client';

import { useRouter } from 'next/navigation';

type IRoutes =
  | '/'
  | '/core'
  | '/dashboard'
  | '/fx'
  | '/savings'
  | '/docs'
  | '/inbox'
  | '/xmtp'
  | '/support'
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
