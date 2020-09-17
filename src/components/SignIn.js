import React, { Component } from 'react';
import { signInWithGoogle, signOut } from '../firebase';
class SignIn extends Component {
  render() {
    return (
      <div className="signin-form">
        <h1>Sign In / Sign Up</h1>
        <button className="btn basic-btn" onClick={signInWithGoogle}>
          <img
            src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
            alt="pic"
          />
          Sign In / Sign Up with Google
        </button>
        <br></br>
        <button className="btn basic-btn" onClick={signOut}>
          Logout
        </button>
      </div>
    );
  }
}

export default SignIn;
