import React from 'react'
import { Container, Row } from 'react-bootstrap'
import bg from '../img/spacia/web/Background.png'
import logo from '../img/spacia/web/logo.png'
import googleLogo from '../img/Web/Spacia/spacia/web/google 1.png'

const ResetPassword = () => {


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
                        <h6>Fill the input below with your email address so we send you a link to reset your password.</h6>

                        <br/>

                        <div class="form-group">
                          <label for="">Full Name</label>
                          <input type="email" class="form-control" placeholder="Eg. lindaantwi@gmail.com" name="" id="" aria-describedby="emailHelpId" />
                        </div>
                        <br/>
                    <br/>
                        <div style={{margin:'auto', textAlign:'center'}}>
                        <button className="button" style={{width:'100%'}}>Activate Account</button>
                        </div>
                    </Container>
                </div>
            {/* </div> */}
        </Row>
    )
}

export default ResetPassword
