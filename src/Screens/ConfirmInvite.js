import React, {useEffect, useState} from 'react';
import {useHistory, useLocation} from "react-router-dom";
import queryString from 'query-string';
import logo from "../img/spacia/web/logo.png";
import {Container, Row} from "react-bootstrap";
import bg from "../img/spacia/web/Background.png";
import axios from "axios";

const ConfirmInvite = () => {
    const [otp, setOtp] = useState(null);
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);

    const location = useLocation();
    const search = queryString.parse(location.search);
    const params = (search) ? search.payload : '';
    const payload = JSON.parse(atob(params));

    useEffect(() => {
        if (payload.username) {
            setUsername(payload.username);
        }
    }, []);

    const bgImage = {
        width:'100vw',
        height:'100vh',
        background: 'green',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position:'relative',
        // boxShadow: '0 4 38 rgba(0, 0, 0, 0.06)',
        backgroundImage:`url(${bg})`

    }
    const formCard ={
        width:'35%',
        position:'absolute',
        right:'10vw',
        top:'10vh',
        backgroundColor:'white',
        padding:30,
        // paddingBottom:50,
        // boxShadow: '0px 4px 38px rgba(0, 0, 0, 0.06);',
        boxShadow: "0px 4px 38px #000000, 6%"
    }

    const logopos={
        position:'relative',
        left:'5vw',
        top:'5vh'
    }

    const history = useHistory();
    let localUrl = 'https://spacia.page/users/api/v1/users/otp'
    // let localUrl = 'http://localhost:9002/api/v1/users/otp'
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(localUrl,
            {
                username,
                otp,
                "firstName": firstname,
                "lastName": lastname,
                password,
                confirmPassword
            }).then(res => {
            console.log(res);
            (res.status = 200 ? history.push("/signin") : console.log("Didnt Work"));
        }).catch(err=>(console.log(err)))
        console.log(localUrl)
    }

    const resendOtp = (e) => {
        // localUrl = 'http://localhost:9002/api/v1/otp';
        localUrl = 'https://spacia.page/users/api/v1/otp';
        // e.preventDefault();

        axios.get(localUrl, { params: { username } }).then(res => console.log(res));
    }

    return (
        <Row style={bgImage}>
            {/* <div > */}
            <div style={logopos}>
                <img src={logo} alt="logo"/>
            </div>
            <div style={formCard}>
                <Container>
                    <h5>Account Confirmation</h5>
                    <br/>
                    <br/>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" readOnly name="username" id="email"
                                   aria-describedby="emailHelpId" value={username}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="otp">Confirmation Code</label>
                            <input type="text" className="form-control" name="otp" id="otp"
                                   aria-describedby="otp" placeholder="Enter Confirmation Code" value={otp} onChange={(e) => {setOtp(e.target.value)}}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="firstname">First name</label>
                            <input type="text" className="form-control" name="firstName" id="firstname"
                                   aria-describedby="firstName" value={firstname} onChange={e => {setFirstname(e.target.value)}}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="lastname">Last name</label>
                            <input type="text" className="form-control" name="" id="lastname"
                                   aria-describedby="lastName" value={lastname} onChange={e => {setLastname(e.target.value)}}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" id="password"
                                   aria-describedby="password" value={password} onChange={e => {setPassword(e.target.value)}}/>
                        </div>
                        <br/>
                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input type="password" className="form-control" name="confirmPassword" id="confirmPassword"
                                   aria-describedby="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
                        </div>
                        <br/>
                        <br/>
                        <p style={{marginTop: '-20px'}}>
                            <a onClick={resendOtp} className='resend-otp' style={{textDecoration: 'none', fontSize: '.88rem'}}>Resend
                                OTP</a>
                        </p>
                        <div style={{margin: 'auto', textAlign: 'center'}}>
                            <button className="button" style={{width: '100%'}}>Submit</button>
                        </div>
                    </form>
                </Container>
            </div>
            {/* </div> */}
        </Row>
    )
}

export default ConfirmInvite
