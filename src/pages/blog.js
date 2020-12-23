import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogRoll from "../components/blogroll"

const BlogsPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <p>Welcome to Songs of the Seas</p>
    <p>This site is still in development, come back in a few weeks to see the progress :)</p>
    <BlogRoll/>
  </Layout>
)

export default BlogsPage
