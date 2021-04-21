import * as React from 'react';
import Login from './Login';
import MainContainer from './MainContainer';
import SignUp from './SignUp';
import Navbar from './Navbar';
import AlgoSubmit from './AlgoSubmit';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

export const App = (props: HelloWorldProps) => (
  <div>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <AlgoSubmit />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/main" exact>
          <MainContainer />
        </Route>
      </Switch>
    </Router>
  </div>
);
