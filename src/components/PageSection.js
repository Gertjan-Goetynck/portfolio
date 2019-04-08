import React from "react"
import { css } from "@emotion/core"

import { colors } from "../utils/styleGuide"

const styledSection = css`
  position: relative;
  padding-top: 10rem;
  min-height: 80vh;
  :not(:first-of-type) {
    margin-top: -80px;
  }
  padding-bottom: 15rem;
  :nth-of-type(2n) {
    background-color: ${colors.mainColorDark};

    border-top-left-radius: 40px;

    transform: skewY(-1deg);
    > * {
      transform: skewY(1deg);
    }
    :before {
      z-index: -2;
      content: "";
      width: 40px;
      height: 40px;
      background-color: inherit;
      position: absolute;
      top: -39px;
      right: 0;
    }
    :after {
      content: "";
      width: 80px;
      height: 80px;
      background-color: white;
      position: absolute;
      top: -80px;
      right: 0;
      border-radius: 50%;
    }
    color: white;
  }
`

const PageSection = ({ children, name }) => (
  <section id={name} css={styledSection}>
    {children}
  </section>
)

export default PageSection
