/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"

//Import styleguide
import { colors } from "../utils/styleGuide"
import ContactList from "./ContactList"

const footerStyles = css`
  position: relative;
  background-color: ${colors.dark1};
  margin-top: -80px;
  z-index: 200000;
`

const Footer = props => (
  <footer css={footerStyles}>
    <ContactList contactLinks={props.contactLinks} />
  </footer>
)

export default Footer
