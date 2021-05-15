import React from 'react';
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";


import DetailPage from './pages/Detail';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import { AppHeader } from './components/AppHeader'

function App() {


  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path="/register">
            <h3 style={{ textAlign: 'center', paddingTop: 20 }}>Welcome to Website 🚀</h3>
            <Register />
          </Route>

          <Route path="/login">
            <h3 style={{ textAlign: 'center', paddingTop: 20 }}>Welcome to Website 🚀</h3>
            <Login />
          </Route>
          <Route path="/:id">
            <AppHeader />
            <DetailPage />
          </Route>
          <Route exact path="/">
            <AppHeader />
            <HomePage />
          </Route>

        </Switch>
      </div >
    </Router >
  );
}

export default App;
