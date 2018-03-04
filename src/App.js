import React, { Component } from 'react'
import Header               from './components/Header'
import Footer               from './components/Footer'
import Index                from './components/Index'
import PeopleContainer      from './components/PeopleContainer'
import PersonDetail         from './components/PersonDetail'
import PersonEdit           from './components/PersonEdit'
import { Switch, Route }    from 'react-router-dom'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <main>
            <Switch>
              <Route exact path='/' render={() => (<Index />)}/>
              <Route exact path='/people' render={(props) => (<PeopleContainer {...props}/>) } />
              <Route path='/people/:name/edit' render={(props) => (<PersonEdit {...props}/>)} />              
              <Route path='/people/:name' render={(props) => (<PersonDetail {...props}/>)} />              
              {/* <Route exact path='/books/add'     render={()      => (<ItemAdd />)} />
              <Route path='/books/:title/edit'   render={(props) => (<ItemEdit {...props} />)} />
              <Route exact path='/records'       render={(props) => (<RecordContainer {...props}/>)}/>
              <Route exact path='/records/add'   render={()      => (<RecordAdd />)} />
              <Route path='/records/:title/edit' render={(props) => (<RecordEdit {...props} />)} />
              <Route path='/records/:title'      render={(props) => (<RecordDetails {...props}/>)} />
              <Route exact path='/users'         render={()      => (<UserAuth />)} /> */}
              <Route path='/*' render={() => (<Index />)} />
            </Switch>
          </main>
        <Footer />
      </div>
    )
  }
}

export default App
