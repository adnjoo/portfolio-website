import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

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
      <div
        className='twitter-timeline-container'
        style={{
          width: '400px',
          flexDirection: 'column',
          paddingTop: '40px', 
          margin: 'auto',
        }}
      >
        <TwitterTimelineEmbed
          sourceType='profile'
          screenName='adnjoo'
          noHeader
          options={{ height: 200 }}
        />
      </div>
    </Layout>
  );
}
