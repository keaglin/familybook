import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../constants'
import '../css/PersonAdd.css'
import { Redirect }         from 'react-router-dom'

class PersonAdd extends Component {
  state = {
    person: {},
    toDashboard: false
  }

  handleTitle = (e) => {
    if (e.target.value) this.setState({person: Object.assign(this.state.person, {title: e.target.value})})
  }
  handleAuthor = (e) => {
    if (e.target.value) this.setState({person: Object.assign(this.state.person, {author: e.target.value})})
  }
  handleQuality = (e) => {
    if (e.target.value) this.setState({person: Object.assign(this.state.person, {quality: e.target.value})})
  }
  handleQuote = (e) => {
    if (e.target.value) this.setState({person: Object.assign(this.state.person, {quote: e.target.value})})
  }
  handleOwner = (e) => {
    if (e.target.value) this.setState({person: Object.assign(this.state.person, {owner: e.target.value})})
  }
  handleImage = (e) => {
    if (e.target.value) this.setState({person: Object.assign(this.state.person, {imageUrl: e.target.value})})
  }

  handleSubmit = () => {
    axios.post(`${CLIENT_URL}/people/${this.state.person.title}`, {person: this.state.person})
      .then(this.setState({ toDashboard: true }))
      .catch(err => console.log('Woops!', err))
  }


  render() {
    let person = this.state.person
    console.log('person is', person)
    if (this.state.toDashboard === true) {
      return <Redirect to={{
        pathname: `/people/${person.title}`,
        state: {person:person}
      }}/>
    }
    return(
      <div>
        <div>
            <h4>Add person</h4>
            <input type="text"   placeholder='Name'            onChange={this.handleTitle} />
            <input type="text"   placeholder='Birthdate'           onChange={this.handleAuthor} />
            <input type="text"   placeholder='Death date'    onChange={this.handleQuality} />
            <input type="text"   placeholder='Location'   onChange={this.handleQuote} />
            <input type="text"   placeholder='Occupation'            onChange={this.handleOwner} />
            <input type="text"   placeholder='Spouse'            onChange={this.handleOwner} />
            <input type="text"   placeholder='Parents'            onChange={this.handleImage} />
            <input type="text"   placeholder='Kids'            onChange={this.handleImage} />
            <input type="text"   placeholder='About'            onChange={this.handleImage} />

            <input type="button" className='submit-add-btn'     value="Submit"  onClick={this.handleSubmit} />
          </div>
      </div>
    )
  }
}

export default PersonAdd
