import React, { Component } from 'react'
import Header               from './components/Header'
import Footer               from './components/Footer'
import Index                from './components/Index'
import PeopleContainer      from './components/PeopleContainer'
import PersonDetail         from './components/PersonDetail'
import PersonEdit           from './components/PersonEdit'
import PeopleAdd            from './components/PersonAdd'
import { Switch, Route }    from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
          <main>
            <Switch>
              <Route exact path='/'            render={() => (<Index />)} />
              <Route exact path='/people'      render={(props) => (<PeopleContainer {...props}/>) } />
              <Route exact path='/people/add'  render={(props) => (<PeopleAdd {...props}/>) } />
              <Route path='/people/:name/edit' render={(props) => (<PersonEdit {...props}/>)} />              
              <Route path='/people/:name'      render={(props) => (<PersonDetail {...props}/>)} />              
              <Route path='/*'                 render={() => (<Index />)} />
            </Switch>
          </main>
        <Footer />
      </div>
    )
  }
}

export default App
