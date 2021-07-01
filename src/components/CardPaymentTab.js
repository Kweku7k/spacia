import React from 'react'
import {Row} from 'react-bootstrap'

const CardPaymentTab = () => {
    return (
        <>
             <Row>
                <div className="col">
                    <h6>New Card</h6>
                    <hr style={{width:'30%', color:'red'}}/>
                </div>
                <div className="col headerUnderline">
                    <h6>Saved Card</h6>
                </div>
            </Row>
            <br />

            <div class="form-group">
              <label for="">Card Name</label>
              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
              {/* <small id="emailHelpId" class="form-text text-muted">Help text</small> */}
            </div>
            <br/>
            <div class="form-group">
              <label for="">Card Number</label>
              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
              {/* <small id="emailHelpId" class="form-text text-muted">Help text</small> */}
            </div>
            <br/>
            <Row>

            <div class="form-group col">
              <label for="">Expiry Date</label>
              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
              {/* <small id="emailHelpId" class="form-text text-muted">Help text</small> */}
            </div>
            <div class="form-group col">
              <label for="">CVV</label>
              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
              {/* <small id="emailHelpId" class="form-text text-muted">Help text</small> */}
            </div>
            </Row>
            <br/>
            <button className="button">Save</button>

        </>
    )
}

export default CardPaymentTab
