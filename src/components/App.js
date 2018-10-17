import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './LandingPage.js';
import Portfolio from './Portfolio';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage} />
          <Route path="/portfolio" component={Portfolio} />
        </div>
      </Router>
    );
  }
}
