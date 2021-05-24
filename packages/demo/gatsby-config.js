module.exports = {
  siteMetadata: {
    title: "Gatsby Support Chat Plugin",
    siteUrl: `https://supportchat.gatsbyjs.io`,
    description: `A Gatsby plugin to add a chat window to your Gatsby site that integrates with your Slack workspace.`,
    twitter: `@gatsbyjs`,
  },
  flags: {
    FUNCTIONS: true,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Gatsby Plugin Support Chat`,
        short_name: `Gatsby Plugin Support Chat`,
        lang: `en`,
        display: `standalone`,
        icon: "src/assets/icon.png",
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
      },
    },
    {
      resolve: "gatsby-plugin-support-chat",
      options: {},
    },
  ],
}
