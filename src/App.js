import React from 'react';
// import { Switch } from 'react-router-dom';

// import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/dist/styles/rsuite-default.min.css'
import './styles/main.scss';
import { BrowserRouter as Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const App = () => {
  return (

    <Switch>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>

      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
};

export default App;
