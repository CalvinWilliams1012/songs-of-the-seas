import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullImageWithText from "../components/fullimagewithtext"

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="About" />
    <FullImageWithText
      imageInfo={{
        image: data.file,
        alt: 'person holding up a "hello" sticker with a smiley face ',
        text: 'About', 
      }}
    />
    <p>My name is Calvin Williams, I created this site as I found that while similar sites existed, they seemed to be 10+ years old with no updates. As I was already becoming interested in Shanties, I thought I would give a shot at developing a site about them.
         I originally created this without any knowledge of Sea Shanties other than the fact I liked them... I hope to have captured the correct information, <Link to="/contact">contact me</Link> otherwise!</p>
    <p>You can find my personal site <a href="https://calvinwilliams.ca">here</a></p>
  </Layout>
)

export const query = graphql`
  {
    file(relativePath: {eq: "hello-image.jpg"}) {
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default AboutPage
