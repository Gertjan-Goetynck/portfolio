import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

//Normalizes css
import "normalize.css"
//Fonts
import "typeface-montserrat"
import "typeface-lato"

import Header from "./header"

const globalStyles = css`
  body {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
  }
  h1 {
    font-family: "lato", sans-serif;
  }
`
const Layout = ({ children }) => (
  <>
    {/* Set Global styles with Emotion */}
    <Global styles={globalStyles} />
    <Hero />
    <div>
      <main>{children}</main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
