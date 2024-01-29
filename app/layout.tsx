import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Charty.in',
    default: 'Charty.in | Buy classroom charts',
  }, 
  description: 'India`s wholesale school and classroom charts manufacturer, built with NextJS.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}<Analytics /></body>
    </html>
  );
}
