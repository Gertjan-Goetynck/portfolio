/** @jsx jsx */
import { Link } from "gatsby"
import React from "react"
import { css, jsx } from "@emotion/core"

//Import custom components
import Hero from "./Hero"

const headerStyles = css`
  position: relative;
  background-color: black;
  height: 100vh;
  h1 {
    margin-top: 0;
    color: white;
  }
`
const Header = () => (
  <header css={headerStyles}>
    <Hero>
      <h1>My name is Gertjan, I am a web developer</h1>
    </Hero>
  </header>
)

export default Header
