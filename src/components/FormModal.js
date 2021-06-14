import React from 'react'
import { Modal, Row } from "react-bootstrap";
import { FaCaretDown, FaEllipsisH, FaImage } from 'react-icons/fa'

function FormModal({ title, isOpen, isClose, onSubmit }) {

    return (
        <Modal show={isOpen} onHide={isClose}>
        <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {/* <h6>Text</h6> */}
        <div style={{width:50, height:50, backgroundColor:'#ECECEC', textAlign:'center'}}>
            <FaImage />
        </div>
        <br/>
        <div class="form-group">
        {/* <label for="">Email</label> */}
        <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Full Name" />
        <br/>
        <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Email Address" />
         {/* <label for="">Role</label> */}
         <br/>
        <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Phone Address" />
         <br/>
         <Row>
        
        <div className="form-group col-md-4">
        
         <select class="form-control"  name="" id="">
           <option>Admin</option>
           <option>Employee</option>
           <option>Approver</option>
         </select>
             </div>
         </Row>
        
        
        <small id="emailHelpId" class="form-text text-muted">Help text</small>
        </div>
        </Modal.Body>
        <Modal.Footer>
        <button onClick={isClose} className="button-calm">Cancel</button>
        <button onClick={onSubmit} className="button">Save</button>
        </Modal.Footer>
        </Modal>
    )
}

export default FormModal
