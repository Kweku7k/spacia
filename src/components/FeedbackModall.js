import React from 'react'
import { Modal } from "react-bootstrap";
import { FaTimes } from 'react-icons/fa';

function FeedbackModal({ declineButton, doneButton,acceptButton,body,title, isOpen, isClose, onSubmit, children }) {

    return (
        <Modal show={isOpen} onHide={isClose} aria-labelledby="contained-modal-title-vcenter"
        centered>
       
       <div style={{display:'flex', flexDirection:'row-reverse', padding:30}}>
        <FaTimes />
        <h6 style={{margin:'auto'}}><b>{title}</b></h6>
       </div>
        {/* <Modal.Body> */}
        <div style={{textAlign:'center', padding:30}}>
            {children}
        </div>
        {/* </Modal.Body> */}
        {/* <Modal.Footer> */}
        <div style={{display:'flex', justifyContent:'space-evenly', padding:10, paddingBottom:30}} >
            <button onClick={isClose} className="button-calm">{doneButton}</button>
            {/* <button onClick={onSubmit} className="button">{acceptButton}</button> */}
        </div>
        {/* </Modal.Footer> */}
        </Modal>
    )
}

export default FeedbackModal
