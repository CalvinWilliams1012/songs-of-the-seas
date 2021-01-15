import React from "react"
import PropTypes from 'prop-types'
import {Link} from "gatsby"

function TagList({tags, tagpath}){  
  return (
      <div>
        {tags && tags.length ? (
            <div style={{ marginTop: `4rem` }}>
              <h4>Tags</h4>
              <ul className="taglist">
                  {tags.map((tag) => (
                  <li key={tag + `tag`}>
                      <Link to={`/${tagpath}/${tag}/`}>{tag}</Link>
                  </li>
                  ))}
              </ul>
            </div>
        ) : null}
      </div>
  )

}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.object),
  tagpath: PropTypes.string,
}

export default TagList