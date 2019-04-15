import React from "react"
import { css } from "@emotion/core"
const CallToActionBtn = props => (
  <svg
    css={css`
      position: absolute;
      left: ${props.horizontalPosition};
      top: ${props.verticalPosition};
      margin-top: 10rem;
      transform: translate(
        -${props.horizontalPosition},
        -${props.verticalPosition}
      );
      width: 21rem;
      height: 8rem;
      rect {
        fill: transparent;
        stroke: white;
        stroke-width: 4px;
        stroke-dasharray: 13rem 35rem;
        stroke-dashoffset: 24rem;
        transition: stroke 0.2s, stroke-dasharray 0.6s 0.2s ease;
      }
      text {
        font-size: 2.5rem;
        fill: white;
        transition: fill 0.2s;
      }
      &:hover,
      svg:active {
        rect {
          stroke-dasharray: 54.5rem 0;
          stroke: #00d4d4;
        }
        text {
          fill: #00d4d4;
        }
      }
    `}
  >
    <a href={props.linkTo}>
      <rect x="5" y="5" rx="35px" ry="35px" width="200px" height="70px" />
      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
        {props.text}
      </text>
    </a>
  </svg>
)

export default CallToActionBtn
