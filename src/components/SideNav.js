import { FaHome, FaTachometerAlt, FaTimes, FaChevronRight, FaUsers, FaUser, FaFileInvoiceDollar, FaChartBar, FaCog, FaChevronDown, FaQuestionCircle } from 'react-icons/fa'
import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap';


//Images
import logo from '../img/logo.png';
import bill from '../img/Web/Spacia/bill.png';
import chart from '../img/Web/Spacia/chart.png';
import dashboard from '../img/Web/Spacia/dashboard.png';
import dash from '../img/Web/Spacia/dash.png';
import property from '../img/Web/Spacia/property.png';
import profile from '../img/Web/Spacia/profile.png';
import users from '../img/Web/Spacia/users.png';
import settings from '../img/Web/Spacia/settings.png';
import report from '../img/Web/Spacia/chart.png';


// import dashboard from '../img/Web/Spacia/dashboard.png'



const SideNav = () => {
    //setStates to handle dropdown
    const [open, setOpen] = useState(false);

    //function to toggle dropdown
    const toggle = () => {
        setOpen(!open);
    }

    const closeToggle = () => {
        setOpen(false)
    }


    const location = useLocation();

    const icon ={
        marginRight:10,
        color: '#F85A47',
        objectFit: 'cover'
    }

    const navItem = {
        margin:'auto',
        marginLeft:5,
        marginBottom:0,
    }

    const dropdownItem = {
        display: 'flex', 
        flexDirection: 'column',
        paddingLeft: '20px',
        margin: 'auto',
    }
    
    return (
        <div className="sideNav col-md-2" >

            <div >
                <img src={logo} width={120} style={{margin:35, marginBottom:10}}alt="LOGO"/>
                <br/>
            </div>
            
            <Link className="link" to="/" onClick={closeToggle}>
                <div className={` ${location.pathname === "/dashboard" ? "navItem-active" : "navItem" }`}>
                    <div>
                        <img src={dash} alt="dashboard"/>
                    </div>
                    
                    <h6 style={navItem}> Dashboard</h6>
                </div>
            </Link>

            <Link className="link" to="/properties" onClick={closeToggle}>
                <div className={` ${location.pathname === "/properties" ? "navItem-active" : "navItem" }`}>
                    <div>
                    <img src={dashboard} alt="dashboard"/>
                    </div>
                    <h6 style={navItem}> Properties</h6>
                </div> 
                    
            </Link>

            <button style={{ background: 'none', border: 'none', padding: '0px', width: '100%' }} onClick={toggle}>
                <Link className="link">
                {location.pathname === ("/startBooking" || "/booking") ? (
                    <div className="navItem-active" style={{ alignItems:'flex-end' }}>
                        <div>
                            <img src={profile} alt="dashboard"/>
                        </div>
                        <h6 style={navItem}> Booking</h6>
                        {open && (
                            <>
                                <FaChevronDown style={{ marginLeft:'30px'}}/>
                            </>
                        )}
                        {!open && (
                            <>
                                <FaChevronRight style={{ marginLeft:'30px'}}/>
                            </>
                        )}
                    </div>
                ):(
                    <div className="navItem" style={{ alignItems:'flex-end' }}>
                        <div>
                            <img src={profile} alt="dashboard"/>
                        </div>
                        <h6 style={navItem}> Booking</h6>
                        {open && (
                            <>
                                <FaChevronDown style={{ marginLeft:'30px'}}/>
                            </>
                        )}
                        {!open && (
                            <>
                                <FaChevronRight style={{ marginLeft:'30px'}}/>
                            </>
                        )}
                    </div>
                )}
                </Link>
            </button >
            {open && (
                <div style={ dropdownItem }>
                    <Link style={{ textDecoration: 'none', color: '#F9F9F9' }} to="/startBooking"> Find a Space</Link>
                    <Link style={{ textDecoration: 'none', color: '#F9F9F9' }} to="/booking"> Reservations</Link>
                    <Link style={{ textDecoration: 'none', color: '#F9F9F9' }} to="/editbooking"> Pending Approvals</Link>
                </div>
            )}

            <Link className="link" to="/users" onClick={closeToggle}>
                <div className={` ${location.pathname === "/users" ? "navItem-active" : "navItem" }`}>
                    <div>
                        <img src={users} alt="users" />
                    </div>
                {/* <img src={profile} width={'100%'}alt="LOGO"/> */}
                    <h6 style={navItem}> Users</h6>
                </div>
            </Link>

            <Link className="link" to="/billing" onClick={closeToggle}>
                <div className={` ${location.pathname === "/billing" ? "navItem-active" : "navItem" }`}>
                    <div>
                        <img src={bill} alt=""/>
                    </div>
                {/* <img src={property} width={'100%'}alt="LOGO"/> */}
                    <h6 style={navItem}> Billing</h6>
                </div>
            </Link>

            <div className={` ${location.pathname === "/report" ? "navItem-active" : "navItem" }`} onClick={closeToggle}>
                <div>
                    <img src={report} alt=""/>
                </div>
            {/* <img src={property} width={'100%'}alt="LOGO"/> */}
                <h6 style={navItem}> Reports</h6>
            </div>

            <Link className="link" to="/settings" onClick={closeToggle}>
                <div className={` ${location.pathname === "/settings" ? "navItem-active" : "navItem" }`}>
                    <div>
                        <img src={settings} alt="settings" />
                    </div>
                    <h6 style={navItem}> Settings</h6>
                </div>
            </Link>

            <div className="navItem fixedBottom">
                <FaQuestionCircle/>
            </div>
        </div>

        
    )
}



export default SideNav
