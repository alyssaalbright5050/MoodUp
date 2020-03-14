import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./components/loginPage/layout/Navbar";
import Landing from "./components/loginPage/layout/Landing";
import Register from "./components/loginPage/auth/Register";
import Login from "./components/loginPage/auth/Login";
import PrivateRoute from "./components/loginPage/private-route/PrivateRoute";
import Dashboard from "./components/loginPage/dashboard/Dashboard";
import Journal from './components/loginPage/journal/Journal';
import Entries from './components/loginPage/journal/Entries';
import Form from './components/loginPage/journal/Form';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
           
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
            <PrivateRoute exact path="/journal" component={Journal} />
            <PrivateRoute exact path="/entries" component={Entries} />
            <PrivateRoute exact path="/form" component={Form} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;