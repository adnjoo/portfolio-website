import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import About from '../components/portfolio/About';
import Skills from '../components/portfolio/Skills';
import Projects from '../components/portfolio/Projects';

export default function Portfolio (): React.ReactElement {
  return (
    <Layout location={location}>
      <About />
      <Skills />
      <Projects />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
