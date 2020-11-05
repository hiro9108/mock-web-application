import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';
import Main from './components/MainPage/Main';
import SignIn from './components/MainPage/SignIn';
import SignUp from './components/MainPage/SignUp';

import AppPage from './components/AppPages/AppPage';
import AppPage01 from './components/AppPages/AppPage01';
import AppPage02 from './components/AppPages/AppPage02';

import Chatbot from './containers/Chatbot/Chatbot';
// import Analize from './containers/Analize/Analize';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#d7385e',
    },
    secondary: {
      main: '#cc0e74',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#f1f3f8',
    },
  },
});

const App = () => (
  <>
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>

          <Route exact path="/" component={Main} />
          <Route exact path="/signIn" component={SignIn} />
          <Route exact path="/signUp" component={SignUp} />
          <Route exact path="/signout" component={Main} />
          <Route exact path="/test" component={Chatbot} />

          <Route exact path="/appPage" component={AppPage} />
          <Route exact path="/dashboard" component={AppPage} />
          <Route exact path="/mypage" component={AppPage01} />
          <Route exact path="/analize" component={AppPage02} />

        </Switch>
      </Router>
    </ThemeProvider>
  </>
);

export default App;
