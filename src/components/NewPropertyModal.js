import React, {useState} from 'react'
import { Modal, Row } from "react-bootstrap";
import { FaTimes, FaImage } from 'react-icons/fa';

function NewPropertyModal({ declineButton,acceptButton,body,status,title, isOpen, isClose, onSubmit, children, info, email, phone, setInfo, beds, setBeds, baths, setBaths }) {
    const [picture, setPicture] = useState(null)

    const label = {
        textAlign:'center'
    }

    const handleImage= (e) => {
        console.log(e.target.files[0])
        console.log(picture)
        const pic = e.target.files[0]
        setPicture({pic})
        console.log(setPicture)
        
    }


    return (
        <Modal show={isOpen} onHide={isClose} style={{textAlign:'center'}}>
       <div style={{display:'flex', flexDirection:'row-reverse', padding:30, paddingBottom:0}}>
        <FaTimes />
       </div>
        {/* <Modal.Body> */} 
        <div style={{textAlign:'center', padding:30}}>
       <h4 style={{padding:10, textAlign:'left'}}>{title}</h4>

        <div style={{width:50, height:50, backgroundColor:'#ECECEC', textAlign:'center'}}>
            <FaImage />
            <input type="file" onChange={handleImage}/>
        </div>
        <br/>
        <div class="form-group">
        {/* <label for="">Email</label> */}
        <input type="text" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Property Name" value={info} onChange={(e) => setInfo(e.target.value)}/>
        <br/> 
        <input type="text" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Property Status" value={status} onChange={(e) => setInfo(e.target.value)}  />
         <br/>
         <div style={{textAlign:'left'}} >
         <label for="">Per Month</label>
        <input type="text" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Property Price" value={phone}/>
         </div>
        <br/>
         <Row >
             <div style={{textAlign:'left'}} class="col">
                 <label>No of Beds</label>
                <input class="form-control" value={beds} placeholder="Beds" onChange={(e) => setBeds(e.target.value)} value={beds} />
             </div>
             <div style={{textAlign:'left'}} class="col">
             <label >No of Beds</label>
                <input class="form-control" value={baths} placeholder="Baths" onChange={(e) => setBaths(e.target.value)} />
             </div>
         </Row>
         {/* <Row>
        
        <div className="form-group col-md-4">
        
         <select class="form-control"  name="" id="">
           <option>Admin</option>
           <option>Employee</option>
           <option>Approver</option>
         </select>
             </div>
         </Row> */}
        

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

export default NewPropertyModal
