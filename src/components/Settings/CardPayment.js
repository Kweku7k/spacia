import React from 'react'
import { Link } from "react-router-dom";
import { Row } from 'react-bootstrap'
import { FaCreditCard, FaMobile, FaMobileAlt, FaPhone } from 'react-icons/fa'
import CardPaymentTab from '../CardPaymentTab'
import MomoPaymentTab from '../MomoPaymentTab'
// import Checkout from "./Checkout";

const CardPayment = () => {
    return (
        <div>
            <div className="strip">
            <h4>Manage Payments</h4>
            <br />
            </div>
            <div className='flexStrip'>

            <div style={{width:170}} className="paymentCard-active">
                <FaCreditCard style={{marginRight:10}} />
                <h6 style={{marginBottom:0}}>Card</h6>
            </div>
            <Link style={{textDecoration:'transparent'}}  to="/settings/momopayment">

            <button style={{width:200}} className="paymentCard">
                <FaMobileAlt style={{marginRight:10}} />
                <h6 style={{marginBottom:0}}>Mobile Money</h6>
            </button>
            </Link>
            {/* <Link className="paymentCard" style={{ textDecoration: 'none' }} to="/checkout">
                Checkout
            </Link> */}
            </div>

                <br/>
                {/*  */}
           <CardPaymentTab />
            {/* <MomoPaymentTab/> */}
        </div>
    )
}

export default CardPayment
