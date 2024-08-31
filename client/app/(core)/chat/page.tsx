'use client';

import { AppButton } from '@/comps';
import { XMTPProvider } from '@xmtp/react-sdk';
import { useWeb3Modal, AppStores } from '@/lib';
import { useXm } from './xs';
import CoreComp from './Core';

export default function AppX() {
  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="md:w-[50%] w-[90%]">
        <XMTPProvider>
          <CoreComp />
        </XMTPProvider>
      </div>
    </div>
  );
}
