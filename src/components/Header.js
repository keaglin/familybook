import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'

const Header = () => {

  return(
    <header>
      <nav>
        <div className="nav-wrapper green darken-1">
          <Link to="/" className="brand-logo center">Family Book</Link>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/stocks">People</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header