import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { MDXProvider } from "@mdx-js/react";
import { Link } from "gatsby";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

import Layout from "../components/Layout";

const shortcodes = { Link };

export default function PageTemplate({
  data,
  children,
  location,
}: {
  data: any;
  children: any;
  location: any;
}) {
  const { previous, next, site, mdx } = data;
  const siteTitle = `${site.siteMetadata?.subtitle} | ${mdx.frontmatter.title}`;

  return (
    <Layout location={location}>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <article
        className="blog-post min-h-screen"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1
            itemProp="headline"
            className="block text-center text-xl font-semibold text-indigo-600 mt-12"
          >
            {mdx.frontmatter.title}
          </h1>
          <p className="block text-center text-lg text-slate-700 my-6">
            {mdx.frontmatter.date}
          </p>
          <p className="block text-center text-md text-slate-700 my-4">
            ⏱️ {mdx.fields.readingTime.text}
          </p>
        </header>
        <section
          itemProp="articleBody"
          className="mx-auto px-4 mb-24 text-md prose items-center"
        >
          <MDXProvider components={shortcodes}>{children}</MDXProvider>
        </section>
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul className="flex justify-between mx-6">
          <li className="justify-start">
            {previous && (
              <Link
                to={`../../${previous.frontmatter.slug}`}
                rel="prev"
                className="
              inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700
              "
              >
                <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" />
                {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li className="justify-end">
            {next && (
              <Link
                to={`../../${next.frontmatter.slug}`}
                rel="next"
                className="
              inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700
              "
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
}

export const query = graphql`
  query BlogpostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        subtitle
      }
    }
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        readingTime {
          text
        }
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      frontmatter {
        title
        slug
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      frontmatter {
        title
        slug
      }
    }
  }
`;
