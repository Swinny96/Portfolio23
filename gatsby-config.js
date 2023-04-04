/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Christopher Swinton`,
    description: `Christopher Swintons Portfolio Website`,
    author: `@cswinton`,
    siteUrl: `https://www.chrisswinton.co.uk/`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-google-gtag",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/favicon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
