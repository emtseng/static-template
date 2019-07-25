import React from 'react'
import { Route, Link } from 'react-router-dom'

import About from './components/About'
import Projects from './containers/Projects'

export default () => (<div>
  <div id="navbar">
    <div id="navbar-title"><b>EMILY TSENG</b></div>
    <div id="navbar-nav">
      <Link to="/about">about</Link>
      |
      <Link to="/projects">projects</Link>
      </div>
  </div>
  <Route path="/about" component={About} />
  <Route path="/projects" component={Projects} />
  <Route exact path="/" component={About} />
</div>)
