import React, { Component } from 'react'
import axios                from 'axios'
import { CLIENT_URL }       from '../constants'
import '../css/ItemEdit.css'

import {Redirect}           from 'react-router-dom'

class ItemEdit extends Component {
  state = {
    book: this.props.location.state.book,
    toDashboard: false
  }

  handleTitle = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {title: e.target.value})})
  }
  handleAuthor = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {author: e.target.value})})
  }
  handleQuality = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {quality: e.target.value})})
  }
  handleQuote = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {quote: e.target.value})})
  }
  handleOwner = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {owner: e.target.value})})
  }
  handleImage = (e) => {
    if (e.target.value) this.setState({book: Object.assign(this.state.book, {imageUrl: e.target.value})})
  }

  handleSubmit = () => {
    axios.put(`${CLIENT_URL}/books/${this.state.book.title}`, {book: this.state.book})
      .then(this.setState({ toDashboard: true }))
      .catch(err => console.log('Woops!', err))
  }

  render() {
    let book = this.state.book
    console.log('book is', book)
    if (this.state.toDashboard === true) {
      return <Redirect to={{
        pathname: `/books/${book.title}`,
        state: {book:book}
      }}/>
    }
    return (
      <div>
        <h1>{book.title}</h1>
        <div>
            <h4>Edit Book</h4>
            <input type="text" placeholder={book.title}   onChange={this.handleTitle} />
            <input type="text" placeholder={book.author}  onChange={this.handleAuthor} />
            <input type="text" placeholder={book.quality} onChange={this.handleQuality} />
            <input type="text" placeholder={book.quote}   onChange={this.handleQuote} />
            <input type="text" placeholder={book.owner}   onChange={this.handleOwner} />
            <input type="text" placeholder={book.imageUrl}   onChange={this.handleImage} />
            <input type="button" className="edit-btn" value="submit" onClick={this.handleSubmit} />
          </div>
      </div>
    )
  }
}

export default ItemEdit
