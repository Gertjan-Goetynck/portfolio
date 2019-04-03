import React from "react"
import { css } from "@emotion/core"
import { colors } from "../utils/styleGuide"

const footerStyle = css`
  background-color: #404040;
`

const Footer = () => (
  <footer css={footerStyle}>
    <p>Test</p>
  </footer>
)

export default Footer
