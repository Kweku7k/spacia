import React from 'react'
import { Modal, Row } from "react-bootstrap";
import { FaTimes, FaImage, FaCaretDown } from 'react-icons/fa';
import imageHolder from '../img/Web/Spacia/Corp. User/Group 428.png'


function FormModal({ declineButton,acceptButton,body,title, isOpen, isClose, onSubmit, children, name, email, phone, setName }) {

    const input = {
        backgroundColor:'#ECECEC',
        border:'1px solid #DDDDDD'
    }

    return (
        <Modal show={isOpen} onHide={isClose}>
       <div style={{display:'flex', flexDirection:'row-reverse', padding:30}}>
        <FaTimes />
        <h6 style={{margin:'auto'}}>{title}</h6>
       </div>
       {/* <h4 style={{padding:10}}>{title}</h4> */}
        {/* <Modal.Body> */} 
        <div style={{textAlign:'center', padding:30, paddingTop:10}}>
        <div style={{textAlign:'left'}}>
            <img src={imageHolder} alt="imae"/>
        </div>
        <br/>
        <div class="form-group">
        {/* <label for="">Email</label> */}
        <input style={input} type="name" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="FullName" value={name} onChange={(e) => setName(e.target.value)}/>
        <br/> 
        <input style={input} type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Email" value={email} onChange={(e) => setName(e.target.value)}  />
         {/* <label for="">Role</label> */}
         <br/>
        <input style={input} type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Phone Address" value={phone}/>
         <br/>
         <Row>
        
        <div className="form-group col-md-4">
        
         <select class="form-control"  name="" id="">
           <option>
               Admin

               </option>
           
           <option>Employee</option>
           <option>Approver</option>
         </select>
             </div>
         </Row>
        

        </div>
        </div>
        {/* </Modal.Body> */}
        {/* <Modal.Footer> */}
        <div style={{display:'flex', justifyContent:'space-evenly', padding:10, paddingBottom:30}} >
            <button onClick={isClose} className="button-calm">{declineButton}</button>
            <button onClick={onSubmit} className="button">{acceptButton}</button>
        </div>
        {/* </Modal.Footer> */}
        </Modal>
    )
}

export default FormModal
