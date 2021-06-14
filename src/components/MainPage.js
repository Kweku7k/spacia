import Header from './Header'
import Card from './Card'
import { Container } from 'react-bootstrap'
import Nav from './Nav'
import SideNav from './SideNav'
import logo from '../img/logo.png'
import { FaCaretDown } from 'react-icons/fa'
import Dashboard from '../Screens/Dashboard'
import Properties from '../Screens/Properties'
import UserManagement from '../Screens/UserManagement'
import Settings from '../Screens/Settings'
import { BrowserRouter as Router,  Switch,  Route, Link} from "react-router-dom";
import CardPaymentTab from './CardPaymentTab'
import Notifications from './Settings/Notifications'
import Profile from './Settings/Profile'
import Billing from '../Screens/Billing'
import Booking from '../Screens/Booking'
import EditBooking from '../Screens/EditBooking'
import StartBooking from '../Screens/StartBooking'

const MainPage = (props) => {
    return (

        <Router>
        <div class="row">
        <SideNav/>
            <Nav>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/properties">
                        <Properties />
                    </Route>
                    <Route path="/users">
                        <UserManagement />
                    </Route>
                    <Route path="/settings">
                        <Settings />
                    </Route>
                    <Route path="/billing">
                        <Billing />
                    </Route>
                    <Route path="/booking">
                        <Booking />
                    </Route>
                    <Route path="/editbooking">
                        <EditBooking />
                    </Route>
                    <Route path="/startbooking">
                        <StartBooking />
                    </Route>
                </Switch>
            </Nav>
            </div>
        </Router>


        /* <Container>
            <Route path='/' exact render={(props) => (
            <>
            <Header title="Dashboard"/>
            <div className="row" style={{ padding:0, margin:"auto" }}>
                <Card title="Total Properties" supportTitle="20" Icon={logo}/>
            </div>
            </>

        )} />

        <Route path='/properties' exact render={(props) => (
            <h4>Not Really</h4>
        )} />
        </Container> */
       



    )
}

export default MainPage

