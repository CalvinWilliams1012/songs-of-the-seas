import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullImageWithText from "../components/fullimagewithtext"
import { graphql, Link } from "gatsby"


const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <FullImageWithText
      imageInfo={{
        image: data.file,
        alt: 'painting of sailing ship mostly in the colour blue with large brush strokes ',
        text: 'Welcome',
      }}
    />
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
