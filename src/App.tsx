import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { red } from '@material-ui/core/colors';
import Main from './components/MainPage/Main';
import SignIn from './components/MainPage/SignIn';
import SignUp from './components/MainPage/SignUp';

import Chatbot from './containers/Chatbot/Chatbot';

import AppTopPage from './components/AppPages/AppTopPage';
import AppMyPage from './components/AppPages/AppMyPage';
import AppAnalizePage from './components/AppPages/AppAnalizePage';


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

          <Route exact path="/appPage" component={AppTopPage} />
          <Route exact path="/dashboard" component={AppTopPage} />
          <Route exact path="/mypage" component={AppMyPage} />
          <Route exact path="/analize" component={AppAnalizePage} />

        </Switch>
      </Router>
    </ThemeProvider>
  </>
);

export default App;
