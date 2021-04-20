import * as React from 'react';
import { connect } from 'react-redux';
import { updateUsername, updatePassword, login } from '../actions/actions';

function Login(props:any) {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={props.username} onChange={(e)=>props.updateUsername(e.target.value)} />
        <label htmlFor="pass">Password</label>
        <input id="pas" type="password"  value={props.password} onChange={(e) => props.updatePassword(e.target.value)}/>
        <button id="loginButton" onClick={() => props.login(props.username, props.password)}>Login</button>
      </form>
    </div>
  );
}


//button sends form data to backend
const mapStateToProps = (state: any) => ({
  username: state.form.username,
  password: state.form.password,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateUsername: (newName: string) => dispatch(updateUsername(newName)),
  updatePassword: (newPass: string) => dispatch(updatePassword(newPass)),
  login: (inputUsername:string, inputPassword:string) => login(inputUsername, inputPassword)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
