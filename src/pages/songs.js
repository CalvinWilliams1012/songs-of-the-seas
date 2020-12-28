import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SongRoll from "../components/songroll"

const SongsPage = () => (
  <Layout>
    <SEO title="Songs" />
    <h1>Songs</h1>
    <p>Index of songs in alphabetical order:</p>
    <SongRoll/>
  </Layout>
)

export default SongsPage
