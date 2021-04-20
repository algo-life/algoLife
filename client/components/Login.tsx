import * as React from 'react';
import { connect } from 'react-redux';
import { updateUsername, updatePassword } from '../actions/actions';

function Login(props:any) {
  console.log(props);
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="pass">Password</label>
        <input id="pas" type="password"  onChange={(e) => props.updatePassword(e.target.value)}/>
        <button>Login</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  username: state.form.username,
  password: state.form.password,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateUsername: (newName: string) => dispatch(updateUsername(newName)),
  updatePassword: (newPass: string) => dispatch(updatePassword(newPass)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
