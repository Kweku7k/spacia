import React from 'react'
import { Modal } from "react-bootstrap";

function FeedbackModal({ title, isOpen, isClose }) {

    return (
        <Modal show={isOpen} onHide={isClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <h6>Successfully Deleted a User</h6>
            </Modal.Body>
            <Modal.Footer>
            <button onClick={isClose} className="button">Okay</button>
            </Modal.Footer>
        </Modal>
    )
}

export default FeedbackModal
