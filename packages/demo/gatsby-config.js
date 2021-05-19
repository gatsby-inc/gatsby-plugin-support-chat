module.exports = {
  flags: {
    FUNCTIONS: true,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-chat-bot',
      options: {
      },
    },
  ],
};
