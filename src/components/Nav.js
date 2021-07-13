import React,{useState, useEffect} from 'react'
import { FaCaretDown, FaBell } from 'react-icons/fa'
import profile from '../img/profileplace.png'
import bkn from '../img/Web/Spacia/calendar-2 4.png'
import bellIcon from '../img/Web/Spacia/settings/navbar/bell 1.png'
import cartIcon from '../img/Web/Spacia/cart 3.png'
import activeCartIcon from '../img/Web/Spacia/activeCart.png'
import {Link} from 'react-router-dom'
import MainPage from './MainPage'
import SideNav from '../components/SideNav'
import Dashboard from '../Screens/Dashboard'
import Properties from '../Screens/Properties'
import UserManagement from '../Screens/UserManagement'
import Settings from '../Screens/Settings'
import { Switch,  Route, useHistory} from "react-router-dom";
import Billing from '../Screens/Billing'
import Booking from '../Screens/Booking'
import EditBooking from '../Screens/EditBooking'
import StartBooking from '../Screens/StartBooking'
import AddedProperties from '../Screens/AddedProperties'
import Checkout from "../components/Settings/Checkout";
import Cart from '../Screens/cart'
import FilterProperties from '../Screens/FilterProperties'
import ListProperty from '../Screens/ListProperty'
import Confirm from '../Screens/confirm'
import ListPropertyForm from '../Screens/ListPropertyForm';
import SERVICES from '../services';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {saveFilterOptions, saveSelectedFilters} from "../redux/actions/dashboard";
import { logoutUser } from "../redux/actions/dashboard";
import { Dropdown } from 'react-bootstrap'
// src/img/Web/Spacia/calendar-2 4.png

// /Users/kweku/Documents/Projects/ReactProjects/spacia/src/img/Web/Spacia/settings/navbar/bell.png
const Nav = () => {
    const username = "Nana Kweku" 
    // const userPicture = "Nana Kweku"
    // const cart = true
    const [cart, setcart] = useState(false);
    const [currentUser, setCurrentUser] = useState({});

    const allEntries = useSelector(state => state.dashboard.entries);

    useEffect(() => {
        setcart((allEntries && allEntries.length > 0));
    });

    const onAddToCart = () => {
        console.log("Added To Cart")
        setcart (true)
    }

    const dispatch = useDispatch();

    const filterOptionsUrl = "https://spacia.page/booking/api/v1/listings/filter/options";
    useEffect(() => {
        axios.get(filterOptionsUrl).then(res => {
            const resData = (res.data) ? res.data.data : {};
            dispatch(saveFilterOptions(resData));
            console.log(res.data.data)
        });
    }, []);

    let history = useHistory();

    useEffect(() => {
        console.log('Inside Nav');
        console.log(SERVICES.getUser());
        {
            SERVICES.getUser() ? console.log(SERVICES)
             : 
             history.push("/signin");
        }
        setCurrentUser(SERVICES.getUser());
    }, []);

    return (
<>
{/* <MainPage /> */}
<div style={{backgroundColor:'#F9F9F9', display:'flex'}}>
        <SideNav/>
<div  style={{ marginLeft:'13%',width:"90%",justifyContent:"space-between", padding:0, minHeight:'100vh'}}>
<div style={{display:"flex", flexDirection:'row-reverse', padding:20, backgroundColor:"#F3F3F3", color:'black' }}>
    {/* <img src={userPicture}  /> */}
    {/* <FaCaretDown style={{marginTop:'auto', marginBottom:'auto'}} /> */}
    <Dropdown>
  <Dropdown.Toggle style={{backgroundColor:'transparent', color:'black', border:'none'}}id="dropdown-basic">
        {/* <FaEllipsisH color="black"/> */}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={()=>{logoutUser()}}>Logout</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
    <h6 style={{marginTop:'7px'}}>{currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : 'N/A'}</h6>
    <img src={profile} alt="img" style={{ width:30, height:30, borderRadius:'50%', marginRight:10 }} />
    <Link to ="/cart">
   <div style={{marginRight:40}}>
       {cart ? 
       (
           <img src={activeCartIcon} alt="bell"/>
           ):(
               <img src={cartIcon} alt="bell"/>
       )}
   </div>
  </Link>
   <div style={{marginRight:40}} >
    <img src={bellIcon} alt="bell"/>
   </div>
</div>

<Switch>
                    <Route exact path="/">
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
                    <Route path="/addedproperties">
                        <AddedProperties />
                    </Route>
                    <Route path="/checkout">
                        <Checkout />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/filterprops">
                        <FilterProperties />
                    </Route>
                    <Route path="/listproperty">
                        <ListProperty />
                    </Route>
                    <Route path="/listpropertyform">
                        <ListPropertyForm />
                    </Route>
                </Switch>
</div>
</div>
</>
    )
}

export default Nav
