import {
  // Titillium_Web as FontMono,

  Roboto_Mono as FontMono,
  Roboto_Flex as FontSans,
} from 'next/font/google';

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: '400',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: '400',
});
