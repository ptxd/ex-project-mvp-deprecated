import React, {Component} from 'react';
import LandingPage from './landing-page';
import testpage from './testpage';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';


const App = () =>

  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/about" component={testpage}/>
    </div>
  </Router>

export default App;