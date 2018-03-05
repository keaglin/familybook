import React from 'react'
import { Row, Col } from 'react-materialize'
const Footer = () => {

  return(
    <footer>
      <Row>
        <Col s={3}>
          <div>&copy; 2018 Kevon Eaglin.</div>
        </Col>
        <Col s={3}></Col>
        <Col s={3}></Col>
        <Col s={3}>
          <div>Made with &hearts; in DC.</div>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer