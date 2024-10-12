'use client'
import { TextP, AppButton, SimpleRow } from '@/comps';
import { use3Wagmi } from '@/lib';
import { QRCodeSVG } from 'qrcode.react';
import React from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { LuCopyCheck } from 'react-icons/lu';
import { toast } from 'sonner';
import { useReceive } from './useRecieve';

export default function WalletInfo() {
  const { address } = use3Wagmi();
  const store = useReceive();

  return (
    <div className="px-5 h-full flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center my-4 ">
        <QRCodeSVG
          title="Wallet address"
          className="w-full bg-white p-2 rounded-md"
          value={address!}
          // viewBox={`0 0 256 256`}
          size={300}
        />
      </div>

      <div
        className={`
          w-[70%] flex flex-col items-center justify-center 
          bg-card rounded-lg p-2 break-words my-4 text-wrap
        `}
      >
        <TextP className="truncate text-ellipsis text-sm max-w-[90%] text-center">{address}</TextP>
      </div>

      <div className="mt-2 mb-4 w-full flex items-center justify-center">
        <CopyToClipboard
          text={address!}
          onCopy={() => {
            toast.message('Wallet address copied');
          }}
        >
          <AppButton className="w-fit">
            Copy Address <LuCopyCheck className="mr-1 ml-5" size={20} />
          </AppButton>
        </CopyToClipboard>
      </div>
      <div className="w-full">
        <SimpleRow left={'Display name'} right="philix27" />
        <SimpleRow left={'Phone'} right="081082293" />
      </div>
    </div>
  );
}
