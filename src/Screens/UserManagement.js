import React, { useState } from 'react'
import { Container, Table, Toast, Button, Row, Modal } from 'react-bootstrap'
import { FaCaretDown, FaEllipsisH, FaImage } from 'react-icons/fa'
import Search from '../components/Search'
import UserTableRow from '../components/UserTableRow'
import img from '../img/Web/Spacia/Ellipse.png'
import peter from '../img/Web/Spacia/Peter.png'
import LoadingPage from '../components/LoadingPage'
import NoData from '../components/NoData'

const UserManagement = () => {

    const admin = {
        backgroundColor:'#F3D5D1', 
        color:'#F85A47', 
        border:'none',
        fontWeight:'bold', 
        borderRadius:5, 
        paddingTop:4, 
        paddingBottom:4, 
        paddingLeft:20, 
        paddingRight:20
    }
    const approver = {
        backgroundColor:'#FEE6C2', 
        color:'#F99500', 
        border:'none',
        fontWeight:'bold', 
        borderRadius:5, 
        paddingTop:4, 
        paddingBottom:4, 
        paddingLeft:20, 
        paddingRight:20
    }
    const employee = {
        backgroundColor:'#D7EFD7', 
        color:'#02BD04', 
        border:'none',
        fontWeight:'bold', 
        borderRadius:5, 
        paddingTop:4, 
        paddingBottom:4, 
        paddingLeft:20, 
        paddingRight:20
    }

    const inactive = {
        color: '#9B9B9B',
        fontWeight:'bold'
    }

    const active = {
        color: '#2B86FF',
        fontWeight:'bold'
    }

    const [show, setShow] = useState(false);
    const [deleteshow, setdeleteShow] = useState(false);
    const [editShow, setEditShow] = useState(false);
    // const [loaded, setLoaded] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDeleteClose = () => setdeleteShow(false);
    const handleDeleteShow = () => setdeleteShow(true);
    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);
    const loaded = true
  


    return (
        <div>
            
            <div>
                {/* Header */}
            <div className="header">
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h4>User Management</h4>

                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>

                

                    <button class="button" onClick={handleShow}>Invite New User </button>

                </div>
            </div>
            {/* End Header */}

            { loaded ? (
 <Container>
                
 <Toast style={{width:'100%', padding:20, marginBottom:50}}>
 <Table>
     <tr className="tableUnderline">
         <th>Name</th>
         <th>Email</th>
         <th>Status</th>
         <th>Role</th>
         <th>Action</th>
     </tr>
     
     <UserTableRow profile={img} name="Nana Kweku Adumatta" email="mr.adumatta@gmail.com" status="Active" statusStyle={active} role="ADMIN" style={admin}/>
     <UserTableRow profile={peter} name="Peter Griffin" email="petergriffin@gmail.com" statusStyle={inactive} status="Inactive - On leave" role="APPROVER" style={approver}/>
 </Table>
 </Toast>

 <Toast style={{width:'100%', padding:20}}>
 <div style={{display:'flex', justifyContent:'space-between'}}>
     <Search />
     <div style={{display:'flex'}}>
         <h6 className="text-muted" style={{fontSize:'smaller', marginRight:10}}>Sort by:</h6>
         <h6 style={{fontWeight:'bold', fontSize:'smaller'}}>Status-invited</h6>
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
     <UserTableRow profile={peter} name="Peter Griffin" email="petergriffin@gmail.com" status="Active" statusStyle={active} role="EMPLOYEE"  style={employee} onDelete={handleDeleteShow} onEdit={handleEditShow}/>
 </Table>
 </Toast>

 <>
{/* <Button variant="primary" onClick={handleShow}>
Launch demo modal
</Button> */}


{/* Invite User */}

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

{/* InviteUser */}



{/* Delete User */}
<Modal show={deleteshow} onHide={handleDeleteClose}>
<Modal.Header closeButton>
<Modal.Title>Delete</Modal.Title>
</Modal.Header>
<Modal.Body>
{/* <h6>Text</h6> */}
<h6>Are you sure you want to delete this user</h6>
</Modal.Body>
<Modal.Footer>
<button onClick={handleDeleteClose} className="button-calm">Cancel</button>
<button onClick={handleDeleteClose} className="button">Delete</button>
</Modal.Footer>
</Modal>

{/* Delete User */}

{/* Edit User */}

<Modal show={editShow} onHide={handleEditClose}>
<Modal.Header closeButton>
<Modal.Title>Invite New Users</Modal.Title>
</Modal.Header>
<Modal.Body>
{/* <h6>Text</h6> */}
<div style={{width:50, height:50, backgroundColor:'#ECECEC', textAlign:'center'}}>
    <FaImage />
</div>
<br/>
<div class="form-group">
{/* <label for="">Email</label> */}
<input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Full Name" />
<br/>
<input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Email Address" />
 {/* <label for="">Role</label> */}
 <br/>
<input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Phone Address" />
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


<small id="emailHelpId" class="form-text text-muted">Help text</small>
</div>
</Modal.Body>
<Modal.Footer>
<button onClick={handleEditClose} className="button-calm">Cancel</button>
<button onClick={handleEditClose} className="button">Save</button>
</Modal.Footer>
</Modal>

{/* Delete User */}





</>
 </Container>
            ) : <NoData/>}

           

            </div>
        </div>
    )
}


export default UserManagement
