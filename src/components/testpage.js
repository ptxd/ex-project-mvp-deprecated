import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const testpage = () => (
  <div>
       <ul>
        <li><Link to="/">LandingPage</Link></li>
        <li><Link to="/about">testpage</Link></li>
      </ul>

      <hr/>

    <h2>Home</h2>
  </div>
)

export default testpage;