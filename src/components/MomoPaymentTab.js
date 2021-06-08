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
              <label for="">Account Name</label>
              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
              {/* <small id="emailHelpId" class="form-text text-muted">Help text</small> */}
            </div>
            <br/>
            <div class="form-group">
              <label for="">Account Number</label>
              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
              {/* <small id="emailHelpId" class="form-text text-muted">Help text</small> */}
            </div>
            <br/>

            <button className="button">Update</button>

        </>
    )
}

export default CardPaymentTab
