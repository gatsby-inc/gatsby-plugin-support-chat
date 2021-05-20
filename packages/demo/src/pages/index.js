/* @jsx jsx */
import * as React from "react";
import { jsx, Box } from "theme-ui";

import Hero from "../components/Hero";

export default function Home() {
  return (
    <Box as="main" variant="layout.main">
      <Hero />
    </Box>
  );
}
