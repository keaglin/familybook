import React from 'react'
import { Link } from 'react-router-dom'

const PeopleList = (props) => {
  let people = props.people
  console.log('people is ', people)
  return(
    <div>
      <ul>
        {
          people.map((person, index) => {
            return (<li key={index}>
              <Link to = {{
                pathname: `/people/${person.name}`, 
                state: {person:person}
              }}>
                {person.name}
              </Link>
            </li>)
          })
        }
      </ul>
      <div>
        <button className="btn white">
          <Link to ='/people/add'>Add</Link>
        </button>
      </div>
    </div>
  )
}

export default PeopleList