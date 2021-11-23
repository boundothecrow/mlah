import { Route, HashRouter } from 'react-router-dom';

import Intro from './components/Intro';
import Game from './components/Game';

import './scss/App.scss';


function App() {
  return (
    <div className="App">
      <h1>Mad Libs Against Humanity</h1>
      <HashRouter>
        <Route exact path="/" component={Intro} />
        <Route path="/game" component={Game} />
      </HashRouter>
    </div>
  );
}

export default App;
