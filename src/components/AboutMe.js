/** @jsx jsx */
import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { css, jsx } from "@emotion/core"

const AboutMe = () => (
  <React.Fragment>
    <h2>About me</h2>
    <p>Hey, I'm Gertjan!</p>
    <p>
      I am a developer with a passion for anything web related. HTML5, CSS3,
      SASS, PHP, JavaScript, ... . You name it, I enjoy coding in it.
    </p>
    <p>
      During my free time you can often find me learning new technologies, and
      working on projects to improve my skills.
    </p>
    <p>
      One of the traits that defines me the most is my love for challenges. If
      you are interested in working together on a project or are in need of a
      developer, feel free to get in touch!
    </p>
  </React.Fragment>
)
export default AboutMe
