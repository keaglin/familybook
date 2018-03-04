import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class PeopleList extends Component {

  render() {
    let people = this.props.people
    console.log('people is ', people)
    return(
      <div>
        {
          people.map((person, index) => {
            return (<li key={index}>
              <Link to = {{
                pathname: `/people/${person.name}`, 
                state: {person:person}
              }}>
                {person.name}
              </Link>
            </li>)
          })
        }
      </div>
    )
  }
}

export default PeopleList