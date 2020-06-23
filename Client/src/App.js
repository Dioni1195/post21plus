import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from './views/Singin';
import SignUp from './views/Signup';
import Feed from './views/Feed';
import AuthComponent from './components/AuthComponent/AuthComponent'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <AuthComponent>
        <Route path="/:feed" component={Feed} />
        </AuthComponent>
      </Switch>
    </Router>
  );
}

export default App;
