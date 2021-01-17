import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import { graphql, Link } from "gatsby"


const IndexPage = ({data}) => (
  <Layout heroImage={data.file.childImageSharp.fluid}>
    <SEO title="Home" />
    <h1>Welcome to Songs of the Seas</h1>
    <p>To learn more about this site visit our <Link to='/about'>About page</Link>, or for more details on the history of the songs visit our <Link to='/history'>History page</Link>.</p>
  </Layout>
)


export const query = graphql`
  {
    file(relativePath: {eq: "sailboat-wide.jpg"}) {
      childImageSharp {
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
