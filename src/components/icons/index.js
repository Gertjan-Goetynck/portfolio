import React from "react"
import Email from "./EmailSVG"
import Github from "./GithubSVG"
import Linkedin from "./LinkedinSVG"

const Icon = props => {
  switch (props.type) {
    case "github":
      return <Github color={props.color} hoverColor={props.hoverColor} />
    case "email":
      return <Email color={props.color} hoverColor={props.hoverColor} />
    case "linkedin":
      return <Linkedin color={props.color} hoverColor={props.hoverColor} />
  }
}

export default Icon
