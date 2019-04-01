/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css, jsx } from "@emotion/core"

const headerStyles = css`
  background-color: black;
  height: 100vh;
  h1 {
    margin-top: 0;
    color: white;
  }
`
const Header = () => (
  <header css={headerStyles}>
    <h1>My name is Gertjan, I am a web developer</h1>
  </header>
)

export default Header
