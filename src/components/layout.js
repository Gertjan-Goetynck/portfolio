/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"

//Normalizes css
import "normalize.css"
//Fonts
import "typeface-montserrat"
import "typeface-lato"

import Header from "./header"
import "./layout.css"

const globalStyles = css`
  body {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    line-height: 1.7;
  }
  h1 {
    font-family: "lato", sans-serif;
  }
`
const Layout = ({ children }) => (
  <>
    {/* Set Global styles with Emotion */}
    <Global styles={globalStyles} />
    <Header />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0px 1.0875rem 1.45rem`,
        paddingTop: 0,
      }}
    >
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
