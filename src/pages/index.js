import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"


const IndexPage = ({data}) => (
  <Layout heroImage={data.file.childImageSharp.fluid}>
    <SEO title="Home" />
    <h1>Welcome to Songs of the Seas</h1>
    <p>This site is for everything sea shanty!</p>
    <p>For more details on the history of sea shanties visit our <Link to='/history'>History page</Link>.</p>
  </Layout>
)


export const query = graphql`
  {
    file(relativePath: {eq: "sailboat-wide.jpg"}) {
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
