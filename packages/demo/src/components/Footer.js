/* @jsx jsx */
import * as React from "react"
import { Heading, Text, Button, jsx, Flex, Box } from "theme-ui"
import FunctionsSnippet from "../assets/Functions-Snippet.svg"
import { buttonStyles } from "./shared/index"

const footerSectionStyles = {
  display: `grid`,
  gap: `3rem`,
  padding: `0 48px`,
  paddingBottom: 6,
  gridTemplateColumns: [`1fr`, `5fr 4fr`],
}

const footerContentStyles = {
  display: `flex`,
  flexDirection: `column`,
  fontSize: 4,
  order: ["1", "0"],
}

const footerImageStyles = {
  width: `120%`,
  borderRadius: `1em`,
  padding: `10px 48px 10px 10px`,
  boxShadow: `0px 4px 15px rgba(0,0,0,.2)`,
  maxWidth: `100%`,
  padding: 4,
}
const footerHeadingStyles = { fontSize: 5, marginBottom: `1rem` }
const footerDescriptionStyles = { fontSize: 3, marginBottom: `2rem` }
const tinyFooterStyles = { gridColumn: `1 / -1`, textAlign: `center` }

const Footer = () => (
  <Box as="section" variant="layout.contained" sx={footerSectionStyles}>
    <Box sx={footerContentStyles}>
      <Heading as="h1" sx={footerHeadingStyles}>
        Leverage the power of Functions
      </Heading>
      <Text sx={footerDescriptionStyles}>
        Functions let you build dynamic applications without running servers.
        Submit forms, authenticate users, securely connect to external services,
        build GraphQL/REST APIs, and more.
      </Text>
      <Flex sx={{ alignItems: `center` }}>
        <form action="https://www.gatsbyjs.com/docs/how-to/functions/">
          <Button
            sx={{
              ...buttonStyles,
              display: `flex`,
              textDecoration: ["underline", "none"],
            }}
          >
            Learn More
          </Button>
        </form>
      </Flex>
    </Box>
    <Flex sx={{ margin: `auto` }}>
      <img
        src={FunctionsSnippet}
        alt="Gatsby Plugin Support Chat Hero Image"
        sx={footerImageStyles}
      />
    </Flex>
    <Box sx={tinyFooterStyles}>
      <Text>
        Made with ⚡️ at <a href="https://gatsbyjs.com">Gatsby</a>.
      </Text>
    </Box>
  </Box>
)

export default Footer
