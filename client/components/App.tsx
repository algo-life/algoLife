import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';



export interface HelloWorldProps {
  userName: string;
  lang: string;
}


{/* <h1>
Hi {props.userName} from React! Welcome to {props.lang}!
</h1> */}

export const App = (props: HelloWorldProps) => (
  <Router>
 <Switch>
   <Route path='/login'>
     
   </Route>
   <Route path= 'signup' />
   <Route path='/main'/>
 </Switch>


  </Router>

);
