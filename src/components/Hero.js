/** @jsx jsx */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { css, jsx } from "@emotion/core"

const heroContainerStyles = css`
  position: relative;
  height: 100vh;
`

const heroImageStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`
const heroOverlayStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
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
      <div css={heroContainerStyles}>
        <Image css={heroImageStyles} fluid={data.file.childImageSharp.fluid} />
        <div css={heroOverlayStyles}>{children}</div>
      </div>
    )}
  />
)
export default Hero
