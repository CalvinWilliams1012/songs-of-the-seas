import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ModalMenu from "./modalmenu"
import './header.css'

class Header extends React.Component {
  state = { open: false };

  close = () => {
    this.setState({ open: false })
  }

  open = () => {
    this.setState({ open: true })
  }

  render(){
      return (
    <header className="header-nav">
        <h1 className="header-h1">
          <Link
          to="/"
          className="header-button"
          >
            {this.props.siteTitle}
          </Link>   
        </h1>
        <div className="header-button-wrapper">
          <Link
              to="/history"
              className="header-button"
            >
              History
          </Link>
          <Link
              to="/blog"
              className="header-button"
            >
              Blog
          </Link>
          <Link
              to="/about"
              className="header-button"
            >
              About
          </Link>
          <Link
              to="/contact"
              className="header-button"
            >
              Contact
          </Link>
        </div>
        <ModalMenu show={this.state.open} handleClose={this.close}>
         <Link
              to="/history"
              className="hamburger-header-button"
            >
              History
          </Link>
          <Link
              to="/blog"
              className="hamburger-header-button"
            >
              Blog
          </Link>
          <Link
              to="/about"
              className="hamburger-header-button"
            >
              About
          </Link>
          <Link
              to="/contact"
              className="hamburger-header-button"
            >
              Contact
          </Link>
        </ModalMenu>
        <div onClick={() => this.open()} className="header-hamburger">
          <div className="header-hamburger-div"></div>
          <div className="header-hamburger-div"></div>
          <div className="header-hamburger-div"></div>
        </div>
    </header>
  )
  }

}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
