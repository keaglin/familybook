import React, { Component } from 'react'

class PeopleList extends Component {

  render() {
    let people = this.props.people
    console.log('people is ', people)
    return(
      <div>
        {
          people.map((person, index) => {
            return <li key={index}><a href={'/people/' + person.name}>{person.name}</a></li>
          })
        }
      </div>
    )
  }
}

export default PeopleList