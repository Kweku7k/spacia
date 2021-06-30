// import SideNav from './components/SideNav'
import MainPage from './components/MainPage'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Screens/Signup';
import SignIn from './Screens/SignIn';
import Dashboard from './Screens/Dashboard';
import Nav from './components/Nav'
import ResetPassword from './Screens/ResetPassword';
// import Properties from './Screens/Properties';
import { BrowserRouter as Router,  Switch,  Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="row" >

<Router>
    <Switch>
    <Route exact path="/signup">
        <Signup />
    </Route>
    <Route path="/signin">
        <SignIn />
    </Route>
    <Route path="/resetpassword">
        <ResetPassword />
    </Route>

    <Route path="/">
          <Nav />
      </Route>
    </Switch>

  </Router>

    {/* <Signup /> */}

    </div>
  );
}

export default App;
