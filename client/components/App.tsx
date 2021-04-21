import * as React from 'react';
import Login from './Login';
import MainContainer from './MainContainer';
import SignUp from './SignUp';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export interface HelloWorldProps {
  userName: string;
  lang: string;
}

{
  /* <h1>
Hi {props.userName} from React! Welcome to {props.lang}!
</h1> */
}
//exact find the exact path else would get first matching pattern
export const App = (props: HelloWorldProps) => (
  <div>
    <Router>
      <Navbar />
      <Switch>
        {/* <Route path="/" exact /> */}
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/" exact>
          <MainContainer />
        </Route>
      </Switch>
    </Router>
  </div>
);
