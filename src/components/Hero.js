import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import { css, jsx } from "@emotion/core"

const heroStyles = css`
  position: relative;
  height: 100%;
  .hero-image {
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

const Hero = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeroImage {
        file(relativePath: { regex: "/background/" }) {
          childImageSharp {
            fluid(maxWidth: 3840) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div css={heroStyles}>
        <Img className="hero-image" fluid={data.file.childImageSharp.fluid} />
        <div className="overlay">{children}</div>
      </div>
    )}
  />
)

export default Hero
