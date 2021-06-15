import React from 'react'
import { Container, Table, Dropdown, Row } from 'react-bootstrap'
import demo from '../img/Web/Spacia/Demo.png'
import TableRow from '../components/TableRow'
import BookingTableRow from '../components/BookingTableRow'
import prop2 from '../img/Web/Spacia/prop2.png'
import prop3 from '../img/Web/Spacia/prop3.png'
import {FaCaretDown, FaCircle, FaEllipsisV, FaEllipsisH, FaPlus, FaMinus} from 'react-icons/fa'
import {Link} from 'react-router-dom' 
import bookingbg from '../img/Web/Spacia/settings/payment/bookingbg.png'

import '../App.css';

const StartBooking = () => {
    const edit ={
        backgroundColor:"transparent"
    }

    const inline ={
        display:'flex',
        justifyContent:'space-evenly',
        borderRadius: 5,
        border: '1px solid #ECECEC',
        // padding:5, 
        verticalAlign:'middle'
    }

    const iconLeft ={
        // padding:3
        borderRight: '1px solid #ECECEC',
        paddingRight: 10,
        paddingTop: 4
    }
    const iconRight = {
        // padding:3
        borderLeft: '1px solid #ECECEC',
        paddingLeft: 10,
        paddingTop: 4
    }

    const bar ={
        backgroundColor:'white',
        padding: '1em',
        borderRadius:10
    }

    const showBooking = false
    return (
        <div>
           <div className="header" style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h4>Bookings</h4>
                </div>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>
                    <button class="button" style={{backgroundColor:'transparent'}}>Add New Property </button>


            </div>
            <Container >

            {/* backgroundImage:`url(${bookingbg})` */}
            <div className = 'bg'>
                <br/>
            <div style={bar}>
                <Row>
                    <div class="col-md-2">
                        <input type="email" placeholder="Type of service" class="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />
                    </div>
                    <div class="col-md-2">
                        <input type="email" placeholder="Location" class="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />
                    </div>
                    <div class="col-md-2">
                        <input type="email" placeholder="Date" class="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />
                    </div>
                    <div class="col-md-2">
                        <input type="email" placeholder="Time" class="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />
                    </div>
                    <div class="col-md-2">
                        <div style={inline}>
                            <div style={iconLeft} >

                            <FaPlus />
                            </div>
                            <h4 style={{paddingRight:10, paddingLeft:10, paddingTop:5, marginBottom:2 }} >1</h4>
                            <div style={iconRight} >
                            <FaMinus />
                            </div>
                        </div>
                    </div>

                    <div class="col-md-2">
                        <Link to='/booking'>

                        <button className="button">Search</button>
                        </Link>
                    </div>

                  
                </Row>
            </div >
            {/* <img src={bookingbg} width="100%" alt="bk" /> */}
            </div>
            </Container>
            
            {/* Table */}


        </div>
    )
}

export default StartBooking
