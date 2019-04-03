import React from "react"
import Email from "./emailsvg"
import Github from "./githubsvg"
import Linkedin from "./linkedinsvg"

const Icon = props => {
  switch (props.type) {
    case "github":
      return <Github />
    case "email":
      return <Email />
    case "linkedin":
      return <Linkedin />
  }
}

export default Icon
