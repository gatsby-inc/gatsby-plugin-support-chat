# gatsby-plugin-support-chat

Adds a simple Slack-based support chat widget to your Gatsby site

## Getting Started

Install the plugin.

```sh
npm i gatsby-plugin-support-chat
```

Add it to your `gatsby-config.js` to render on all pages of your site.

```js
// gatsby-config.js
module.exports = {
  plugins: ["gatsby-plugin-support-chat"],
}
```

You'll need a Slack API token and a channel ID.
[Create a Slack app](https://api.slack.com/apps/) that you install into the workspace where you'll be handling chats. All user chats will sent to a channel. Threaded replies to their messages will be sent back to them.

Give your app the `message.channels` OAuth scope in "Event Subscriptions > Subscribe to events on behalf of users".

Set the Request URL in "Event Subscriptions" to the Function url. For development, you can start ngrok locally (`npx ngrok http 8000`) and set a URL like: "http://9237f1a75663.ngrok.io/api/gatsby-plugin-support-chat/receive-slack-hook". In production, use the URL of your domain + "/api/gatsby-plugin-support-chat/receive-slack-hook"

Add two [environment variables](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables):

- `SLACK_TOKEN` — the Bot User OAuth Token from the "OAuth and Permissions" screen.
- `CHANNEL_ID` — the channel ID of the channel you wish support messages to be sent to. The easiest way to find this is to open Slack in the web, navigate to the channel, and copy the id from the URL.

## Customizing the chat widget

If you'd like to have more control over the chat widget, you can [shadow the React component or hook](https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/#gatsby-skip-here) to further customize the UI.
