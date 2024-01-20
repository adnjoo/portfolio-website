import React from 'react';
import Head from 'next/head';

import NavBar from './NavBar';
import Footer from './Footer';

const layoutText = {
  siteTitle: "drew's site",
};

export default function Layout({ children }: { children: any }): any {
  return (
    <div className='main-container bg-gradient-to-br from-gray-600 to-gray-800'>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <title>{layoutText.siteTitle}</title>
      </Head>

      <NavBar />

      <main className='min-h-[80vh]'>{children}</main>

      <Footer />
    </div>
  );
}
