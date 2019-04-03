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
import Footer from "./footer"

const globalStyles = css`
  html {
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
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
