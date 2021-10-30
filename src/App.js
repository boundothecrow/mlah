import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';

import Intro from './components/Intro';
import Game from './components/Game';

import './scss/App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Route exact path="/" component={Intro} />
          <Route path="/game" component={Game} />
        </HashRouter>
      </div>
    );
  }
}

export default App;
