import * as React from 'react';
import { connect } from 'react-redux';
import Login from './Login';
import MainContainer from './MainContainer';
import SignUp from './SignUp';
import Navbar from './Navbar';
import AlgoSubmit from './AlgoSubmit';
import Profile from './Profile';
import Landing from './Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { algo } from '../constants/mockData';

const mapState = (state: any) => ({
  user: state.user,
  curAlgo: state.code.curAlgo,
});

const App = (props: any) => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Landing user={props.user} />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/signup" exact>
            <SignUp />
          </Route>
          {props.curAlgo ? (
            <Route path="/main" exact>
              <MainContainer user={props.user} algorithm={props.curAlgo} />
            </Route>
          ) : null}
          {/* {algo ? (
          <Route path="/main" exact>
            <MainContainer user={props.user} algorithm={algo} />
          </Route>
        ) : null} */}
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
};

export default connect(mapState)(App);
