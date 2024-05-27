import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { Roboto_Slab } from 'next/font/google';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { siteConfig } from '@/config/site';
import './globals.css';

const font = Roboto_Slab({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '700'],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@adnjoo',
    site: '@adnjoo',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning className={font.className}>
      <body>
        <ThemeProvider attribute='class'>
          <Navbar />
          <main className='min-h-screen overflow-x-hidden'>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
