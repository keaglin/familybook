import React, { Component } from 'react'
import { CLIENT_URL }       from '../constants'
import axios                from 'axios'
import PeopleList           from './PeopleList'
import {Link}               from 'react-router-dom'

class PeopleContainer extends Component {
  state = {
    people: []
  }

  componentDidMount() {
    axios.get(`${CLIENT_URL}`)
      .then(response => this.setState({ people: response.data.people }))
  }

  render() {
    let people = this.state.people
    console.log(people)
    return (
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
        <div>
          <h4>Add Family Member</h4>
          <input type="text" placeholder="email" onChange={this.handleEmail} />
          <input type="password" placeholder="password" onChange={this.handlePassword} />
          <input type="password" placeholder="confirm password" onChange={this.handlePwConfirm} />
          <input type="button" value="Submit" onClick={this.handleSubmit} />
          {/* {isValid && <p>Valid!</p>} */}
        </div>

      </div>
    )
  }
}

export default PeopleContainer