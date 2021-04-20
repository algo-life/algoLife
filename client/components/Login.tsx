import * as React from 'react';
import { connect } from 'react-redux';
import { updateUsername, updatePassword, login } from '../actions/actions';

import { useHistory } from 'react-router-dom';

function Login(props: any) {
  const history = useHistory();
  React.useEffect(() => {
    if (props.user.username) history.push('/main'), [props.user];
  });
  console.log('whatup', history);
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={props.username}
          onChange={(e) => props.updateUsername(e.target.value)}
        />
        <label htmlFor="pass">Password</label>
        <input
          id="pas"
          type="password"
          value={props.password}
          onChange={(e) => props.updatePassword(e.target.value)}
        />
        <button
          id="loginButton"
          onClick={() => props.login(props.username, props.password)}
        >
          Login
        </button>
      </form>
    </div>
  );
}

//button sends form data to backend
const mapStateToProps = (state: any) => ({
  username: state.form.username,
  password: state.form.password,
  user: state.user,
});

const mapDispatchToProps = (dispatch: any) => ({
  updateUsername: (newName: string) => dispatch(updateUsername(newName)),
  updatePassword: (newPass: string) => dispatch(updatePassword(newPass)),
  login: (inputUsername: string, inputPassword: string) =>
    dispatch(login(inputUsername, inputPassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);