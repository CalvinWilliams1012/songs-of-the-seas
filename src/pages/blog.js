import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogRoll from "../components/blogroll"

const BlogsPage = () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <BlogRoll/>
  </Layout>
)

export default BlogsPage
