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
  background: `#3300C4`,
}

const mainContentStyles = {
  display: `flex`,
  flexDirection: `column`,
  fontSize: 4,
  padding: `70px 0`,
}

const mainImageStyles = {
  width: `100%`,
  borderRadius: `1em`,
  padding: `0 30px`,
  marginTop: "-2em",
}
const mainHeadingStyles = {
  fontSize: 4,
  marginBottom: `1rem`,
  color: `#FFD359`,
}

const mainDescriptionStyles = {
  fontSize: 3,
  marginBottom: `2rem`,
  color: `#FFFFFF`,
}

const MainSection = () => (
  <div>
    <section sx={mainSectionStyles}>
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
    </section>

    <section sx={mainSectionStyles}>
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
    </section>

    <section sx={mainSectionStyles}>
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
    </section>
  </div>
)

export default MainSection
