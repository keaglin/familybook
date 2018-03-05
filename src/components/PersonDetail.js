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
      <div>
        <div className="row">
          <div className="col s12">
            <h1 className="center">{person.name}</h1>
          </div>
        </div>
        <div className="row">
          {/* <img className='img-person'  src={person.imageUrl} alt="person-cover" /> */}
          <div className="col s6">
            <h5>Essentials</h5>
            <p>Born: {person.birthDate}</p>
            <p>Died: {person.deathDate}</p>
            <p>Spouse/Partner: {person.spouse}</p>
            <p>Location: {person.location}</p>
            <p>Occupation: {person.occupation}</p>
          </div>
          <div className="col s6">
            <h5>About</h5>
            <p>{person.story}</p>
          </div>
        </div>
          <div className="row">
            <div className="col s4 center">
              <button className="btn white">
                <Link to='/people'>Back</Link>
              </button>
            </div>
            <div className="col s4 center">
              <button className="btn white">
                <Link to={{
                  pathname: `/people/${person.name}/edit`,
                  state: {person: person}
                }}>
                  Edit
                </Link>
              </button>
            </div>
            <div className="col s4 center">
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
