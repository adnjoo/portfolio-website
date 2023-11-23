import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

import Layout from '@/components/Layout';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import { Bokeh } from '@/components/Bokeh';

export default function Home(): any {
  return (
    <Layout>
      {/* <Bokeh /> */}
      <About />
      <Skills />
      <Projects />
      <div className='twitter-timeline-container mx-auto mb-12 mt-6 flex w-[400px] flex-col pt-10'>
        <h1 className='mb-6 text-center text-3xl font-semibold'>X Timeline</h1>
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
