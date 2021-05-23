import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Profile from '../components/Profile'
import Resume from '../components/Resume'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="flex flex-col h-screen md:flex-row overflow-hidden overflow-y-auto">
      <Profile />
      <Resume />
    </div>
  </Layout>
)

export default IndexPage
