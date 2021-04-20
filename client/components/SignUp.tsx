import * as React from 'react';
import { connect } from 'react-redux';
import { updateUsername, updatePassword, signUp } from '../actions/actions';

function SignUp(props: any) {
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="username">Username</label>
        <input
          id="usernameSignUp"
          type="text"
          value={props.username}
          onChange={(e) => props.updateUsername(e.target.value)}
        />
        <label htmlFor="passSignUp">Password</label>
        <input
          id="passSignUp"
          type="password"
          value={props.password}
          onChange={(e) => props.updatePassword(e.target.value)}
        />

        <button
          id="signUp"
          onClick={() => props.signUp(props.username, props.password)}
        >
          Sign me UP
        </button>
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
  signUp: (inputUsername: string, inputPassword: string) =>
    signUp(inputUsername, inputPassword),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
