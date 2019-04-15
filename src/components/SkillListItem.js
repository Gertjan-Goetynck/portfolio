import React from "react"
import Icon from "./icons"
import { css } from "@emotion/core"

const SkillListItemStyle = css`
  svg {
    width: 30rem;
    transition: all 0.4s;
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
