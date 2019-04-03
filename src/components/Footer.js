import React from "react"
import { css } from "@emotion/core"
import { colors } from "../utils/styleGuide"

import ContactList from "./ContactList"

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

const footerStyle = css`
  background-color: #404040;
`

const Footer = () => (
  <footer css={footerStyle}>
    <ContactList contactLinks={contactLinks} />
  </footer>
)

export default Footer
