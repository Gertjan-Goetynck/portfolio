import React from "react"
import ContactListItem from "./contactlistitem"
import { css } from "@emotion/core"

const contactListStyle = css`
  margin-bottom: 0;
  padding: 5rem 0;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
`

const ContactList = props => (
  <ul css={contactListStyle}>
    {props.contactLinks.map(contactLink => (
      <ContactListItem
        key={contactLink.type}
        link={contactLink.link}
        type={contactLink.type}
        image={contactLink.image}
      />
    ))}
  </ul>
)

export default ContactList
