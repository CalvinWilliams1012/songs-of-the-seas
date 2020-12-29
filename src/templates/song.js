import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const SongTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <div>{frontmatter.lyrics}</div>
      <div className="alert info">
      <strong>Info!</strong> Lyrics don't seem right? Due to the nature of sea shanties, many different variations exist. Contact us if you believe any song should be updated
      </div>  
    </Layout>
  )
}

export default SongTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        lyrics
      }
    }
  }
`