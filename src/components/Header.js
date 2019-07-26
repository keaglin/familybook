import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return  (
      <header>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <div className="navbar-item">
              <Link to="/">Johnson &amp; Jones Family Book</Link>
            </div>
            <div className="navbar-burger"></div>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <Link to="/people">Browse</Link>
              </div>
              <div className="navbar-item">
                <Link to="/about">About</Link>
              </div>
              <div className="navbar-item">
                <Link to="/faq">FAQ</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
  )
}

export default Header