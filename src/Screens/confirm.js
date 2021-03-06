import React,{useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import bg from '../img/spacia/web/Background.png'
import logo from '../img/spacia/web/logo.png'
import googleLogo from '../img/Web/Spacia/spacia/web/google 1.png'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
const Confirm = () => {


    const history = useHistory();

    const [form, setForm] = useState(0)

    // form
    const [firstName, setfirstName] = useState('') 
    const [firstNameError, setfirstNameError] = useState('')


    const [lastName, setlastName] = useState('') 
    const [lastNameError, setlastNameError] = useState('') 


    const [phone, setphone] = useState('') 
    const [phoneError, setphoneError] = useState('') 

    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [confirmpassword, setconfirmpassword] = useState('')
    const [confirmpasswordError, setconfirmpasswordError] = useState('')

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')


    const bgImage = {
        width:'100vw',
        height:'100vw',
        background: 'white',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        position:'relative',
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
                        <h5>Thank You</h5>
                        {/* <br/> */}
                        {/* <button style={googleButton}>
                            <img src={googleLogo} alt="G"/>
                            <div style={{margin:'auto'}}>

                            <h6 style={{textAlign:'center', marginBottom:0}}>Sign Up With Google</h6>
                            </div>
                        </button> */}

                        <hr/>
                        
                        <h6>Please check your email to complete your signup.</h6>
                        {/* <Link to="/signin"> */}

                        {/* <div style={{margin:'auto', textAlign:'center'}}>
                        <button onClick={submitSignup} className="button" style={{width:'100%'}}>Activate Account</button>
                        </div> */}
                        {/* </Link> */}
                    </Container>
                </div>
            {/* </div> */}
        </Row>
    )
}

export default Confirm
