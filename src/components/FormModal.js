import React,{useState} from 'react'
import { Modal, Row } from "react-bootstrap";
import { FaTimes, FaImage, FaCaretDown } from 'react-icons/fa';
import imageHolder from '../img/Web/Spacia/Corp. User/Group 428.png'


function FormModal({ declineButton,acceptButton,body,title, isOpen, isClose, onSubmit, children, name, email, phone, setName }) {

    const input = {
        backgroundColor:'#ECECEC',
        border:'1px solid #DDDDDD'
    }

    // $("button").click(function() {
    //     $("#test").click();
    // })
    
    // $('#test').change(function() {
    //     $('#test_form').submit();
    // });

    // this.doClick: function()
    // const doClick = () => {
        
    // }

    const [filename, setfileName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);


    // const handleClick = (e) => {
    //     this.inputElement.click();
    //   }
    return (
        <Modal show={isOpen} onHide={isClose}>
       <div style={{display:'flex', flexDirection:'row-reverse', padding:30}}>
        <FaTimes />
        <h6 style={{margin:'auto'}}>{title}</h6>
       </div>


        <div style={{textAlign:'center', padding:30, paddingTop:10}}>

        <div style={{textAlign:'left'}}>
            <img src={imageHolder} alt="imae"/>
        </div>
        <a><h6 style={{textAlign:'Left', textDecoration:'underline', color:'blue', paddingTop:10}}>Change Image</h6></a>

{/* Event Clicker */}
        {/* <div onClick={handleClick}>
        <input ref={input => this.inputElement = input} />
      </div> */}

        {/* <div class="form-group" style={{display:'flex'}}>
          <input type="file" value={filename}
          onChange={(e) => setfileName(e.target.value)}
            class="form-control" name="" id="" aria-describedby="helpId" placeholder="Upload file"/>
            <button class="button" > Upload</button>
        </div> */}



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
        {/* </div> */}
        {/* </Modal.Footer> */}
        </Modal>
    )
}

export default FormModal
