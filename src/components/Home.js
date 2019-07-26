import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import './home.css'

class Home extends Component {
  render() {
    return (
      <section class="hero is-fullheight">
        <div className="hero-head">
          <header>
            <div className="columns">
              <div className="column is-10 is-offset-1 has-text-centered">
                  <h1 className="title is-1">Johnson &amp; Jones Family Book</h1>
                  <hr />
              </div>
            </div>
          </header>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-6 is-offset-3">
                <div className="field">
                  <label className="label">Who, What, When, or Where?</label>
                  <div className="control has-icons-left">
                    <input className="input is-rounded is-large" type="text" placeholder="Search" />
                      <span class="icon is-medium is-left">
                        <i class="fas fa-search"></i>
                      </span>
                  </div>
                  <p className="help">Search Ideas: a significant year, the name of a person, or the name of a place</p>
                </div>
                <div className="field is-grouped is-grouped-centered">
                  <div className="control">
                    <button className="button is-primary is-rounded" type="submit">Search</button>
                  </div>
                  {/* <div className="control">
                    <button className="button is-primary is-rounded" type="submit">Search</button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <div className="columns">
            <div className="column has-text-centered">
              <h3 className="subtitle is-3">Discover Your Roots</h3>
            </div>
          </div>
        </div>
      </section>
    )
    // return (
    //   <section className="vcenter-parent">
    //     <div className="columns">
    //       <div className="column is-10 is-offset-1">
    //           <h1 className="title is-1">Johnson &amp; Jones Family Book</h1>
    //           <hr />
    //       </div>
    //     </div>
    //     <div className="columns">
    //       <div className="column is-6 is-offset-3">
    //         <div className="field">
    //           <label className="label">Name</label>
    //           <div className="control">
    //             <input className="input is-rounded" type="text" placeholder="Text input" />
    //           </div>
    //           <p class="help">This is a help text</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="columns">
    //       <div className="column">
    //         <h3 className="subtitle is-3">Discover Your Roots</h3>
    //       </div>
    //     </div>
    //   </section>
    // )
  }
}
// {/* <div class="hero-body">
//   <div class="container">
//     <h1 class="title">
//       Fullheight title
//     </h1>
//     <h2 class="subtitle">
//       Fullheight subtitle
//     </h2>
//   </div>
// </div> */}
// {/* <div className="hero">
//   <div class="">
//     <div class="">
//       <input id="searchTerm" type="text" />
//       <label class="active" for="searchTerm">Who, What, Where, or When?</label>
//     </div>
//   </div>
// </div> */}

export default Home