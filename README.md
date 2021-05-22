# Team Express

Secret project

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
Add the following tokens to your `.env` file.

```
SLACK_TOKEN=<YOUR_SLACK_API_TOKEN>
CHANNEL_ID=<YOUR_CHANNEL_ID>
```

## Alternative Setups

If you'd like to have more control over the chat widget, you can import the React component or hook to further customize the UI.

```js
// component
import { SupportChat } from "gatsby-plugin-support-chat"
```

```js
// hook
import { useSupportChat } from "gatsby-plugin-support-chat"

const MyComponent = props => {
  const [messages, sendMessage] = useSupportChat()

  /* ... */
}
```
