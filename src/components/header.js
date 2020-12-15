import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <header className="header-nav">
      <h1 className="header-h1">
        <Link
        to="/"
        className="header-button"
        >
          {siteTitle}
        </Link>   
      </h1>
   
      <Link
          to="/about"
          className="header-button"
        >
          About
      </Link>
      <Link
          to="/lyrics"
          className="header-button"
        >
          Lyrics
      </Link>
      <Link
          to="/blog"
          className="header-button"
        >
          Blog
      </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
