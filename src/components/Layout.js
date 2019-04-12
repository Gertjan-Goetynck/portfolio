import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

//Normalizes css
import "normalize.css"

//Import styleguide
import { fonts } from "../utils/styleGuide"

//Fonts
import "typeface-montserrat"

import Header from "./header"
import Footer from "./Footer"

const contactLinks = [
  {
    type: "email",
    link: "mailto:gertjan@goetynck.com",
    image: "email.svg",
  },
  {
    type: "linkedin",
    link: "https://www.linkedin.com/in/gertjan-goetynck-038a2478/",
    image: "linkedin.svg",
  },
  {
    type: "github",
    link: "https://github.com/Gertjan-Goetynck",
    image: "github.svg",
  },
]

const globalStyles = css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: "Montserrat", sans-serif;
    font-size: ${fonts.sizes.base};
    font-weight: 400;
  }
  p,
  li,
  a {
    font-size: 1.6rem;
  }
`
const Layout = ({ children }) => (
  <>
    {/* Set Global styles with Emotion */}
    <Global styles={globalStyles} />
    <Header />
    <div>
      <main>{children}</main>
    </div>
    <Footer contactLinks={contactLinks} />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
