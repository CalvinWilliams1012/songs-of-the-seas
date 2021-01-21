import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FullImageWithText from "../components/fullimagewithtext"
import { graphql, Link } from "gatsby"


const HistoryPage = ({data}) => (
  <Layout>
    <SEO title="History" />
    <FullImageWithText
      imageInfo={{
        image: data.file,
        alt: 'Large sailing ship sailing into a sunrise/sunset ',
        text: 'History',
      }}
      />
    <p>Before our modern ships and airplanes, to transport people or goods across the ocean, sailing ships were used. </p>
    <p> While we now can cross the atlantic in 6-7 hours by plane and 6-8 days for a modern ship, these sailing ships took many weeks if not many months. Along with the extended length of the trips, these ships required man power to sail, and being at sea, the men did not have many forms of entertainment.</p>
    <p>With all this taken into account, we can see why people started to create songs of the seas!</p>
    <p>Sea Shanties(also can be referred to by 'chanty' or 'chanteys') are the most iconic type of seafaring music. Shanties are work songs that were sung by sailors while performing labor on large sailing ships.</p>

    <p>The shanties were used to synchronize or coordinate tasks that required team work as well as entertain and keep up the moral of the sailors while performing the difficult yet monotonous tasks.</p>
    <p>Research on the origin of the word shanty is inconclusive, however it is generally accepted that this originates from the French word "Chanter", which means "to sing".</p>

    <p>Shanties as a genre are very malleable due to the need for the ability to condense or lengthen the song to fit the current task.</p>
    <p>In general, the musical structure of a sea shanty is a call and a response, where the "shantyman" would make a call, and the rest of the workers in chorus would respond while performing the task like pulling rope in unison.
    There are some exceptions to this, as not all shanties required these breaks and bursts, such as raising anchor. This can be further explained by the <Link to="/types-of-shanties/">types of shanties</Link></p>
    

  </Layout>
)

export const query = graphql`
  {
    file(relativePath: {eq: "ships-at-port-painting.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default HistoryPage