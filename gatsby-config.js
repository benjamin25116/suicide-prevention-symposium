module.exports = {
  siteMetadata: {
    siteUrl: "https://silentpandemic.netlify.app/",
    title: "Suicide: The Silent Pandemic",
    description:
      "Malaysia's First Multidisciplinary Symposium on Suicide Prevention.",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
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
