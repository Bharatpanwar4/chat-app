import React from 'react';

// import 'rsuite/dist/styles/rsuite-default.css';
import 'rsuite/dist/styles/rsuite-default.min.css'
import './styles/main.scss';
import { BrowserRouter as Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import ProfileProvider from './context/profile.context';

const App = () => {
  return (
<ProfileProvider>

<Switch>
      <PublicRoute path="/signin">
        <SignIn />
      </PublicRoute>

      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
</ProfileProvider>
   
  );
};

export default App;
