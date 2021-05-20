const heading = {
  color: "text",
  fontFamily: "heading",
  lineHeight: "heading",
  fontWeight: "heading",
}

export default {
  config: {
    useBorderBox: true,
  },
  breakpoints: ["768px", "1024px", "1440px"],
  colors: {
    text: "#232129",
    muted: "#F6EDFA",
    background: "#FFFFFF",
    dark: "#362066",
    primary: "#663399",
    secondary: "#8954A8",
  },
  fonts: {
    body: "Inter, system-ui, sans-serif",
    heading: "Inter, system-ui, sans-serif",
    monospace: `Menlo, ui-monospace, SFMono-Regular, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  layout: {
    contained: {
      maxWidth: 1174,
      mx: "auto",
      mt: 96,
    },
    full: {
      mt: 96,
      background: `#FFB238`,
    },
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  radii: [0, 2, 4, 8, 12, 24, 32, 48, 64, 72, 9999],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  text: {
    default: {
      fontFamily: `body`,
      color: `text`,
    },
    link: {
      fontFamily: `body`,
      color: `secondary`,
      textDecoration: `none`,
      "&:hover": {
        color: `primary`,
        textDecoration: `underline`,
      },
    },
    heading: {
      fontFamily: `heading`,
      fontWeight: `heading`,
    },

    capitalized: {
      fontWeight: `bold`,
      textTransform: `uppercase`,
      letterSpacing: `0.08em`,
    },
  },
  buttons: {
    primary: {
      color: "background",
      bg: "#452475",
      "&:hover": {
        bg: "dark",
      },
      cursor: "pointer",
    },
    secondary: {
      color: "text",
      bg: "background",
      cursor: "pointer",
    },
  },
  styles: {
    root: {
      backgroundColor: `background`,
      color: `text`,
    },
    a: {
      color: `secondary`,
    },
    hr: {
      color: `secondary`,
      opacity: 0.25,
    },
    h1: {
      ...heading,
      fontSize: 5,
    },
    h2: {
      ...heading,
      fontSize: 4,
    },
    h3: {
      ...heading,
      fontSize: 3,
    },
    h4: {
      ...heading,
      fontSize: 2,
    },
    h5: {
      ...heading,
      fontSize: 1,
    },
    h6: {
      ...heading,
      fontSize: 0,
    },
  },
}
