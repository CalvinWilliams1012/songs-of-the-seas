/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
    }
  }
  
exports.createPages = async ({actions, graphql, reporter}) => {
    const { createPage } = actions;

    const BlogPostTemplate = require.resolve(`./src/templates/blog-post.js`);

    const SongTemplate = require.resolve(`./src/templates/song.js`);

    const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              template
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if(result.errors){
      reporter.panicOnBuild(`Error while running GraphQL Query!!!!`);
    return;
  }

  result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
          path: node.fields.slug,
          component: require.resolve(`./src/templates/${node.frontmatter.template}.js`),
          context: {
              slug: node.fields.slug
          }
      })
  })
}