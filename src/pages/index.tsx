import React from 'react';

import Layout from '../components/Layout';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';
import Seo from '../components/Seo';

export default function Portfolio ({ location }: any): any {
  return (
    <Layout location={location}>
      <About />
      <Skills />
      <Projects />
    </Layout>
  );
};

export const Head = (): any => <Seo title="Portfolio" />;
