/* @jsx jsx */
import * as React from "react";

import { Heading, Text, Button, jsx, Flex } from "theme-ui";

const mainStyles = { padding: 96 };

const heroStyles = {
  display: `flex`,
  flexDirection: `column`,
  alignItems: `center`,
};

const heroHeadingStyles = { fontSize: 7, marginBottom: `1rem` };
const heroDescriptionStyles = { fontSize: 3, marginBottom: `2rem` };

export default function Home() {
  return (
    <>
      <main sx={mainStyles}>
        <section css={heroStyles}>
          <Heading as="h1" sx={heroHeadingStyles}>
            Gatsby Support Chat Plugin
          </Heading>
          <Text sx={heroDescriptionStyles}>
            <code>gatsby-plugin-support-chat</code> is a drop-in support chat
            solution for Gatsby sites, leveraging the power of serverless
            functions on Gatsby Cloud.
          </Text>
          <Flex>
            <Button mr={4}>Get Started</Button>
            <Button variant="secondary">Docs</Button>
          </Flex>
        </section>
      </main>
    </>
  );
}
