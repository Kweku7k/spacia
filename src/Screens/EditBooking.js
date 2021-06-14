import React from 'react'
import { Container, Table, Dropdown } from 'react-bootstrap'
import demo from '../img/Web/Spacia/Demo.png'
import TableRow from '../components/TableRow'
import BookingTableRow from '../components/BookingTableRow'
import prop2 from '../img/Web/Spacia/prop2.png'
import prop3 from '../img/Web/Spacia/prop3.png'
import {FaCaretDown, FaCircle, FaEllipsisV, FaEllipsisH} from 'react-icons/fa'

const EditBooking = () => {


    // const [show, setShow] = useState(false);
    
    return (
        <div>
           <div className="header" style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h4>Booking Listings</h4>
                </div>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>

                    {/* <div class="dropdown" style={{margin:'auto 30px'}}>

                                                    <Dropdown>
                            <Dropdown.Toggle style={{backgroundColor:'#ECECEC', border:'none', color:'#848484'}} variant="success" id="dropdown-basic">
                                All Properties 
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                    </div> */}

                    <div>

                    <button style={{marginRight:10}} class="button-calm" >Decline</button>
                    <button class="button">Accept </button>
                    </div>


            </div>


            {/* Table */}
<Container>

            <Table>
                <tr>
                   <td>Type Of Space</td> 
                   <td >Description</td> 
                   <td>Address</td> 
                   <td>Start</td> 
                   <td>End</td> 
                   <td>User</td> 
                   <td>Price</td> 
                   <td>
                    {/* <div class="form-check form-check-inline">
                        <label class="form-check-label">
                            Check
                            <input class="form-check-input" type="checkbox" name="" id="" value="checkedValue" /> <h6>
                            </h6>
                        </label>
                    </div> */}<h6>Check</h6>
                    </td>
                 
                </tr>

                {/* <BookingTableRow /> */}

                <tr style={{borderBottom:"1px dashed black"}} >
                    <td><h6>Meeting Room</h6></td>
                    <td width="20%"><h6>20 Seater Office Space with a Conference room.</h6></td>
                    <td><h6>1 Pineapple Loop</h6></td>
                    <td>12-Jan-2020 15:00</td>
                    <td>12-Jan-2020 15:00</td>
                    <td>Michael Ohene</td>

                    <td>Ghc 150</td>
                    <td>
                    <div class="form-check" style={{textAlign:'center'}}>
                      <label class="form-check-label">
                        <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" />
                      </label>
                    </div>
                    </td>
                </tr>


                {/* Figured Out How To Pass Images As Propssssss */}


                {/* <hr style={{width:'100%'}}></hr> */}


            </Table>
{/* 
            <Modal show={show} onHide={handleClose}>
<Modal.Header closeButton>
<Modal.Title>Invite New Users</Modal.Title>
</Modal.Header>
<Modal.Body>

<div class="form-group">
<label for="">Email</label>
<input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
<br/>
 <label for="">Role</label>
 <select class="form-control" name="" id="">
   <option>Admin</option>
   <option>Employee</option>
   <option>Approver</option>
 </select>

<small id="emailHelpId" class="form-text text-muted">Help text</small>
</div>
</Modal.Body>
<Modal.Footer>
<button onClick={handleClose} className="button">Invite User</button>
</Modal.Footer>
</Modal> */}

</Container>

        </div>
    )
}

export default EditBooking
