// import SideNav from './components/SideNav'
import MainPage from './components/MainPage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Screens/Signup';
import SignIn from './Screens/SignIn';
import Dashboard from './Screens/Dashboard';
import Nav from './components/Nav';
import Confirm from './Screens/confirm';
import ResetPassword from './Screens/ResetPassword';
import {Provider, useDispatch} from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
// import Properties from './Screens/Properties';
import { BrowserRouter as Router,  Switch,  Route, Link} from "react-router-dom";
import ConfirmInvite from "./Screens/ConfirmInvite";
import configureStore from "./redux/configureStore";
import {useEffect} from "react";
import axios from "axios";
import {saveSelectedFilters} from "./redux/actions/dashboard";

const {store, persistor} = configureStore();

function App() {

  return (
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <div className="row" >

                  <Router>
                      <Switch>
                          <Route exact path="/signup">
                              <Signup />
                          </Route>
                          <Route exact path="/confirm">
                              <Confirm />
                          </Route>
                          <Route path="/signin">
                              <SignIn />
                          </Route>
                          <Route path="/resetpassword">
                              <ResetPassword />
                          </Route>
                          <Route path="/authentication/confirm-invite">
                              <ConfirmInvite />
                          </Route>

                          <Route path="/">
                              <Nav />
                          </Route>
                      </Switch>

                  </Router>

                  {/* <Signup /> */}

              </div>
          </PersistGate>
      </Provider>
  );
}

export default App;
