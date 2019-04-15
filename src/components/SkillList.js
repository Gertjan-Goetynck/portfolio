import React from "react"
import SkillListItem from "./SkillListItem"
import { css } from "@emotion/core"
import { breakpoints } from "../utils/styleGuide"

const SkillListStyles = css`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  justify-content: space-between;
  @media (${breakpoints.medium}) {
    justify-content: center;
  }
`

const skills = [
  {
    name: "HTML5",
    url: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  },
  {
    name: "CSS3",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3",
  },
  {
    name: "SASS",
    url: "https://sass-lang.com/",
  },
  {
    name: "PHP",
    url: "https://www.php.net/",
  },
  {
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React",
    url: "https://reactjs.org/",
  },
]

const SkillList = () => (
  <React.Fragment>
    <h2>My skills</h2>
    <ul css={SkillListStyles}>
      {skills.map(skill => (
        <SkillListItem key={skill.name} name={skill.name} url={skill.url} />
      ))}
    </ul>
  </React.Fragment>
)

export default SkillList
