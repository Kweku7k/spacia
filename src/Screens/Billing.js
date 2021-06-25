import React, { useState } from 'react'
import { Container, Table, Toast, Button, Modal, DropdownButton, Dropdown } from 'react-bootstrap'
import { FaCaretDown, FaEllipsisH } from 'react-icons/fa'
import PaymentTableRow from '../components/PaymentTableRow'
import Search from '../components/Search'
import UserTableRow from '../components/UserTableRow'
import mastercard from '../img/Web/Spacia/mastercard.png'


const UserManagement = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    return (
        <div>
            <div>
                {/* Header */}
                <div className="header">
                {/* <div>
                </div> */}
                <div style={{display:'flex', justifyContent:'space-between'}} >
                    <div>

                <h4><b>Billing</b></h4>
                    </div>

                    <form class="form-inline my-2 my-xl-0" style={{width:"30vw"}}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>

                    <div class="dropdown" style={{margin:'auto 30px'}}>
                        {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div> */}
                                                    <Dropdown>
                            <Dropdown.Toggle style={{backgroundColor:'#ECECEC', border:'none', color:'#848484'}} variant="success" id="dropdown-basic">
                               Filter
                                {/* <FaCaretDown /> */}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                    </div>



                </div>
            </div>
            {/* End Header */}


            <Container>
                
                <Toast style={{width:'100%', padding:20, marginBottom:50}}>
                    <h6 style={{fontWeight:'bold'}}>Transaction History</h6>
                <Table>
                    <tr className="tableUnderline">
                        <th>Date</th>
                        <th>Payment Account</th>
                        <th>Amount</th>
                        <th>Invoice</th>
                        <th>Status</th>
                    </tr>
                    
                    <PaymentTableRow date="12th June 2021" bank={mastercard} account="GCB 5023 3456 2345 2334" status="Failed" role="Admin"/>
                </Table>
                </Toast>

                {/* <Toast style={{width:'100%', padding:20}}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Search />
                    <div style={{display:'flex'}}>
                        <h6 className="text-muted" style={{marginRight:10}}>Sort by</h6>
                        <h6 style={{fontWeight:'bold'}}>Status-invited</h6>
                        <FaCaretDown />
                    </div>
                </div>
                <Table className="w3-striped">
                    <tr className="tableUnderline">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td><div> <img src="" alt="User"/>Nana Kweku Adumatta</div></td>
                        <td>mr.adumatta@gmail.com</td>
                        <td>Active</td>
                        <td><button className="role-admin">Active</button></td>
                        <td>Edit</td>
                        <td><FaEllipsisH/></td>
                    </tr>
                </Table>
                </Toast> */}

                <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Invite New Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {/* <h6>Text</h6> */}
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
      </Modal>
    </>
                </Container>

            </div>
            </div>
    )
}


export default UserManagement
