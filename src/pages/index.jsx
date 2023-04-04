import * as React from "react"
import Layout from "../components/layout"
import About from "../components/About/About"
import Experince from "../components/Experince/Experince"
import ProjectSection from "../components/Portfolio/ProjectSection"
import Contact from "../components/Contact/Contact"

const IndexPage = () => {
  return (
    <Layout>
    <About />
    <Experince />
    <ProjectSection />
    <Contact />
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
