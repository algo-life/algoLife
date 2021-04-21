import * as React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { updateUsername, updatePassword, login } from '../actions/actions';

function Login(props: any) {
  const history = useHistory();

  function loginError() {
    if (props.user.loginError) {
      return <h3>{props.user.loginError}</h3>;
    }
  }

  React.useEffect(() => {
    if (props.user.username) history.push('/main');
  }, [props.user]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.login(props.username, props.password);
  };

  return (
    <div id="loginContainer">
      <div id="loginHeaders">
        <h1 id="loginWelcome">Welcome!</h1>
        <h2 id="loginInstructions">Login or create an account.</h2>
      </div>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="username">
          Username
        </label>
        <input
          className="formInput"
          id="username"
          type="text"
          value={props.username}
          onChange={(e) => props.updateUsername(e.target.value)}
        />
        <label className="formLabel" htmlFor="pass">
          Password
        </label>
        <input
          className="formInput"
          id="pas"
          type="password"
          value={props.password}
          onChange={(e) => props.updatePassword(e.target.value)}
        />
        <button id="loginButton" type="submit">
          Login
        </button>
      </form>
      {loginError()}
    </div>
  );
}

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
