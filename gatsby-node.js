/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    })
  }
}

  
exports.createPages = async ({actions, graphql, reporter}) => {
    const { createPage } = actions;

    const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              template
              tags
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

  //Create the blog and song pages using their templates
  result.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
          path: node.fields.slug,
          component: require.resolve(`./src/templates/${node.frontmatter.template}.js`),
          context: {
              slug: node.fields.slug
          }
      })
  })

  let tags = [];
  //Get all tags from blogs and songs
  result.data.allMarkdownRemark.edges.forEach(({node}) => {
    tags = tags.concat(node.frontmatter.tags);
  })

  //Ensure we only have unique tags
  tags = tags.filter((v, i, a) => a.indexOf(v) === i);

  //Make tag pages
  tags.forEach((tag)=> {
    const tagPath = `/tags/${tag}/`;

    createPage({
      path: tagPath,
      component: require.resolve(`./src/templates/tags.js`),
      context: {
        tag,
      }
    })
  })
}
