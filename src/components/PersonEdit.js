import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../constants'
// import '../css/ItemEdit.css'
import { Redirect }           from 'react-router-dom'

class ItemEdit extends Component {
  state = {
    person: this.props.location.state.person,
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
            <h4>Edit {person.name}'s Info</h4>
            <form>
              <input type="text" placeholder={`Born: ${person.name}` && person.name || 'Name'}   onChange={this.handleTitle} />
              <input type="text" placeholder={`Born: ${person.birthDate}` && person.birthDate || 'Birth date'}   onChange={this.handleTitle} />
              <input type="text" placeholder={`Died: ${person.deathDate}` && person.deathDate || 'Death date'}  onChange={this.handleAuthor} />
              <input type="text" placeholder={person.spouse || 'Spouse'} onChange={this.handleQuality} />
              <input type="text" placeholder={person.location}   onChange={this.handleQuote} />
              <input type="text" placeholder={person.occupation}   onChange={this.handleOwner} />
              <input type="text" placeholder={person.story}   onChange={this.handleImage} />
              <input type="button" className="btn" value="submit" onClick={this.handleSubmit} />
            </form>
          </div>
      </div>
    )
  }
}

export default ItemEdit
