import { FaTimes } from 'react-icons/fa'
import logo from '../img/logo.png';
import bill from '../img/Web/Spacia/bill.png';
import chart from '../img/Web/Spacia/chart.png';
import dashboard from '../img/Web/Spacia/dashboard.png';
import profile from '../img/Web/Spacia/profile.png';
import property from '../img/Web/Spacia/property.png';
import settings from '../img/Web/Spacia/settings.png';

const SideNav = () => {
    return (
        <div className="sideNav col-md-2" >
            <div className="navItem">
            <img src={logo} width={100} alt="LOGO"/>
            </div>
            
            <div className="navItem">
                {/* <div style={{width:10}}> */}
                {/* <img src={bill} width={'10%'} alt="LOGO"/> */}
                {/* </div> */}
                <h6> Dashboard</h6>
            </div>

            <div className="navItem">
            {/* <img src={chart} width={'100%'}alt="LOGO"/> */}
                <h6> Properties</h6>
            </div>

            <div className="navItem">
            {/* <img src={dashboard} width={'100%'}alt="LOGO"/> */}
                <h6> Profile</h6>
            </div>

            <div className="navItem">
            {/* <img src={profile} width={'100%'}alt="LOGO"/> */}
                <h6> Users</h6>
            </div>

            <div className="navItem">
            {/* <img src={property} width={'100%'}alt="LOGO"/> */}
                <h6> Billing</h6>
            </div>

            <div className="navItem">
            {/* <img src={property} width={'100%'}alt="LOGO"/> */}
                <h6> Reports</h6>
            </div>

            <div className="navItem">
            {/* <img src={settings} width={'100%'}alt="LOGO"/> */}
                <h6> Settings</h6>
            </div>

            <div className="navItem fixedBottom">
                <FaTimes/>
            </div>
        </div>

        
    )
}



export default SideNav
