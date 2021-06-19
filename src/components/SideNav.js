import { FaHome, FaTachometerAlt, FaTimes, FaUsers, FaUser, FaFileInvoiceDollar, FaChartBar, FaCog, FaQuestionCircle } from 'react-icons/fa'
import logo from '../img/logo.png';
import bill from '../img/Web/Spacia/bill.png';
import chart from '../img/Web/Spacia/chart.png';
import dashboard from '../img/Web/Spacia/dashboard.png';
import dash from '../img/Web/Spacia/dash.png';
import property from '../img/Web/Spacia/property.png';
import profile from '../img/Web/Spacia/profile.png';
import users from '../img/Web/Spacia/users.png';
import settings from '../img/Web/Spacia/settings.png';
import {Link} from 'react-router-dom'
import report from '../img/Web/Spacia/chart.png';


// import dashboard from '../img/Web/Spacia/dashboard.png'

const SideNav = () => {
    const icon ={
        marginRight:10,
        color: '#F85A47',
        objectFit: 'cover'
    }

    const navItem = {
        margin:'auto',
        marginLeft:5,
        marginBottom:0
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

            <Link className="link" to="/startbooking">
            <div className="navItem">
                {/* <FaUser style={icon}/> */}
                <div>
                <img src={profile} alt="dashboard"/>
                </div>

                <h6 style={navItem}> Booking</h6>
            </div>
            </Link>

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
                <FaQuestionCircle/>
            </div>
        </div>

        
    )
}



export default SideNav
