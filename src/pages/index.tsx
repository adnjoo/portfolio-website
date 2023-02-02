import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';
import Seo from '../components/Seo';

export default function Portfolio ({ data, location }: any): any {
  const siteTitle = data.site.siteMetadata?.title || 'Title';
  return (
    <Layout location={location} title={siteTitle}>
      <About />
      <Skills />
      <Projects />
    </Layout>
  );
};

export const Head = (): any => <Seo title="Portfolio" />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
