'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { Web3Providers } from './web3Provider';
import { Analytics } from '@vercel/analytics/react';
import { useAppTheme } from '../hooks/useTheme';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { IoWarningOutline } from 'react-icons/io5';
import { IoMdInformationCircleOutline } from 'react-icons/io';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { GrStatusGood } from 'react-icons/gr';

export function AppProviders(props: { children: ReactNode }) {
  const theme = useAppTheme();

  return (
    <Web3Providers>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        {props.children}
        <Toaster
          position="top-center"
          style={{
            backgroundColor: theme.bgColor,
            color: theme.color,
          }}
          toastOptions={{
            unstyled: true,
            classNames: {
              toast: 'bg-background border border-[0.1px] px-3 py-4 flex items-center rounded ',
              title: 'text-sm ml-3',
              description: 'text-red-400',
              actionButton: 'bg-zinc-400',
              cancelButton: 'bg-orange-400',
              closeButton: 'bg-lime-400',
              error: 'bg-red-400',
              success: 'text-green-400',
              warning: 'text-yellow-400',
              info: 'bg-blue-400',
            },
          }}
          icons={{
            success: <GrStatusGood className="mr-3" />,
            info: <IoMdInformationCircleOutline className="mr-3" />,
            warning: <IoWarningOutline className="mr-3" />,
            error: <MdOutlineErrorOutline className="mr-3" />,
            loading: <AiOutlineLoading3Quarters className="mr-3" />,
          }}
        />
        <Analytics />
      </ThemeProvider>
    </Web3Providers>
  );
}
