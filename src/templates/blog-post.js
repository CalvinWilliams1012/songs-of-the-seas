import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const {frontmatter } = markdownRemark;
  return (
    <Layout>
       <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <h2>{frontmatter.date}</h2>
      <p>{frontmatter.description}</p>
      <p dangerouslySetInnerHTML={{__html:markdownRemark.__html}}></p>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        description
        title
      }
    }
  }
`