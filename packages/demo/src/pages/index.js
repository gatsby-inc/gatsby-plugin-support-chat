/* @jsx jsx */
import * as React from "react"
import { jsx, Box } from "theme-ui"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <Box as="main">
      <Hero />
      <Features />
      <Footer />
    </Box>
  )
}
