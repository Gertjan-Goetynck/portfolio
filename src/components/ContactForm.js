import React from "react"
import { css } from "@emotion/core"
import { colors } from "../utils/styleGuide"
import "typeface-montserrat"

const formStyles = css`
  div {
    position: relative;
    margin-bottom: 2rem;
  }
  label span {
    position: absolute;
    top: -3rem;
    left: 3rem;
    font-size: 1.5rem;
    font-weight: 500;
    color: ${colors.light1};
    transition: all 0.3s;
  }
  input,
  textarea {
    margin-top: 5rem;
    font-size: 1.5rem;
    font-family: "Montserrat", sans-serif;
    color: ${colors.dark1};
    padding: 1.5rem 2rem;
    border-radius: 15px;
    background-color: white;
    border: none;
    border-left: 8px solid transparent;
    width: 50%;
    display: block;
    transition: all 0.3s;
    ::-webkit-input-placeholder {
      font-family: "Montserrat", sans-serif;
      color: ${colors.mainColorDark};
    }
    :focus {
      outline: none;
      border-left: 8px solid green;
      :invalid {
        border-left: 8px solid red;
      }
    }
    :placeholder-shown + label span {
      opacity: 0;
      visibility: hidden;
      transform: translateY(4rem);
    }
  }
  input[type="submit"] {
    margin-top: 5rem;
    font-size: 2rem;
    padding: 1.5rem 2rem;
    border-radius: 15px;
    border: none;
    color: ${colors.mainColorDark};
    :hover {
      cursor: pointer;
      transform: translateY(-3px);
      box-shadow: 0 0.5rem 1rem black;
    }
  }
`

const ContactForm = () => (
  <React.Fragment>
    <h2>Reach out</h2>
    <form name="contact" method="POST" data-netlify="true" css={formStyles}>
      <div>
        <label htmlFor="name">
          <input
            name="name"
            id="name"
            aria-labelledby="name"
            required
            placeholder="Name"
            type="text"
          />
          <span>Name</span>
        </label>
      </div>
      <div>
        <label htmlFor="email">
          <input
            name="email"
            id="email"
            aria-label="email"
            required
            placeholder="Email"
            type="email"
          />
          <span>Email</span>
        </label>
      </div>
      <div>
        <label htmlFor="message">
          <textarea
            name="message"
            id="message"
            aria-label="message"
            required
            rows="20"
            placeholder="Your message"
          />
          <span>Your message</span>
        </label>
      </div>
      <input type="submit" value="Submit" />
    </form>
  </React.Fragment>
)
export default ContactForm
