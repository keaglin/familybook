import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return  (
      <header>
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
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
        {/* <nav>
          <div className="nav-wrapper teal lighten-1">
            <Link to="/" className="brand-logo center">Johson &amp; Jones Family Book</Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/people">Browse</Link></li>
            </ul>
          </div>
        </nav> */}
      </header>
  )
}

export default Header