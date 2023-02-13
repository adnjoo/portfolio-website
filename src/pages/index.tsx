import React from 'react';
import Layout from '@/components/Layout';

import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';

export default function Home(): any {
  return (
    <Layout>
      <About />
      <Skills />
      <Projects />
    </Layout>
  );
}
