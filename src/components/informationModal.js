import React from 'react'
import { Modal } from "react-bootstrap";

function InformationModal({ title, isOpen, isClose, onSubmit }) {

    return (
        <Modal show={isOpen} onHide={isClose}>
        <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
{/* <h6>Text</h6> */}
        <h6>Are you sure you want to delete this user</h6>
        </Modal.Body>
        <Modal.Footer>
        <button onClick={isClose} className="button-calm">Cancel</button>
        <button onClick={onSubmit} className="button">Delete</button>
        </Modal.Footer>
        </Modal>
    )
}

export default InformationModal
