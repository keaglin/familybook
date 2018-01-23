import React, { Component } from 'react'
import logo                 from './logo.svg'
import Header               from './components/Header'
import Footer               from './components/Footer'
import Index                from './components/Index'
import People               from './components/People'
import PersonDetail         from './components/PersonDetail'
import { CLIENT_URL }       from './constants'
import { Switch, Route }    from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <main>
            <Switch>
              <Route path="/people" render={() => (<People />) } />
              <Route path="/people/:name" render={() => (<PersonDetail />)}/>
              <Route path="/" render={() => (<Index />)}/>
          </Switch>
          </main>
        <Footer />
      </div>
    )
  }
}

export default App
