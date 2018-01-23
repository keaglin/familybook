import React, { Component } from 'react'

class PersonDetail extends Component {
  // pass in people from props
  // form to edit the selected person
  // handler methods
  // state props to hold input
  render() {
    console.log(this.props)
    return (
      <div>
      {this.props.location.state.person.name}
      </div>
    )
  }
}

export default PersonDetail