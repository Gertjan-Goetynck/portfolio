import React from "react"
import SVG from "./icons"

const ContactListItem = props => (
  <li>
    <a href={props.link} target={props.type !== "email" ? "_blank" : "_self"}>
      <SVG type={props.type} />
    </a>
  </li>
)

export default ContactListItem
