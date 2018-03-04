import React, { Component } from 'react'
import { CLIENT_URL }       from '../constants'
import axios                from 'axios'
import PeopleList           from './PeopleList'

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
    return (
      <div>
        <PeopleList people={people} />
      </div>
    )
  }
}

export default PeopleContainer