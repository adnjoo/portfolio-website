import type { Metadata } from 'next';
import { Providers } from '@/app/providers';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: "drew's site",
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main className='min-h-[90vh]'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
