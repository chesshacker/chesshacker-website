import './App.css'; // TODO: should this be somewhere else?
import React, { Component } from 'react';
import Page from './Page';
import About from './About';
import Projects from './Projects';

import { Router, Route, IndexRedirect, browserHistory } from 'react-router'

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Page}>
          <IndexRedirect to="/about" />
          <Route path="about" component={About} />
          <Route path="projects" component={Projects} />
        </Route>
      </Router>
    );
  }
}

export default App;
