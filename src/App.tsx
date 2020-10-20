import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Secret from './components/Secret';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
            <Route exact path='/'  component={Main} />
            <Route exact path='/signIn' component={SignIn} />
            <Route exact path='/signUp' component={SignUp} />
            <Route exact path='/secret' component={Secret} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
