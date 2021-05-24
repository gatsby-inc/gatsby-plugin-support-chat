/* @jsx jsx */
import { jsx } from "theme-ui"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Footer />
    </Layout>
  )
}
