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
          to="/history"
          className="header-button"
        >
          History
      </Link>

      <Link
          to="/songs"
          className="header-button"
        >
          Songs
      </Link>
      <Link
          to="/about"
          className="header-button"
        >
          About
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
