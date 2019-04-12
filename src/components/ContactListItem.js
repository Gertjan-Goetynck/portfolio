import React from "react"
import Icon from "./icons"
import { css } from "@emotion/core"
import { colors } from "../utils/styleGuide"

const contactListItemStyle = css`
  height: 10rem;
  width: 10rem;
`

const ContactListItem = props => (
  <li css={contactListItemStyle}>
    <a href={props.link} target={props.type !== "email" ? "_blank" : "_self"}>
      <Icon type={props.type} color={colors.dark2} hoverColor={colors.dark3} />
    </a>
  </li>
)

export default ContactListItem
