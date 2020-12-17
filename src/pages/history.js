import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const HistoryPage = () => (
  <Layout>
    <SEO title="History" />
    <h1>History</h1>
    <p>Welcome to Songs of the Seas</p>
    <p>This site is still in development, come back in a few weeks to see the progress :)</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default HistoryPage
