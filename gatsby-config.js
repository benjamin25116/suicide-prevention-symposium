module.exports = {
  siteMetadata: {
    siteUrl: "https://silentpandemic.netlify.app/",
    title: "Suicide: The Silent Pandemic",
    description:
      "Malaysia's First Multidisciplinary Symposium on Suicide Prevention.",
    image:
      "https://silentpandemic.netlify.app/static/b5fc3d3190a6dfb137e57905291edf11/39d9b/fahad-bin-kamal-anik-jNS7kDxkIyQ-unsplash.webp",
    og: {
      title: "Suicide: The Silent Pandemic",
      description:
        "Malaysia's First Multidisciplinary Symposium on Suicide Prevention.",
      image:
        "https://silentpandemic.netlify.app/static/b5fc3d3190a6dfb137e57905291edf11/39d9b/fahad-bin-kamal-anik-jNS7kDxkIyQ-unsplash.webp",
      url: "https://silentpandemic.netlify.app",
      site_name: "Suicide: The Silent Pandemic",
      type: "website",
    },
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
