import React from 'react'
import { Modal } from "react-bootstrap";
import { FaTimes } from 'react-icons/fa';

function InformationModal({ declineButton,acceptButton,body,title, isOpen, isClose, onSubmit, children }) {

    return (
        <Modal show={isOpen} onHide={isClose} aria-labelledby="contained-modal-title-vcenter"
        centered>
       <div style={{display:'flex', flexDirection:'row-reverse', padding:30}}>
        <FaTimes />

        <h6 style={{margin:'auto'}}><b>Delete Confirmation</b></h6>
       </div>
        <div style={{textAlign:'center', padding:30, paddingLeft:20}}>
            {children}
        </div>
        <div style={{display:'flex', padding:10, paddingBottom:40, justifyContent:'center'}} >
            <button onClick={isClose} style={{marginRight:20}} className="button-calm">{declineButton}</button>
            <button onClick={onSubmit} className="button">{acceptButton}</button>
        </div>
        </Modal>
    )
}

export default InformationModal
