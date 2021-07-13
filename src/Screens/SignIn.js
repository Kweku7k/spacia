import React, {useEffect, useState} from 'react'
import { Container, Row } from 'react-bootstrap'
import bg from '../img/spacia/web/Background.png'
import logo from '../img/spacia/web/logo.png'
import googleLogo from '../img/Web/Spacia/spacia/web/google 1.png'
import {Link, useLocation} from 'react-router-dom'
import queryString from "query-string";
import axios from 'axios';
import SERVICES from '../services';
import {useDispatch} from "react-redux";
import {saveSelectedFilters} from "../redux/actions/dashboard";


const SignIn = () => {


    const bgImage = {
        width:'100vw',
        height:'100vh',
        background: 'white',
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

    const googleButton = {
        display:"flex",
        width:'100%',
        border:'1px solid #D9D9D9',
        padding:10,
        borderRadius:10,
        backgroundColor:'white'
    }

    

    const isValidJSON = str => {
        try {
            JSON.parse(str);
            return true;
        } catch (e) {
            return false;
        }
    };


   
    const location = useLocation();
    const search = queryString.parse(location.search);
    const params = (search && search.payload) ? search.payload : '';

    let payload = null;
    const decodedString = atob(params);
    if (isValidJSON(decodedString)) {
        payload = JSON.parse(decodedString);
        // localStorage.setItem('payload',payload)
        SERVICES.saveUser(payload);
    }

    const dispatch = useDispatch();

    const filterOptionsUrl = "https://spacia.page/booking/api/v1/listings/filter/options";
    useEffect(() => {
        axios.get(filterOptionsUrl).then(res => {
            const resData = (res.data) ? res.data.data : {};
            dispatch(saveSelectedFilters(resData));
            console.log(res.data.data)
        });
    }, []);

    useEffect(() => {
        console.log(payload);
    }, []);

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const loadurl = 'https://spacia.page/users/api/v1/login';


    const signInfunc = () => {
        // const user = SERVICES.getUser();
        // console.log('user data:' + user);
        axios.post(loadurl,{
            'password':password,
            'username':email,
            'companyId':1
        }).then((res)=>{
            console.log(res.data);
            SERVICES.saveUser(res.data.data[0])
            loginlogic(res)
        })
    }

    const loginlogic = (res) =>{
            // if res.data.role ==  
    }
    return (
        <Row style={bgImage}>
            {/* <div > */}
                <div style={logopos}>
                    <img src={logo} alt="logo"/>
                </div>
                <div style={formCard}>
                    <Container>
                        <h5>Register a new account</h5>
                        <br/>
                        <button style={googleButton}>
                            <img src={googleLogo} alt="G"/>
                            <div style={{margin:'auto'}}>

                            <h6 style={{textAlign:'center', marginBottom:0}}>Sign In With Google</h6>
                            </div>
                        </button>

                        <hr/>

                        <div className="form-group">
                          <label htmlFor="">Email</label>
                          {/* onChange={(e) => setpropertyTitle(e.target.value)} */}
                          <input type="email" className="form-control" placeholder="" name="" id="" value={email} onChange={(e) => setemail(e.target.value)} aria-describedby="emailHelpId" />
                        </div>
                        <br/>
                        <div className="form-group">
                          <label htmlFor="">Password</label>
                          <input type="password" className="form-control" placeholder="Password" name="" value={password} onChange={(e) => setpassword(e.target.value)} id="" aria-describedby="emailHelpId" />
                        </div>
                        <br/>

                        {/* Functions */}
                        <div style={{display:'flex', justifyContent:'space-between'}}>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input style={{marginTop:0}} className="form-check-input" type="checkbox" name="" id="" value="checkedValue"/><h6 style={{fontSize:'smaller'}}> Remember Me</h6>
                            </label>
                        </div>
                            
                            <a href={{}}>
                                <h6  style={{fontSize:'smaller'}}>
                                    Forgot Password
                                </h6>
                            </a>
                        </div>

                        <br/>
                        <br/>

                        {/* <Link to="/"> */}
                            <div style={{margin:'auto', textAlign:'center'}}>

                            <button className="button" onClick={signInfunc} style={{width:'100%', margin:'auto'}}>Sign in</button>
                            </div>
                        {/* </Link> */}
                        <br/>
                        <h6 className="text-muted">Do not have an account? <span><Link to="/signup" style={{color:'blue',fontSize:'smaller'}}>Sign Up</Link></span></h6>
                        
                        
                    </Container>
                </div>
            {/* </div> */}
        </Row>
    )
}

export default SignIn
