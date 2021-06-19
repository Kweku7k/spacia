import React from 'react'
import { Container, Row, Toast } from 'react-bootstrap'
import { FaBell, FaCamera, FaCaretSquareDown, FaCreditCard, FaShieldAlt } from 'react-icons/fa'
import CardPayment from '../components/Settings/CardPayment'
import Notifications from '../components/Settings/Notifications'
import Profile from '../components/Settings/Profile'
import Password from '../components/Settings/Password'

import {Route, Link, Switch} from 'react-router-dom'

const Settings = () => {

    const link = {
        color:'black',
    }

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
                    <Link className="link" style={link} to="/settings">
                        <div className="settingsNavItem active" style={{justifyContent:"normal"}}>
                            <FaCaretSquareDown style={{marginRight:10}} />
                            <h6>Edit Profile</h6>    
                        </div>
                    </Link>

                    <Link className="link" style={link} to="/settings/notification">
                        <div className="settingsNavItem" style={{justifyContent:"normal"}}>
                            <FaBell style={{marginRight:10}}/>
                            <h6>Notification</h6>    
                        </div>
                    </Link>

                    <Link className="link" style={link} to="/settings/payment">
                        <div className="settingsNavItem" style={{justifyContent:"normal"}}>
                            <FaCreditCard style={{marginRight:10}}/>
                            <h6>Payment</h6>    
                        </div>
                    </Link>

                    <Link className="link" style={link} to="/settings/security">
                        <div className="settingsNavItem" style={{justifyContent:"normal"}}>
                            <FaShieldAlt style={{marginRight:10}}/>
                            <h6>Password & Security</h6>    
                        </div>
                    </Link>

                </div>    
                <div className="col-md-8" >
                
                {/* <Profile /> */}

                <Switch>
                <Route path="/settings" exact>
                    <Profile />
                </Route>
                <Route path="/settings/notification">
                    <Notifications />
                </Route>
                <Route path="/settings/payment">
                    <CardPayment />
                </Route>
                <Route path="/settings/security">
                    <Password />
                </Route>
                </Switch>
                </div>
            </Row>
            {/* </Toast> */}
            </Container> 
        </div>
    )
}

export default Settings
