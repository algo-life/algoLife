import * as React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import MainContainer from './MainContainer';
import SignUp from './SignUp';
import Navbar from './Navbar';
import AlgoSubmit from './AlgoSubmit';
import Profile from './Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const mapState = (state: any) => ({
  user: state.user,
});

const App = (props: any) => (
  <div>
    <Router>
 
          {/* <Profile /> */}
      
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Login />
          {/* <MainContainer /> */}
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/main" exact>
          <MainContainer
            user={props.user}
            algorithm={props.user.algorithms[2]}
          />
        </Route>
        <Route path="/algoform" exact>
          <AlgoSubmit />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
      </Switch>
    </Router>
  </div>
);

export default connect(mapState)(App);
