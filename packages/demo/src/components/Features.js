/* @jsx jsx */
import { Heading, Text, jsx, Flex, Box } from "theme-ui"
import CodeSnippet from "../assets/Code-Snippet.svg"
import WidgetView from "../assets/Widget-View.svg"
import SlackView from "../assets/Slack-View.svg"

const featuresSectionStyles = {
  display: `grid`,
  gap: `3rem`,
  padding: `64px 0`,
  background: `#FFB238`,
}
const articleStyles = {
  display: `grid`,
  gap: [0, `3rem`],
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
  width: `100%`,
  borderRadius: `1em`,
  padding: `0 30px`,
  marginTop: [0, "-3em"],
  marginBottom: [0, "-3em"],
}
const mainHeadingStyles = {
  fontSize: 5,
  marginBottom: `1rem`,
  color: `#3300C4`,
  marginTop: [`1rem`, 0],
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
          Connects to your Slack Workspace
        </Heading>
        <Text sx={mainDescriptionStyles}>
          Integrates with your existing Slack workspace. Each new visitor's chat
          becomes a thread and repsonses to that thread are sent back to the
          user's browser.
        </Text>
      </Box>
    </Box>
  </Box>
)

export default Features
