import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from './views/Singin';
import Feed from './views/Feed';
import AuthComponent from './components/AuthComponent/AuthComponent'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        
        <Route path="/" exact component={SignIn} />
        <AuthComponent>
        <Route path="/feed" exact component={Feed} />
        </AuthComponent>
      </Switch>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
