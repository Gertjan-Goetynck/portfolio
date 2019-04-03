/** @jsx jsx */
import { Link } from "gatsby"
import React from "react"
import { css, jsx } from "@emotion/core"
import Typist from "react-typist"

//Import styleguide
import { colors, fonts } from "../utils/styleGuide"

//Import custom components
import Hero from "./Hero"

console.log(colors)

const headerStyles = css`
  position: relative;
  background-color: black;
  height: 100vh;
`

const titleStyles = css`
  margin-top: 0;
  color: ${colors.white};
  font-size: ${fonts.sizes.headingPrimary};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  span {
    color: ${colors.mainColor};
  }
`
const Header = () => (
  <header css={headerStyles}>
    <Hero>
      <Typist>
        <h1 css={titleStyles}>
          Hi, I'm Gertjan!
          <Typist.Delay ms={400} />
          <br /> I'm a <span>PHP</span>
          <Typist.Backspace count={3} delay={300} />
          <span>JavaScript</span>
          <Typist.Backspace count={10} delay={300} />
          <span>React</span>
          <Typist.Backspace count={5} delay={300} /> <span>Web</span> developer
        </h1>
      </Typist>
    </Hero>
  </header>
)

export default Header
