import * as React from 'react';
import { connect } from 'react-redux';
import { updateUsername, updatePassword, signUp } from '../actions/actions';
import { useHistory } from 'react-router-dom';

function SignUp(props: any) {
  const history = useHistory();

  React.useEffect(() => {
    if (props.user.username) history.push('/main');
  }, [props.user]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.signUp(props.username, props.password);
  };

  return (
    <div id="signupContainer">
      <div id="signupHeaders">
        <h1 id="newUser">New user?</h1>
        <h2 id="newUserSub">Create a new account.</h2>
      </div>
      <form className="signupForm" onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="username">
          Username
        </label>
        <input
          className="formInput"
          id="usernameSignUp"
          type="text"
          value={props.username}
          onChange={(e) => props.updateUsername(e.target.value)}
        />
        <label className="formLabel" htmlFor="passSignUp">
          Password
        </label>
        <input
          className="formInput"
          id="passSignUp"
          type="password"
          value={props.password}
          onChange={(e) => props.updatePassword(e.target.value)}
        />

        <button id="signupButton" type="submit">
          Sign me up
        </button>
      </form>
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
  signUp: (inputUsername: string, inputPassword: string) =>
    dispatch(signUp(inputUsername, inputPassword)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
