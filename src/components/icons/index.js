import React from "react"
import Email from "./EmailSVG"
import Github from "./GithubSVG"
import Linkedin from "./LinkedinSVG"
import CSS3 from "./Css3SVG"
import Html5 from "./Html5SVG"
import JavaScript from "./JavaScriptSVG"
import Php from "./PhpSVG"
import ReactIcon from "./ReactSVG"
import Sass from "./SassSVG"

const Icon = props => {
  switch (props.type || props.name) {
    case "github":
      return <Github color={props.color} hoverColor={props.hoverColor} />
    case "email":
      return <Email color={props.color} hoverColor={props.hoverColor} />
    case "linkedin":
      return <Linkedin color={props.color} hoverColor={props.hoverColor} />
    case "CSS3":
      return <CSS3 />
    case "HTML5":
      return <Html5 />
    case "SASS":
      return <Sass />
    case "PHP":
      return <Php />
    case "JavaScript":
      return <JavaScript />
    case "React":
      return <ReactIcon />
  }
}

export default Icon
