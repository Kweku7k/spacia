import {useState} from 'react'
import {Link} from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap';

import { FaHome, FaTachometerAlt, FaTimes, FaUsers, FaUser, FaFileInvoiceDollar, FaChartBar, FaCog, FaChevronDown, FaChevronRight } from 'react-icons/fa'

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

    const dropItem = {
        display:'flex',
        flexDirection: 'column'
    }

    return (
        <div className="sideNav col-md-2" >

            <div className="navItem">
                <img src={logo} width={100} alt="LOGO"/>
            </div>
            
            <Link className="link" to="/dashboard">
                <div className="navItem">
                    <div>
                        <img src={dash} alt="dashboard"/>
                    </div>
                    
                    <h6 style={navItem}> Dashboard</h6>
                </div>
            </Link>

            <Link className="link" to="/properties">
                <div className="navItem">
                    {/* <FaHome style={icon} /> */}
                    <div>
                    <img src={dashboard} alt="dashboard"/>
                    </div>
                    <h6 style={navItem}> Properties</h6>
                </div>
            </Link>

            <button style={{ background: 'none', border: 'none', padding: '0px' }} onClick={toggle}>
                <Link className="link">
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
                </Link>
                {open && (
                    <div style={{ display: 'flex', flexDirection: 'column', }}>
                        <Link style={{ textDecoration: 'none', color: '#F9F9F9' }} to="/startBooking"> Find a Space</Link>
                        <Link style={{ textDecoration: 'none', color: '#F9F9F9' }}> Orders</Link>
                        <Link style={{ textDecoration: 'none', color: '#F9F9F9' }}> Approvals</Link>
                    </div>
                )}
            </button>

            {/* <Dropdown className="navItem">
                <Dropdown.Toggle style={{ display: 'flex', alignItems: 'center', padding: 0, color: 'white' }} variant="transparent" >
                    <div style={{display: 'flex', padding: '0px'}}>
                        <img src={profile} alt="dashboard"/>
                        <h6 style={navItem}> Booking</h6>
                    </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <div style={dropItem}>
                        <Link className='link' style={{color:'black'}} to="/startbooking">Find a Space</Link>
                    </div>
                    <div style={dropItem}>
                        <Link className='link' style={{color:'black'}} to="#">Orders</Link>
                    </div>
                    <div style={dropItem}>
                        <Link className='link' style={{color:'black'}} to="#">Approvals</Link>
                    </div>
                </Dropdown.Menu>
            </Dropdown> */}

            <Link className="link" to="/users">
                <div className="navItem">
                    <div>
                        <img src={users} alt="users" />
                    </div>
                {/* <img src={profile} width={'100%'}alt="LOGO"/> */}
                    <h6 style={navItem}> Users</h6>
                </div>
            </Link>

            <Link className="link" to="/billing">
            <div className="navItem">
                <div>
                    <img src={bill} alt=""/>
                </div>
            {/* <img src={property} width={'100%'}alt="LOGO"/> */}
                <h6 style={navItem}> Billing</h6>
            </div>
            </Link>

            <div className="navItem">
                <div>
                    <img src={report} alt=""/>
                </div>
            {/* <img src={property} width={'100%'}alt="LOGO"/> */}
                <h6 style={navItem}> Reports</h6>
            </div>
            <Link className="link" to="/settings">

            <div className="navItem">

                <div>
                    <img src={settings} />
                </div>
            {/* <img src={settings} width={'100%'}alt="LOGO"/> */}
                <h6 style={navItem}> Settings</h6>
            </div>
            </Link>

            <div className="navItem fixedBottom">
                <FaTimes/>
            </div>
        </div>

        
    )
}



export default SideNav
