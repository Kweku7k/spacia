import React from 'react'
import { Modal } from "react-bootstrap";
import { FaTimes } from 'react-icons/fa';

function InformationModal({ declineButton,acceptButton,body,title, isOpen, isClose, onSubmit, children }) {

    return (
        <Modal show={isOpen} onHide={isClose}>
       <div style={{display:'flex', flexDirection:'row-reverse', padding:30}}>
        <FaTimes />
       </div>
        <div style={{textAlign:'left', padding:30, paddingLeft:20}}>
            {children}
        </div>
        <div style={{display:'flex', padding:10}} >
            <button onClick={isClose} style={{marginRight:20}} className="button-calm">{declineButton}</button>
            <button onClick={onSubmit} className="button">{acceptButton}</button>
        </div>
        </Modal>
    )
}

export default InformationModal
