import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../constants'
// import '../css/ItemEdit.css'
import { Redirect }           from 'react-router-dom'
// import Col from 'react-materialize'

class PersonEdit extends Component {
  state = {
    person: this.props.location.state.person,
    toDashboard: false
  }

  // handleInput = (e) => {
  //   console.log(e.target)
  //   // if (e.target.value) this.setState({person: Object.assign(this.state.person, {name: e.target.value})})
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    const person = new FormData(e.target)
    // console.log(person)
    console.log(typeof(person.get('name')))
    axios({
      method: 'put',
      url: `${CLIENT_URL}/${this.state.person.name}`,
      data: {
        name: person.get('name'),
        birthDate: person.get('birthDate'),
        deathDate: person.get('deathDate'),
        spouse: person.get('spouse'),
        location: person.get('location'),
        occupation: person.get('occupation'),
        story: person.get('story')
      }
    })
    //   .then(this.setState({ toDashboard: true }))
      .catch(err => console.log('Woops!', err))
    // axios.put(`${CLIENT_URL}/people/${this.state.person.name}`, data)
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
                  <input id="name" name="name" type="text" defaultValue={person.name} />
                  <label className={person.name && "active"} htmlFor="name">Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="spouse" name="spouse" type="text" defaultValue={person.spouse} />
                  <label className={person.spouse && "active"} htmlFor="spouse">Spouse/Partner</label>
                </div>
                <div className="input-field col s6">
                  <input id="birthDate" name="birthDate" type="text" defaultValue={person.birthDate} />
                  <label className={person.birthDate && "active"} htmlFor="birthDate">Birthdate</label>
                </div>
                <div className="input-field col s6">
                  <input id="deathDate" name="deathDate" type="text" defaultValue={person.deathDate} />
                  <label className={person.deathDate && "active"} htmlFor="deathDate">Died</label>
                </div>
                <div className="input-field col s6">
                  <input id="locaiton" name="location" type="text" defaultValue={person.location} />
                  <label className={person.location && "active"} htmlFor="location">Location</label>
                </div>
                <div className="input-field col s6">
                {/* <Col class="input-field" s={6}> */}
                  <input id="occupation" name="occupation" type="text" defaultValue={person.occupation} />
                  <label className={person.occupation && "active"} htmlFor="occupation">Occupation</label>
                {/* </Col> */}
                </div>
                <div className="input-field col s12">
                  <textarea className="materialize-textarea" id="story" name="story" type="text" defaultValue={person.story}></textarea>
                  <label className={person.story && "active"} htmlFor="story">About</label>
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
