import React from "react"
import { css } from "@emotion/core"

import { colors, breakpoints } from "../utils/styleGuide"

const styledSection = css`
  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 0.2rem;
    color: #7ba2a2;
    margin-bottom: 2rem;
  }
  > div {
    max-width: 110rem;
    margin: 0 auto;
    @media (${breakpoints.large}) {
      padding: 0 5rem 0 5rem;
    }
    @media (${breakpoints.small}) {
      padding: 0 2rem 0 2rem;
    }
  }
  position: relative;
  padding-top: 7rem;
  min-height: 80vh;
  padding-bottom: 15rem;
  :nth-of-type(2n) {
    background-color: ${colors.mainColorDark};

    border-top-left-radius: 40px;

    transform: skewY(-1deg);
    h2 {
      color: ${colors.light1};
    }
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
    <div>{children}</div>
  </section>
)

export default PageSection
