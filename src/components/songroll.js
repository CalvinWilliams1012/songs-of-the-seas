import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery} from 'gatsby'


class SongRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div>
        {posts && posts.map(({ node: post }) => (
            <div key={post.id}>
              <article>
                <header>                    
                  <Link
                      to={post.fields.slug}
                    >
                  <p>
                      {post.frontmatter.title}
                  </p>
                  </Link>
                </header>
              </article>
            </div>
          ))}
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
