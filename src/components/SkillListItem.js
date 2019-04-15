import React from "react"
import Icon from "./icons"
import { css } from "@emotion/core"
import { transitions } from "../utils/styleGuide"

const SkillListItemStyle = css`
  svg {
    width: 30rem;
    transition: ${transitions.hoverOpacity};
    opacity: 0.6;
    :hover {
      opacity: 1;
    }
  }
`
const SkillListItem = props => (
  <li css={SkillListItemStyle}>
    <a href={props.url} target="_blank">
      <Icon name={props.name} />
    </a>
  </li>
)

export default SkillListItem
