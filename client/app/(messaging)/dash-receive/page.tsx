'use client';
import { AppButton, Navbar, SimpleRow, TextH, TextP } from '@/comps';
import { use3Wagmi } from '@/lib';
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'sonner';
import { LuCopyCheck } from 'react-icons/lu';

export default function SendMoneyPage() {
  const { address } = use3Wagmi();
  return (
    <div>
      <Navbar title="Receive" isBack />

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
    </div>
  );
}
// Comp icon to copy wallet address
// Share Icon to share generate image
