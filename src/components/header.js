/** @jsx jsx */
import { Link } from "gatsby"
import React from "react"
import { css, jsx } from "@emotion/core"
import Typist from "react-typist"

//Import styleguide
import { colors, fonts, breakpoints } from "../utils/styleGuide"

//Import custom components
import Hero from "./Hero"
import CTA from "./CallToActionBtn"

const headerStyles = css`
  position: relative;
  background-color: ${colors.dark1};
  height: 100vh;
  width: 100%;
`

const titleStyles = css`
  padding-top: 55%;
  width: 54rem;
  color: ${colors.light1};
  font-size: ${fonts.sizes.headingPrimary};
  line-height: 7rem;
  /* position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%); */

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
      <CTA
        text={"About me"}
        horizontalPosition={"50%"}
        verticalPosition={"55%"}
        linkTo={"#about"}
      />
    </Hero>
  </header>
)

export default Header
