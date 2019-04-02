/** @jsx jsx */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { css, jsx } from "@emotion/core"

const heroStyles = css`
  position: relative;
  height: 100vh;
  .heroImage {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
  .heroOverlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
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
      <div className="heroContainer" css={heroStyles}>
        <Image className="heroImage" fluid={data.file.childImageSharp.fluid} />
        <div className="heroOverlay">{children}</div>
      </div>
    )}
  />
)
export default Hero
