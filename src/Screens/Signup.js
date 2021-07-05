import React,{useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import bg from '../img/spacia/web/Background.png'
import logo from '../img/spacia/web/logo.png'
import googleLogo from '../img/Web/Spacia/spacia/web/google 1.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
const Signup = () => {


    const localurl = 'https://spacia.page/users/api/v1/users'
    useEffect(() => {
        axios.post(localurl,
            {
                "avatar": "https://www.google.com?avatar.jpg",
                "companyId": 1,
                "confirmPassword": "12345",
                "contacts": [{
                    "isContactable": true,
                    "isPrimary": true,
                    "type": "mobile",
                    "value": "+233545917791"
                  }],
                "firstName": "Kwamw",
                "lastName": "Lynx1",
                "password": "12345",
                "role": "admin",
                "username": "nanakwame.akorful65@gmail.com"
              }


        )
        .then(res=>(console.log(res)))
        .catch(err=>(console.log(err))
        )
        console.log(localurl)
        
    }, [localurl])
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

    const googleButton = {
        display:"flex",
        width:'100%',
        border:'1px solid #D9D9D9',
        padding:10,
        borderRadius:10,
        backgroundColor:'white'
    }

    const submitSignup = (e) =>{
        e.preventDefault()

        
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

                            <h6 style={{textAlign:'center', marginBottom:0}}>Sign Up With Google</h6>
                            </div>
                        </button>

                        <hr/>

                        <div class="form-group">
                          <label for="">Full Name</label>
                          <input type="email" class="form-control" placeholder="Full Name" name="" id="" aria-describedby="emailHelpId" />
                        </div>
                        <br/>
                        <div class="form-group">
                          <label for="">Email</label>

                            <input type="email" class="form-control" placeholder="Eg. lindaantwi@gmail.com" name="" id="" aria-describedby="emailHelpId" />
                        </div>
                        <br/>
                        <div class="form-group">
                          <label for="">Phone Number</label>
                          <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="+233" />
                        </div>
                        <br/>
                        <div class="form-group">
                          <label for="">Password</label>
                          <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
                        </div>
                        <br/>
                        <div class="form-group">
                          <label for="">Confirm Password</label>
                          <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
                        </div>
                        <br/>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="" id="" value="checkedValue"/><h6 style={{fontSize:'smaller'}}> I agree to the Terms of Conditions and Privacy Policy</h6>
                            </label>
                        </div>
                        <Link to="/signin">

                        <div style={{margin:'auto', textAlign:'center'}}>
                        <button onClick={submitSignup} className="button" style={{width:'100%'}}>Activate Account</button>
                        </div>
                        </Link>
                    </Container>
                </div>
            {/* </div> */}
        </Row>
    )
}

export default Signup
