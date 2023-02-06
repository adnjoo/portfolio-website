const siteMetadata = {
  title: "Andrew's Site",
  subtitle: 'Blog',
  author: {
    name: 'Andrew Njoo',
    summary: 'blog about building things.'
  },
  description: 'A starter blog demonstrating what Gatsby can do.',
  siteUrl: 'https://adnjoo.com',
  social: {
    twitter: 'https://twitter.com/adnjoo',
    linkedin: 'https://linkedin.com/adnjoo'
  }
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    'gatsby-plugin-postcss',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/blog`,
        name: 'blog'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 630
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          'gatsby-remark-prismjs'
        ]
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gatsby Starter Blog',
        short_name: 'Gatsby',
        start_url: '/',
        background_color: '#ffffff',
        display: 'minimal-ui',
        icon: './public/whale.png'
      }
    }
  ]
};
