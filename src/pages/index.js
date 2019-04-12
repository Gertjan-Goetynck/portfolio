import React from "react"

import Layout from "../components/layout"
import PageSection from "../components/PageSection"
import ContactForm from "../components/ContactForm"
import AboutMe from "../components/AboutMe"
import ProjectList from "../components/ProjectList"
import SkillList from "../components/SkillList"

const IndexPage = () => (
  <Layout>
    <PageSection name="about">
      <AboutMe />
    </PageSection>
    <PageSection name="projects">
      <ProjectList />
    </PageSection>
    <PageSection name="skills">
      <SkillList />
    </PageSection>
    <PageSection name="contact">
      <ContactForm />
    </PageSection>
  </Layout>
)

export default IndexPage
