import type { Metadata } from 'next';
import '@rainbow-me/rainbowkit/styles.css';
import './styles/index.css';
import './globals.css';
import { AppProviders, fontSans, cn } from './lib';

export const metadata: Metadata = {
  title: 'Pocket Ramp',
  description: 'An easy to use off-ramping platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `min-h-screen bg-background 
          font-sans antialiased`,
          fontSans.variable
        )}
      >
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
