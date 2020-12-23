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
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/songs`,
        name: `songs`,
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
        icon: `src/img/Example Logo No Green.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GA_TRACKING_ID
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
  ],
}
