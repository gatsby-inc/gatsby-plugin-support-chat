/* @jsx jsx */
import { useStaticQuery, graphql } from "gatsby"
import { jsx, Box } from "theme-ui"
import { Helmet } from "react-helmet"
import socialImage from "../assets/Header-Image.png"

const Layout = ({ children }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            twitter
          }
        }
      }
    `
  )

  return (
    <Box as="main">
      <Helmet
        meta={[
          {
            name: `image`,
            content: `${siteMetadata.siteUrl}${socialImage}`,
          },
          {
            property: `og:url`,
            content: siteMetadata.siteUrl,
          },

          {
            property: `og:title`,
            content: siteMetadata.title,
          },
          {
            property: `og:description`,
            content: siteMetadata.description,
          },
          {
            property: `og:image`,
            content: `${siteMetadata.siteUrl}${socialImage}`,
          },
          /* Twitter Card tags */
          {
            name: `twitter:card`,
            content: `summary_large_image`,
          },
          {
            name: `twitter:creator`,
            content: siteMetadata.twitter,
          },
          {
            name: `twitter:title`,
            content: siteMetadata.title,
          },
          {
            name: `twitter:description`,
            content: siteMetadata.description,
          },
        ]}
      >
        <title>{siteMetadata.title}</title>
      </Helmet>
      {children}
    </Box>
  )
}

export default Layout
