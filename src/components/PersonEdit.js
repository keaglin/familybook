import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../constants'
// import '../css/ItemEdit.css'
import { Redirect }           from 'react-router-dom'
import Col from 'react-materialize'

class PersonEdit extends Component {
  state = {
    person: this.props.location.state.person,
    toDashboard: false
  }

  handleSubmit = () => {
    axios.put(`${CLIENT_URL}/people/${this.state.person.title}`, {person: this.state.person})
      .then(this.setState({ toDashboard: true }))
      .catch(err => console.log('Woops!', err))
  }

  render() {
    let person = this.state.person
    console.log('person is', person)
    if (this.state.toDashboard) {
      return <Redirect to={{
        pathname: `/people/${person.name}`,
        state: {person:person}
      }}/>
    }
    return (
      <div>
        <h1>{person.name}</h1>
        <div>
          <h4 className="center">Edit {person.name}'s Info</h4>
          <div className="row">
            <form className="col s12" onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input id="name" name="name" type="text" placeholder={person.name} />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="spouse" name="spouse" type="text" placeholder={person.spouse} />
                  <label htmlFor="spouse">Spouse/Partner</label>
                </div>
                <div className="input-field col s6">
                  <input id="birthDate" name="birthDate" type="text" placeholder={person.birthDate} />
                  <label htmlFor="birthDate">Birthdate</label>
                </div>
                <div className="input-field col s6">
                  <input id="deathDate" name="deathDate" type="text" placeholder={person.deathDate} />
                  <label htmlFor="deathDate">Died</label>
                </div>
                <div className="input-field col s6">
                  <input id="locaiton" name="location" type="text" placeholder={person.location} />
                  <label htmlFor="location">Location</label>
                </div>
                <div className="input-field col s6">
                {/* <Col class="input-field" s={6}> */}
                  <input id="occupation" name="occupation" type="text" placeholder={person.occupation} />
                  <label htmlFor="occupation">Occupation</label>
                {/* </Col> */}
                </div>
                <div className="input-field col s12">
                  <textarea className="materialize-textarea" id="story" name="story" type="text" placeholder={person.story}></textarea>
                  <label htmlFor="story">About</label>
                </div>
              </div>
              <div className="center">
                <input type="submit" className="btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PersonEdit
