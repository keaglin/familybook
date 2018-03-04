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
    if (this.state.toDashboard) return <Redirect to='/people' />
    return (
      <div>
        <div>
          <h1 className="center">{person.name}</h1>
          <div>
            {/* <img className='img-person'  src={person.imageUrl} alt="person-cover" /> */}
            <p>Written by: {person.author}</p>
            <p>Published: {person.published}</p>
            <p>Quality (out of 5): {person.quality}</p>
            <p>Favorite Quote: {person.quote}</p>
            <p>Owner: {person.owner}</p>
            
            <button>
              <Link to={{
                pathname: `/people/${person.name}/edit`,
                state: {person: person}
              }}>
                Edit
              </Link>
            </button>
            <button onClick={this.handleDelete}>
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
