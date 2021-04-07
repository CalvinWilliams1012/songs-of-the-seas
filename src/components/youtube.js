import React from "react"
import PropTypes from 'prop-types'

function YoutubeVideo({video}){  
  return (
      <div className="videoWrapper">
        <iframe title="youtube-video" width="1680" height="690"  src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
        </iframe>
      </div>
  )

}

YoutubeVideo.propTypes = {
  video: PropTypes.string,
}

export default YoutubeVideo