import React from 'react';
// import { Switch } from 'react-router-dom';

import 'rsuite/dist/rsuite.min.css';
// import 'rsuite/dist/rsuite-default.css';
import './styles/main.scss';
import { BrowserRouter as Switch} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import SignIn from './pages/SignIn';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';



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
}

export default App;
