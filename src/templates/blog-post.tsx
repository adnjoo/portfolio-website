import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';

import Biography from '../components/Biography';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const BlogPostTemplate = ({
  data: { previous, next, site, markdownRemark: post },
  location
}) => {
  const siteTitle = site.siteMetadata?.title || 'Title';

  return (
    <Layout location={location} title={siteTitle}>
      <article
        className="blog-post min-h-screen"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline" className='block text-center text-xl font-semibold text-indigo-600 mt-12'>{post.frontmatter.title}</h1>
          <p className='block text-center text-lg text-slate-700 my-6'>{post.frontmatter.date}</p>
        </header>
        <div className='flex'>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
            className='mx-auto mb-24 text-md prose'
          />
        </div>
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          className='flex justify-between mx-6'
        >
          <li className='justify-start'>
            {previous && (
              <Link to={`/blog${previous.fields.slug}`} rel="prev" className='
              inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700
              '>
                <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" />
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li className='justify-end'>
            {next && (
              <Link to={`/blog${next.fields.slug}`} rel="next"
                className='
              inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700
              '
              >
                {next.frontmatter.title}
                <ArrowLongRightIcon className="mx-3 h-5 w-5 text-gray-400" />
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
