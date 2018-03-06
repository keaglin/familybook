import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../constants'
// import '../css/PersonAdd.css'
import { Redirect }         from 'react-router-dom'

class PersonAdd extends Component {
  state = {
    person: {},
    toDashboard: false
  }

  // handleTitle = (e) => {
  //   if (e.target.value) this.setState({person: Object.assign(this.state.person, {title: e.target.value})})
  // }
  // handleAuthor = (e) => {
  //   if (e.target.value) this.setState({person: Object.assign(this.state.person, {author: e.target.value})})
  // }
  // handleQuality = (e) => {
  //   if (e.target.value) this.setState({person: Object.assign(this.state.person, {quality: e.target.value})})
  // }
  // handleQuote = (e) => {
  //   if (e.target.value) this.setState({person: Object.assign(this.state.person, {quote: e.target.value})})
  // }
  // handleOwner = (e) => {
  //   if (e.target.value) this.setState({person: Object.assign(this.state.person, {owner: e.target.value})})
  // }
  // handleImage = (e) => {
  //   if (e.target.value) this.setState({person: Object.assign(this.state.person, {imageUrl: e.target.value})})
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.put(`${CLIENT_URL}/${this.state.person.name}`, {person: this.state.person})
      .then(this.setState({ toDashboard: true }))
      .catch(err => console.log('Woops!', err))
  }


  render() {
    let person = this.state.person
    // console.log('person is', person)
    if (this.state.toDashboard) {
      return <Redirect to={{
        pathname: `/people/${person.name}`,
        state: {person:person}
      }}/>
    }
    return(
      <div>
        <h4 className="center">Add a Person</h4>
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s6">
                <input id="name" name="name" type="text" defaultValue={person.name} onChange={this.handleName} />
                <label className={person.name && "active"} htmlFor="name">Name</label>
              </div>
              <div className="input-field col s6">
                <input id="spouse" name="spouse" type="text" defaultValue={person.spouse} onChange={this.handleSpouse} />
                <label className={person.spouse && "active"} htmlFor="spouse">Spouse/Partner</label>
              </div>
              <div className="input-field col s6">
                <input id="birthDate" name="birthDate" type="text" defaultValue={person.birthDate} onChange={this.handleBirthDate} />
                <label className={person.birthDate && "active"} htmlFor="birthDate">Birthdate</label>
              </div>
              <div className="input-field col s6">
                <input id="deathDate" name="deathDate" type="text" defaultValue={person.deathDate} onChange={this.handleDeathDate} />
                <label className={person.deathDate && "active"} htmlFor="deathDate">Died</label>
              </div>
              <div className="input-field col s6">
                <input id="locaiton" name="location" type="text" defaultValue={person.location} onChange={this.handleLocation} />
                <label className={person.location && "active"} htmlFor="location">Location</label>
              </div>
              <div className="input-field col s6">
              {/* <Col class="input-field" s={6}> */}
                <input id="occupation" name="occupation" type="text" defaultValue={person.occupation} onChange={this.handleOccupation} />
                <label className={person.occupation && "active"} htmlFor="occupation">Occupation</label>
              {/* </Col> */}
              </div>
              <div className="input-field col s12">
                <textarea className="materialize-textarea" id="story" name="story" type="text" defaultValue={person.story} onChange={this.handleStory}></textarea>
                <label className={person.story && "active"} htmlFor="story">About</label>
              </div>
            </div>
            <div className="center">
              <input type="submit" className="btn" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default PersonAdd
