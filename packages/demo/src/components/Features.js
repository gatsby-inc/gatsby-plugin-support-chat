/* @jsx jsx */
import { Heading, Text, jsx, Flex, Box } from "theme-ui"
import CodeSnippet from "../assets/Code-Snippet.svg"
import WidgetView from "../assets/Widget-View.svg"
import SlackView from "../assets/Slack-View.svg"

const mainSectionStyles = {
  display: `grid`,
  gap: `3rem`,
  padding: `40px 48px`,
  gridTemplateColumns: [`1fr`, `5fr 4fr`],
  background: `#FFB238;`,
  maxWidth: `1174px`,
  mx: `auto`,
}

const mainContentStyles = {
  display: `flex`,
  flexDirection: `column`,
  fontSize: 4,
  padding: `50px 0`,
}

const mainImageStyles = {
  width: `100%`,
  borderRadius: `1em`,
  padding: `0 30px`,
  marginTop: "-3em",
  marginBottom: "-3em",
}
const mainHeadingStyles = {
  fontSize: 5,
  marginBottom: `1rem`,
  color: `#3300C4`,
}

const mainDescriptionStyles = {
  fontSize: 3,
  marginBottom: `rem`,
  color: `#000000`,
}

const Features = () => (
  <Box as="section" variant="layout.full">
    <article sx={mainSectionStyles}>
      <Flex sx={{ margin: `auto` }}>
        <img
          src={CodeSnippet}
          alt="Gatsby Plugin Support Chat Hero Image"
          sx={mainImageStyles}
        />
      </Flex>
      <Box sx={mainContentStyles}>
        <Heading as="h1" sx={mainHeadingStyles}>
          Drop-in Componenent
        </Heading>
        <Text sx={mainDescriptionStyles}>
          Fix me please. Fix me please. Fix me please. Fix me please. Fix me
          please. Fix me please. Fix me please. Fix me please. Fix me please.
        </Text>
      </Box>
    </article>

    <article sx={mainSectionStyles}>
      <Box sx={mainContentStyles}>
        <Heading as="h1" sx={mainHeadingStyles}>
          Easy to use Chatbot
        </Heading>
        <Text sx={mainDescriptionStyles}>
          Fix me please. Fix me please. Fix me please. Fix me please. Fix me
          please. Fix me please. Fix me please. Fix me please. Fix me please.
        </Text>
      </Box>
      <Flex sx={{ margin: `auto` }}>
        <img
          src={WidgetView}
          alt="Gatsby Plugin Support Chat Hero Image"
          sx={mainImageStyles}
        />
      </Flex>
    </article>

    <article sx={mainSectionStyles}>
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
          Fix me please. Fix me please. Fix me please. Fix me please. Fix me
          please. Fix me please. Fix me please. Fix me please. Fix me please.
        </Text>
      </Box>
    </article>
  </Box>
)

export default Features
