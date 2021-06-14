import React ,{useState} from 'react'
import { Modal } from "react-bootstrap";

function NewModal({ title, isOpen, isClose }) {
    // const [isOpen, setOpen] = useState(true)
    // isOpen = true;

    return (
        <Modal show={isOpen} onHide={isClose}>
            <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            {/* <h6>Text</h6> */}
            <h6>Successfully Deleted a User</h6>
            </Modal.Body>
            <Modal.Footer>
            <button onClick={isOpen} className="button">Okay</button>
            </Modal.Footer>
        </Modal>
    )
}

export default NewModal
