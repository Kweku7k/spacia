import React from 'react'
import { Modal, Row } from "react-bootstrap";
import { FaTimes, FaImage } from 'react-icons/fa';

function FormModal({ declineButton,acceptButton,body,title, isOpen, isClose, onSubmit, children, name, email, phone, setName }) {

    return (
        <Modal show={isOpen} onHide={isClose}>
       <div style={{display:'flex', flexDirection:'row-reverse', padding:30}}>
        <FaTimes />
       </div>
       <h4 style={{padding:10}}>{title}</h4>
        {/* <Modal.Body> */} 
        <div style={{textAlign:'center', padding:30}}>
        <div style={{width:50, height:50, backgroundColor:'#ECECEC', textAlign:'center'}}>
            <FaImage />
        </div>
        <br/>
        <div class="form-group">
        {/* <label for="">Email</label> */}
        <input type="name" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="FullName" value={name} onChange={(e) => setName(e.target.value)}/>
        <br/> 
        <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Email" value={email} onChange={(e) => setName(e.target.value)}  />
         {/* <label for="">Role</label> */}
         <br/>
        <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Phone Address" value={phone}/>
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
        

        </div>
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
