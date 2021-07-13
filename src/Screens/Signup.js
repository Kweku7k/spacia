import React,{useState, useEffect} from 'react'
import { Container, Row } from 'react-bootstrap'
import bg from '../img/spacia/web/Background.png'
import logo from '../img/spacia/web/logo.png'
import googleLogo from '../img/Web/Spacia/spacia/web/google 1.png'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
const Signup = () => {


    
    const history = useHistory();

    const [form, setForm] = useState(0)

    const [phonevalue, setphonevalue] = useState('')
    // form
    const [firstName, setfirstName] = useState('') 
    const [firstNameError, setfirstNameError] = useState('')

    const [terms, setterms] = useState(false)

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

    const localurl = 'https://spacia.page/users/api/v1/users'
    useEffect(() => {
        axios.post(localurl,
            // {
            //     "avatar": "https://www.google.com?avatar.jpg",
            //     "companyId": 1,
            //     "confirmPassword": {confirmpassword},
            //     "contacts": [{
            //         "isContactable": true,
            //         "isPrimary": true,
            //         "type": "mobile",
            //         "value": "+233545917791"
            //       }],
            //     "firstName": {firstName},
            //     "lastName": {lastName},
            //     "password": {password},
            //     "role": "admin",
            //     "username": {username}
            //   }
            {
                "avatar": "https://www.google.com?avatar.jpg",
                "companyId": 1,
                "confirmPassword": confirmpassword,
                "contacts": [{
                    "isContactable": true,
                    "isPrimary": true,
                    "type": "mobile",
                    "value": phone
                  }],
                "firstName": firstName,
                "lastName": lastName,
                "password": password,
                "username": email,
                "role": "ROLE_SUBSCRIBER_OWNER"
              } 

        )
        .then(res=>(

            console.log(res),
            // submitSignup(res)
            // Tenary
            (res.status = 201 ? (
                history.push("/confirm"),
                console.log("201 dey work"),
                localStorage.setItem('currentUser',res.data.data[0].username)
            ):
            (
                console.log("Didnt Work")
            ))
            
        
            ))
        .catch(err=>(console.log(err),
            localStorage.setItem('currentUser','No User')
        )
        )
        console.log(localurl)
        
    }, [form])


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

    const submitSignup = (e) =>{
        e.preventDefault()
        setForm(1)
        if(!firstName){
            setfirstNameError("This field cant be empty") 
        }
        if(!lastName){
            setlastNameError("This field cant be empty") 
        }
        if(!phone ){
            setphoneError("This field must have 10 characters") 
        }

        if(!email ){
            setEmailError("This field cant be empty") 
        }

        if (confirmpassword !== password){
            setPasswordError("The fields dont match")
            setPassword('')
            setconfirmpassword('')
        }
        // history.push("/home");



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
                          <label for="">First Name</label>
                          <input type="text" class="form-control"  value={firstName} onChange={(e) => setfirstName(e.target.value)}  placeholder="First Name" name="" id="" aria-describedby="emailHelpId" />
                            {firstNameError && 
                          <small id="emailHelpId" class="form-text" style={{color:'red'}}>{firstNameError}</small>
                            }

                        </div>
                        <br/>
                        <div class="form-group">
                          <label for="">Last Name</label>
                          <input type="text" class="form-control"  value={lastName} onChange={(e) => setlastName(e.target.value)}  placeholder="Last Name" name="" id="" aria-describedby="emailHelpId" />
                          {lastNameError && 
                          <small id="emailHelpId" class="form-text" style={{color:'red'}}>{lastNameError}</small>
                            }
                        
                        </div>
                        <br/>
                        <div class="form-group">
                          <label for="">Email</label>
                            <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Eg. somebody@company.com" name="" id="" aria-describedby="emailHelpId" />
                            {emailError && 
                          <small id="emailHelpId" class="form-text" style={{color:'red'}}>{emailError}</small>
                            }
                        </div>
                        {/* <br/> */}
                        {/* <div class="form-group">
                          <label for="">Phone Number</label>
                          <input type="string" class="form-control" value={phone} max="999" onChange={(e) => setphone(e.target.value)} name="" id="" aria-describedby="emailHelpId" placeholder="+233" />
                          {phoneError && 
                          <small id="emailHelpId" class="form-text" style={{color:'red'}}>{phoneError}</small>
                            }
                        </div> */}
                        <br/>
                            <div class="form-group">
                            <PhoneInput style={{backgroundColor:"#ECECEC",border:'1px solid #ced4da', borderRadius:5}} className="form-group"
                            placeholder="Enter phone number"
                            value={phonevalue}
                            onChange={setphonevalue}/>
                            </div>
                        <br/>
                        <div class="form-group">
                          <label for="">Password</label>
                          <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} name="" id="" aria-describedby="emailHelpId" placeholder="" />
                          {passwordError && 
                          <small id="emailHelpId" class="form-text" style={{color:'red'}}>{passwordError}</small>
                            }
                        </div>
                        <br/>
                        <div class="form-group">
                          <label for="">Confirm Password</label>
                          <input type="password" class="form-control" value={confirmpassword} onChange={(e) => setconfirmpassword(e.target.value)} name="" id="" aria-describedby="emailHelpId" placeholder="" />
                        </div>
                        <br/>
                        <div class="form-group">

                        <div class="form-check form-check-inline">
                            <label class="form-check-label">
                                <input style={{marginTop:0}} class="form-check-input" type="checkbox" name="" id="" onChange={() => setterms(!terms)} value={terms}/><h6 style={{fontSize:'smaller'}}> I agree to the <a href="#">Terms of Conditions</a> and <a href="#">Privacy Policy</a></h6>
                            </label>
                        </div>
                        </div>

                        {/* <Link to="/signin"> */}

                        <div style={{margin:'auto', textAlign:'center'}}>
                           { terms ? (
                        <button onClick={submitSignup} className="button" style={{width:'100%'}}>Activate Account</button>
                            ):(
                        <button className="button" style={{width:'100%', backgroundColor:'#f8594786'}}>Activate Account</button>
                            )}
                        </div>
                        <br/>
                        <h6 className="text-muted">Already have an account? <span><Link to="/signin" style={{color:'blue',fontSize:'smaller'}}>Sign In</Link></span></h6>

                        {/* </Link> */}
                    </Container>
                </div>
            {/* </div> */}
        </Row>
    )
}

export default Signup
