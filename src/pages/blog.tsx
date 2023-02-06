import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Biography from '../components/Biography';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

export default function BlogIndex({ data, location }: any): any {
  const siteTitle = data.site.siteMetadata?.title || 'Title';
  const posts = data.allMdx.nodes;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        {/* <Biography /> */}
        <p>
          No blog posts found.
        </p>
      </Layout>
    );
  }

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <div className='text-center flex flex-col items-center my-6'>
          <h2 className="text-3xl font-bold my-3 text-slate-600">
            {data.site.siteMetadata?.title || 'Title'}
          </h2>
        </div>
        <ol className='flex flex-col justify-center mt-8 mb-24'>
          {posts.map((post: any) => {
            const title = post.frontmatter.title || post.frontmatter.slug;

            return (
              <li key={post.frontmatter.slug} className='mx-6 my-6'>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2 className='block text-center text-xl font-semibold text-indigo-600'>
                      <Link to={`../${post.frontmatter.slug}`} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small className='block text-center text-lg text-slate-700'>{post.frontmatter.date}</small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt
                      }}
                      itemProp="description"
                      className='block text-center text-md text-black'
                    />
                  </section>
                </article>
              </li>
            );
          })}
        </ol>
      </Layout>
    </>
  );
};

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = (): any => <Seo title="Blog" />;

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          slug
        }
      }
    }
  }
`;
