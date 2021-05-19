/* @jsx jsx */
import * as React from "react";
import { Heading, Text, Button, jsx, Flex, Box } from "theme-ui";
import { GoMarkGithub } from "react-icons/go";
import HeroImage from "../assets/Header-Image.svg";

const heroSectionStyles = {
  display: `grid`,
  gap: `3rem`,
  padding: `0 48px`,
  gridTemplateColumns: [`1fr`, `5fr 4fr`],
};

const heroContentStyles = {
  display: `flex`,
  flexDirection: `column`,
  fontSize: 4,
};

const heroButtonStyles = {
  fontSize: 3,
  cursor: `pointer`,
  borderRadius: 2,
  p: 3,
};
const heroImageStyles = { width: `100%` };
const iconStyles = {
  height: `1.25rem`,
  width: `1.25rem`,
  marginRight: `.5rem`,
  display: [`none`, `block`],
};
const heroHeadingStyles = { fontSize: 6, marginBottom: `1rem` };
const heroDescriptionStyles = { fontSize: 3, marginBottom: `2rem` };

const Hero = () => (
  <section sx={heroSectionStyles}>
    <Box sx={heroContentStyles}>
      <Heading as="h1" sx={heroHeadingStyles}>
        Gatsby Support Chat Plugin
      </Heading>
      <Text sx={heroDescriptionStyles}>
        This could be, or perhaps a platinum is the risk of a database. What we
        don't know for sure is whether or not few can name a leery voice.
      </Text>
      <Flex sx={{ alignItems: `center` }}>
        <Button sx={{ ...heroButtonStyles, marginRight: 4 }}>
          Try it out now!
        </Button>
        <Button
          variant="secondary"
          sx={{
            ...heroButtonStyles,
            display: `flex`,
            textDecoration: ["underline", "none"],
          }}
        >
          <GoMarkGithub sx={iconStyles} /> Visit the Repo
        </Button>
      </Flex>
    </Box>
    <Flex sx={{ margin: `auto` }}>
      <img
        src={HeroImage}
        alt="Gatsby Plugin Support Chat Hero Image"
        sx={heroImageStyles}
      />
    </Flex>
  </section>
);

export default Hero;
