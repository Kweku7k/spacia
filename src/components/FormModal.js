import React from 'react'
import { Modal } from "react-bootstrap";
import { FaTimes } from 'react-icons/fa';

function FormModal({ declineButton,acceptButton,body,title, isOpen, isClose, onSubmit, children }) {

    return (
        <Modal show={isOpen} onHide={isClose}>
       <div style={{display:'flex', flexDirection:'row-reverse', padding:30}}>
        <FaTimes />
       </div>
       <h4 style={{padding:10}}>{title}</h4>
        {/* <Modal.Body> */}
        <div style={{textAlign:'center', padding:30}}>
            {children}
        </div>
        {/* </Modal.Body> */}
        {/* <Modal.Footer> */}
        <div style={{display:'flex', justifyContent:'space-evenly', padding:10}} >
            <button onClick={isClose} className="button-calm">{declineButton}</button>
            <button onClick={onSubmit} className="button">{acceptButton}</button>
        </div>
        {/* </Modal.Footer> */}
        </Modal>
    )
}

export default FormModal
