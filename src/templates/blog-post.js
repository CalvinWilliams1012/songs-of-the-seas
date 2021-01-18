import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TagList from "../components/taglist"

const BlogPostTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const {frontmatter } = markdownRemark;
  return (
    <Layout>
       <SEO title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <p className='blogdate'>{frontmatter.date}</p>
      <p>{frontmatter.description}</p>
      <div dangerouslySetInnerHTML={{__html:markdownRemark.html}}></div>
      <TagList tags={frontmatter.tags} tagpath="blogtags" />
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
        tags
      }
    }
  }
`