/* @jsx jsx */
import { Heading, Text, jsx, Flex, Box } from "theme-ui"
import CodeSnippet from "../assets/Code-Snippet.png"
import WidgetView from "../assets/Widget-View.png"
import SlackView from "../assets/Slack-View.png"
import BoxIcon from "../assets/box.svg"
import ChatIcon from "../assets/chat.svg"
import BoltIcon from "../assets/bolt.svg"

const featuresSectionStyles = {
  display: `grid`,
  gap: `3rem`,
  padding: `64px 0`,
  background: `#FFB238`,
}
const articleStyles = {
  display: `grid`,
  gap: [0, `5rem`],
  padding: `0 40px`,
  gridTemplateColumns: [`1fr`, `5fr 4fr`],
  background: `#FFB238`,
  maxWidth: 0, // references the theme.sizes array
  mx: `auto`,
}

const mainContentStyles = {
  display: `flex`,
  flexDirection: `column`,
  fontSize: 4,
  padding: [0, `50px 0`],
}

const mainImageStyles = {
  width: [`auto`, `100%`],
  height: [`200px`, `auto`],
  borderRadius: `1em`,
  padding: `0 30px`,
  marginTop: [0, "-3em"],
  marginBottom: [0, "-3em"],
}
const mainHeadingStyles = {
  fontSize: 5,
  marginBottom: `.5rem`,
  color: `#3300C4`,
  marginTop: [`1rem`, 0],
  display: `flex`,
  alignItems: `center`,
}

const mainHeadingIconStyles = {
  height: `100%`,
  width: `auto`,
  marginRight: 3,
}

const mainDescriptionStyles = {
  fontSize: 3,
  marginBottom: `rem`,
  color: `#000000`,
}

const Features = () => (
  <Box as="section" sx={featuresSectionStyles} variant="layout.full">
    <Box as="article" sx={articleStyles}>
      <Flex sx={{ margin: `auto` }}>
        <img
          src={CodeSnippet}
          alt="Gatsby Plugin Support Chat Hero Image"
          sx={mainImageStyles}
        />
      </Flex>
      <Box sx={mainContentStyles}>
        <Heading as="h1" sx={mainHeadingStyles}>
          <img src={BoxIcon} alt="Box Icon" sx={mainHeadingIconStyles} />
          Drop-in Component
        </Heading>
        <Text sx={mainDescriptionStyles}>
          Import the component from the plugin and add it to your Gatsby site.
          Configure options to add your own branding and custom messaging.
        </Text>
      </Box>
    </Box>

    <Box as="article" sx={articleStyles}>
      <Box sx={{ ...mainContentStyles, order: ["1", "0"] }}>
        <Heading as="h1" sx={mainHeadingStyles}>
          <img src={ChatIcon} alt="Chat Icon" sx={mainHeadingIconStyles} />
          Easy to use Chatbot
        </Heading>
        <Text sx={mainDescriptionStyles}>
          A familiar interface for users to communicate with your team. All
          messages are cached in the browser for the user to easily return to
          them later.
        </Text>
      </Box>
      <Flex sx={{ margin: `auto` }}>
        <img
          src={WidgetView}
          alt="Gatsby Plugin Support Chat Hero Image"
          sx={mainImageStyles}
        />
      </Flex>
    </Box>

    <Box as="article" sx={articleStyles}>
      <Flex sx={{ margin: `auto` }}>
        <img
          src={SlackView}
          alt="Gatsby Plugin Support Chat Hero Image"
          sx={mainImageStyles}
        />
      </Flex>
      <Box sx={mainContentStyles}>
        <Heading as="h1" sx={mainHeadingStyles}>
          <img src={BoltIcon} alt="Bolt Icon" sx={mainHeadingIconStyles} />
          Connects to Slack
        </Heading>
        <Text sx={mainDescriptionStyles}>
          Integrates with your existing Slack workspace. Each new visitor's chat
          becomes a thread, and responses to that thread are sent back to the
          user's browser.
        </Text>
      </Box>
    </Box>
  </Box>
)

export default Features
