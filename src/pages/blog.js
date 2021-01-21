import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogRoll from "../components/blogroll"
import FullImageWithText from "../components/fullimagewithtext"

const BlogsPage = ({data}) => (
  <Layout>
    <SEO title="Blog" />
    <FullImageWithText
      imageInfo={{
        image: data.file,
        alt: 'old painting of the ocean and some rocks on a cloudy day with rays of sun shining through ',
        text: 'Blog',
      }}
    />
    <BlogRoll/>
  </Layout>
)

export const query = graphql`
  {
    file(relativePath: {eq: "ship-painting-with-light-through-clouds.jpg"}) {
      childImageSharp{
        fluid{
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default BlogsPage
