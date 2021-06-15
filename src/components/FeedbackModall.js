import React from 'react'
import { Modal } from "react-bootstrap";
import { FaTimes } from 'react-icons/fa';

function FeedbackModal({ declineButton, doneButton,acceptButton,body,title, isOpen, isClose, onSubmit, children }) {

    return (
        <Modal show={isOpen} onHide={isClose}>
       
       <div style={{display:'flex', flexDirection:'row-reverse', padding:30}}>
        <FaTimes />
       </div>
        {/* <Modal.Body> */}
        <div style={{textAlign:'center', padding:30}}>
            {children}
        </div>
        {/* </Modal.Body> */}
        {/* <Modal.Footer> */}
        <div style={{display:'flex', justifyContent:'space-evenly', padding:10}} >
            <button onClick={isClose} className="button-calm">{doneButton}</button>
            {/* <button onClick={onSubmit} className="button">{acceptButton}</button> */}
        </div>
        {/* </Modal.Footer> */}
        </Modal>
    )
}

export default FeedbackModal
