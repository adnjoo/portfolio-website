import React from 'react';
import Head from 'next/head';

import NavBar from './NavBar';
import Footer from './Footer';

export default function Layout({ children }: { children: any }): any {
  return (
    <>
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <div className='main-container'>
        <NavBar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
