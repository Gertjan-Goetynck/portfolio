// import React from "react"
// import { css } from "@emotion/core"
// import { colors } from "../utils/styleGuide"

// import ContactList from "./ContactList"

import { Link } from "gatsby"
import React from "react"
import { css, jsx } from "@emotion/core"
import Typist from "react-typist"

//Import styleguide
import { colors, fonts } from "../utils/styleGuide"

//Import custom components
import Hero from "./Hero"
// const contactLinks = [
//   {
//     type: "email",
//     link: "mailto:gertjan@goetynck.com",
//     image: "email.svg",
//   },
//   {
//     type: "linkedin",
//     link: "https://www.linkedin.com/in/gertjan-goetynck-038a2478/",
//     image: "linkedin.svg",
//   },
//   {
//     type: "github",
//     link: "https://github.com/Gertjan-Goetynck",
//     image: "github.svg",
//   },
// ]

// const footerStyle = css`
//   background-color: #404040;
// `
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

const Footer = () => (
  //   <footer css={footerStyle}>
  //     <ContactList contactLinks={contactLinks} />
  //   </footer>
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

export default Footer
