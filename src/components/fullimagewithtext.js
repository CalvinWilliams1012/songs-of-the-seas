import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import './fullimagewithtext.css'

const FullImageWithText = ({ imageInfo }) => {
  const { alt = '', childImageSharp, image ,text} = imageInfo

    return(
        <div className="container">
            {(Boolean(image) && Boolean(image.childImageSharp)) ? (      
                <Img fluid={image.childImageSharp.fluid} alt={alt} />
            ) : null }

            {Boolean(childImageSharp) ? (
                <Img fluid={childImageSharp.fluid} alt={alt} />
            ) : null }

            {(Boolean(image) && typeof image === 'string') ? (
                <img src={image} alt={alt} />
            ): null }
            <div>
                <h2 className="text-block">{text}</h2>
            </div>
        </div>
    )
}

FullImageWithText.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
}

export default FullImageWithText
