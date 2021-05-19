module.exports = {
  flags: {
    FUNCTIONS: true,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-chat-bot",
      options: {},
    },
  ],
};
