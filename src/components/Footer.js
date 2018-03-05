import React from 'react'
import { Row, Col } from 'react-materialize'
const Footer = () => {

  return(
    <footer className="row">
      <div className="col s2">
        <div className="footer-content">&copy; 2018 Kevon Eaglin</div>
      </div>
      <div className="col s2 offset-s8">
        <div className="footer-content">Made with &hearts; in DC</div>
      </div>
    </footer>
  )
}

export default Footer