import React from 'react'
import { Row } from 'react-bootstrap'
import { FaMobile, FaPhone } from 'react-icons/fa'
import CardPaymentTab from '../CardPaymentTab'
import MomoPaymentTab from '../MomoPaymentTab'

const CardPayment = () => {
    return (
        <div>
            <div className="strip">
            <h4>Manage Payments</h4>
            <br />
            </div>
            <div className='flexStrip'>

            <div className="paymentCard">
                <FaMobile />
                <h6>Card</h6>
            </div>
            <button className="paymentCard">
                <FaPhone />
                <h6>Card</h6>
            </button>
            </div>

                <br/>
                {/*  */}
           {/* <CardPaymentTab /> */}
            <MomoPaymentTab/>
        </div>
    )
}

export default CardPayment
