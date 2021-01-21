import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SongRoll from "../components/songroll"
import FullImageWithText from "../components/fullimagewithtext"

const SongsPage = ({data}) => (
  <Layout>
    <SEO title="Songs" />
    <FullImageWithText
      imageInfo={{
        image: data.file,
        alt: 'painting of sailing ship mostly in the colour blue with large brush strokes ',
        text: 'Songs',
      }}
    />
    <p>Index of songs:</p>
    <SongRoll/>
  </Layout>
)



export const query = graphql`
  {
    file(relativePath: {eq: "dark-ocean-american-ship.jpg"}) {
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default SongsPage