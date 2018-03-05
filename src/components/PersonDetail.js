import React, { Component } from 'react'
import { CLIENT_URL }       from '../constants'
import { Link, Redirect }   from 'react-router-dom'
import axios                from 'axios'


class PersonDetail extends Component {
  state = {
    person: this.props.location.state.person,
    toDashboard: false
  }
  handleDelete = () => {
    axios.delete(`${CLIENT_URL}/people/${this.state.person.name}`)
    .then(this.setState({ toDashboard: true }))
    .catch(err => console.log(err))
  }
  render() {
    let person = this.state.person
    console.log('this.state.person is', this.state.person)
    if (this.state.toDashboard) return <Redirect to='/people' />
    return (
      <div className="row">
        <div className="col s12">
          <h1 className="center">{person.name}</h1>
          <div className="row">
            {/* <img className='img-person'  src={person.imageUrl} alt="person-cover" /> */}
            <p>Born: {person.birthDate}</p>
            <p>Died: {person.deathDate}</p>
            <p>Partner: {person.spouse}</p>
            <p>Location: {person.location}</p>
            <p>Occupation: {person.occupation}</p>
            <h5>About</h5>
            <p>{person.story}</p>
            
            <button className="btn white">
              <Link to={{
                pathname: `/people/${person.name}/edit`,
                state: {person: person}
              }}>
                Edit
              </Link>
            </button>
            <button 
              className="btn white"
              onClick={this.handleDelete}
            >
              <Link to={{
                pathname: `/people/${person.name}`,
                state: {person: person}
              }}>
                Delete
              </Link>
            </button>

          </div>
        </div>

      </div>
    )
  }
}

export default PersonDetail
