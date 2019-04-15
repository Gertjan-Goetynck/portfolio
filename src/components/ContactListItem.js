import React from "react"
import Icon from "./icons"
import { css } from "@emotion/core"
import { colors } from "../utils/styleGuide"
import { transitions } from "../utils/styleGuide"

const contactListItemStyle = css`
  height: 10rem;
  width: 10rem;
  opacity: 0.5;
  transition: ${transitions.hoverOpacity};
  :hover {
    opacity: 1;
  }
`

const ContactListItem = props => (
  <li css={contactListItemStyle}>
    <a href={props.link} target={props.type !== "email" ? "_blank" : "_self"}>
      <Icon type={props.type} color={colors.dark2} />
    </a>
  </li>
)

export default ContactListItem
