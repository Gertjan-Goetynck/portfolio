import React from "react"

const skills = [
  {
    name: "HTML5",
  },
  {
    name: "CSS3",
  },
  {
    name: "SASS",
  },
  {
    name: "PHP",
  },
  {
    name: "JavaScript",
  },
  {
    name: "React",
  },
]

const SkillList = () => (
  <React.Fragment>
    <h2>My skills</h2>
    {skills.map(skill => (
      <p>{skill.name}</p>
    ))}
  </React.Fragment>
)

export default SkillList
