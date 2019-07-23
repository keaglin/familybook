import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return(
      <header>
        <nav>
          <div className="nav-wrapper teal lighten-1">
            <Link to="/" className="brand-logo center">Johson &amp; Jones Family Book</Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to="/">About</Link></li>

              <li><Link to="/">FAQ</Link></li>
              <li><Link to="/people">Browse</Link></li>
            </ul>
          </div>
        </nav>
      </header>
  )
}

export default Header