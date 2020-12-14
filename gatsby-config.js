module.exports = {
  siteMetadata: {
    title: `Songs of the Seas`,
    description: `All your Sea Shanty needs, sea shanty lyrics, sea shanty history and other related music content.`,
    author: `Calvin Williams`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Songs of the Seas`,
        short_name: `SOTS`,
        start_url: `/`,
        background_color: `#F6F7EB`,
        theme_color: `#0D2C54`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
