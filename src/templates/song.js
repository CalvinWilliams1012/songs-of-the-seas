import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TagList from "../components/taglist"
import YoutubeVideo from "../components/youtube"


const SongTemplate = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <Layout>
      <div className="alert info">
      <strong>Info!</strong> You seem to have navigated to a song, these are still accessible, but you shouldn't see any links on my site to here. I have depricated storing lyrics on this site, party due to zero click google searches increasing, and me providing little value with a large time investment required. You can find all kinds of lyrics in <Link to="/sea-shanty-books/">various sea shanty books.</Link>
      </div>  
      <SEO title={frontmatter.title} />
      <h1 className="songLyrics" >{frontmatter.title}</h1>
      <div className="songLyrics" dangerouslySetInnerHTML={{__html: markdownRemark.html }}></div>
      <div className="alert info">
      <strong>Info!</strong> Lyrics don't seem right? Due to the nature of sea shanties, many different variations exist. <Link to="/contact">Contact me</Link> if you believe any song should be updated
      </div>  
      {frontmatter.tags && frontmatter.tags.some(tag => tag === "Historical") ? 
        <div className="alert info">
        <strong>Info!</strong> This song is tagged as <Link to="/songtags/Historical/">Historical</Link> which means the lyrics are from a historical rendition, for example from a historical <Link to="/sea-shanty-books/">Book.</Link>
        </div>  
      : null}
      <TagList tags={frontmatter.tags} tagpath="songtags" />
      {frontmatter.youtube ?(
        frontmatter.youtube.split(',').map((link)=>(
          <YoutubeVideo video={link} />
        ))
      ): null}
    </Layout>
  )
}

export default SongTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
        youtube
      }
    }
  }
`