/* @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"

<<<<<<< HEAD
import Hero from "../components/Hero"
import Footer from "../components/Footer"
import MainSection from "../components/MainSection"

export default function Home() {
  return (
    <div>
      <Box as="main" variant="layout.main">
        <Hero />
      </Box>
      <Box as="main" variant="layout.overflowMain">
        <MainSection />
      </Box>
      <Box as="main" variant="layout.main">
        <Footer />
      </Box>
    </div>
  )
=======
export default function Home() {
  return (
    <Box as="main">
      <Hero />
      <MainSection />
      <Footer />
    </Box>
  );
>>>>>>> update landing page spacing
}
