import React from 'react'
import { Container, Row, Toast } from 'react-bootstrap'
import { FaBell, FaCamera, FaCaretSquareDown, FaCreditCard, FaShieldAlt } from 'react-icons/fa'
import CardPayment from '../components/Settings/CardPayment'
import Notifications from '../components/Settings/Notifications'
import Profile from '../components/Settings/Profile'

const Settings = () => {
    return (
        <div >
             <div className="header">
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h4>Settings</h4>         
                </div>
            </div>
            <Container >
                {/* <Toast> */}
            <Row>
                        <div className="col-md-4">
                                <div className="settingsNavItem active" style={{justifyContent:"normal"}}>
                                    <FaCaretSquareDown style={{marginRight:10}} />
                                    <h6>Edit Profile</h6>    
                                </div>
                                <div className="settingsNavItem" style={{justifyContent:"normal"}}>
                                    <FaBell style={{marginRight:10}}/>
                                    <h6>Notification</h6>    
                                </div>
                                <div className="settingsNavItem" style={{justifyContent:"normal"}}>
                                    <FaCreditCard style={{marginRight:10}}/>
                                    <h6>Payment</h6>    
                                </div>
                                <div className="settingsNavItem" style={{justifyContent:"normal"}}>
                                    <FaShieldAlt style={{marginRight:10}}/>
                                    <h6>Password & Security</h6>    
                                </div>
    
                        </div>    
                        <div className="col-md-8" >
                        
                        {/* <Profile /> */}
                        <CardPayment />
                        </div>
            </Row>
            {/* </Toast> */}
            </Container> 
        </div>
    )
}

export default Settings
