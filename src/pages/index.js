import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Profile from '../components/Profile'
import AboutMe from '../components/AboutMe'
import PortFolio from '../components/Projects'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'

const IndexPage = () => {
  const aboutMeRef = React.useRef(null)
  const portFolioRef = React.useRef(null)
  const contactRef = React.useRef(null)

  return (
    <Layout>
      <Seo title="RAMA" />
      <Navbar refs={{ aboutMeRef, portFolioRef, contactRef }} />
      <div className="flex flex-col h-screen overflow-hidden overflow-y-auto md:px-24">
        <Profile />
        <div className="md:py-6 md:px-24">
          <div ref={aboutMeRef}>
            <AboutMe />
          </div>
          <div ref={portFolioRef}>
            <PortFolio />
          </div>
          <div ref={contactRef}>
            <Contact />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
