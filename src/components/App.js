import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SignIn } from './';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/signup" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
