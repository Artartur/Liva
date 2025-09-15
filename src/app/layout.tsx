import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const urbane = localFont({
  src: [
    {
      path: './fonts/Urbane-Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Urbane-ExtraLight.woff2',
      weight: '200',
      style: 'normal',
    },
    {
      path: './fonts/Urbane-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Urbane-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Urbane-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Urbane-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/Urbane-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-urbane',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Liva",
  description: "Liva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={urbane.variable}>
      <body>
        {children}
      </body>
    </html>
  );
}
