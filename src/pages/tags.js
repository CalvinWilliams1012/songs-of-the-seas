import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"



const TagPage = ({   
    data: {
        allMarkdownRemark: { group },
        site: {
            siteMetadata: { title },
        },
    },
 }) => {
    return(
        <Layout>
        <SEO title={`Tags | ${title}`} />
        <h1>Tags</h1>
            <ul className="taglist">
                {group.map((tag) => (
                <li key={tag.fieldValue}>
                    <Link to={`/tags/${tag.fieldValue}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                    </Link>
                </li>
                ))}
            </ul>
        </Layout>
    )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

export default TagPage