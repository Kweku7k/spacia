import React from 'react'
import { Container, Row } from 'react-bootstrap'
import bg from '../img/spacia/web/Background.png'
import logo from '../img/spacia/web/logo.png'
const Signup = () => {


    const bgImage = {
        width:'100vw',
        height:'100vh',
        background: 'green',
        position:'relative',
        backgroundImage:`url(${bg})` 

    }
    const formCard ={
        width:'40%',
        position:'absolute',
        right:'10vw',
        bottom:'30vh',
        backgroundColor:'white',
        paddingTop:50,
        paddingBottom:50,
        // boxShadow: '0px 4px 38px rgba(0, 0, 0, 0.06);',
        boxShadow: "0px 4px 38px #000000, 6%"
    }

    const logopos={
        position:'relative',
        left:'5vw',
        top:'5vh'

    }

    return (
        <Row>
            <div style={bgImage}>
                <div style={logopos}>
                    <img src={logo} alt="logo"/>
                </div>
                <div style={formCard}>
                    <Container>
                        <h4>Complete Account Set Up</h4>

                        <div class="form-group">
                          <label for="">Set Password</label>
                          <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
                          <small id="emailHelpId" class="form-text text-muted">Help text</small>
                        </div>
                        <div class="form-group">
                          <label for="">Set Password</label>
                          <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
                          <small id="emailHelpId" class="form-text text-muted">Help text</small>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input class="form-check-input" type="checkbox" name="" id="" value="checkedValue"/> I agree to the Terms of Conditions and Privacy Policy
                            </label>
                        </div>
                        <div style={{margin:'auto', textAlign:'center'}}>
                        <button className="button">Activate Account</button>
                        </div>
                    </Container>
                </div>
            </div>
        </Row>
    )
}

export default Signup
