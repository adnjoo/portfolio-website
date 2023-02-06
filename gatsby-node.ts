const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

const postTemplate = path.resolve("./src/templates/blog-post.tsx");

exports.createPages = async ({ graphql, actions, reporter }: { graphql: any, actions: any, reporter: any }) => {
  const { createPage } = actions;

  // Get all markdown blog posts sorted by date
  const result = await graphql(`
    query {
      allMdx(sort: { frontmatter: { date: ASC } }, limit: 1000) {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      "There was an error loading your blog posts",
      result.errors
    );
    return;
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach((node: any, index: number) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id;
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id;

    createPage({
      path: node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
        previousPostId,
        nextPostId,
      },
    });
  });
};

exports.createSchemaCustomization = ({ actions }: { actions: any }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
