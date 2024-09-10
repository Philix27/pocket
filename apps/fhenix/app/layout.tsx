import "./globals.css"
import { Metadata } from "next"

import Provider from "./provider"

export const metadata: Metadata = {
  title: {
    default: "SupaSave",
    template: `%s - SupaSave`,
  },
  description: "A savings application",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={
          "min-h-screen bg-background font-sans antialiased"
          //fontSans.variable
        }
      >
        <Provider>
          <div>
            <div className="flex-1">{children}</div>
          </div>
        </Provider>
      </body>
    </html>
  )
}
