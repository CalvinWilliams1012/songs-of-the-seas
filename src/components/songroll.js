import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery} from 'gatsby'


class SongRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        <ul className="taglist">
        {posts && posts.map(({ node: post }) => (
            <li key={post.id}>
              <Link to={post.fields.slug}>
                {post.frontmatter.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

SongRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SongRollQuery {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___title] }
          filter: { frontmatter: { template: { eq: "song" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                template
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <SongRoll data={data} count={count} />}
  />
)
