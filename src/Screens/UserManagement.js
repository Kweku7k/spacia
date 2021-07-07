import React, { useState } from 'react'
import { Container, Table, Toast, Button, Row, Modal } from 'react-bootstrap'
import { FaCaretDown, FaTimes, FaEllipsisH, FaImage } from 'react-icons/fa'
import Search from '../components/Search'
import UserTableRow from '../components/UserTableRow'
import img from '../img/Web/Spacia/Ellipse.png'
import peter from '../img/Web/Spacia/Peter.png'
import profile from '../img/Web/Spacia/profile.png'
import profile3 from '../img/Web/Spacia/profile3.png'


import LoadingPage from '../components/LoadingPage'
import NoData from '../components/NoData'
import cModal from '../components/cModal'
import check from '../img/Web/Spacia/check.png'


import InformationModal from "../components/informationModal";
import FeedBackModal from "../components/feedbackModal";
import FormModal from "../components/FormModal";
import FeedbackModall from '../components/FeedbackModall'
 
import { InputTags } from 'react-bootstrap-tagsinput'
import 'react-bootstrap-tagsinput/dist/index.css'
 

const UserManagement = () => {
    // Functions
    const deleteUser = (id) =>{
        setusers(Users.filter((user) => user.id !== id))
    }

    const addUser = (user) => {
        const id = Math.floor(Math.random() * 10000);
        const newuser = {id, ...user}
        setusers([...Users, newuser ])
    }


    const [name, setName] = useState('Nana Kweku')
    const [email, setEmail] = useState('mr.adumatta@gmail.com')
    const [phone, setPhone] = useState('0545977791')
   

    

    // STYLES
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


    const [Users, setusers] =  useState([
        {
            id: 1,
            name: "Nana Kweku Adumatta",
            email: "mr.adumatta@gmail.com",
            status:"Active",
            role:"Admin"
        },
        {
            id: 2,
            name: "Nana",
            email: "mr.adumatta@gmail.com",
            status:"Active",
            role:"Admin"
        }
])
    //set state to toggle invite user 
    const [show, setShow] = useState(false);

    //set state to toggle edit user 
    const [editShow, setEditShow] = useState(false);

    //set state to toggle delete user 
    const [deleteshow, setdeleteShow] = useState(false);

    //set state to toggle confirm delete user 
    const [confirmDelete, setConfirmDelete] = useState(false);
    
    //set state to toggle confirm adding user 
    const [confirmUserAddition, setConfirmUserAddition] = useState(false);
    // const [loaded, setLoaded] = useState(false);
    
    const [state, setState] = useState([])

    // Functions to toggle Invite User Modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    // Functions to toggle Delete Modal
    const handleDeleteClose = () => setdeleteShow(false);
    const handleDeleteShow = (id) => {
        // console.log(id)
        console.log(id);
        setdeleteShow(true)
        deleteUser(id)
        }
    
    // Functions to toggle Edit User Modal
    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);
    
    // Functions to toggle confirm user deletion Modal
    const confirmDeleteClose = () => setConfirmDelete(false);
    const confirmDeleteOpen = () => {
        setConfirmDelete(true);
        setdeleteShow(!deleteshow);   
    }
     
    // Functions to toggle confirm adding user
    const confirmUserClose = () => setConfirmUserAddition(false);
    const confirmUserOpen = () => {
        setConfirmUserAddition(true);
        setEditShow(!editShow);   
    }


    // Functions to toggle disable user
    // const confirmDisableUser = () => setDisableModal(false);

    const confirmDisableUser = () => {
        setConfirmDisableModal(true)
        setDisableModal(false);   
    }
    
    const [disableModal, setDisableModal] = useState(false)
    const [confirmDisableModal,setConfirmDisableModal] = useState(false)

    const handleDisableUser = () => {
        console.log("Here")
        setDisableModal(true)
    }

    const loaded = true;


    // Reset Password

    const [resetPasswordModal, setResetPasswordModal] = useState(false)
    const [confirmResetPasswordModal, setConfirmResetPasswordModal] = useState(false)


    const closeResetPasswordModal = () =>{
        setResetPasswordModal(false)

    }

    const confirmResetPassword = () =>{
        setResetPasswordModal(false)
        setConfirmResetPasswordModal(true)
    }

    return (
    <div>
        <div>
        {/* Header */}
        <div className="header">
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <h4><b>User Management</b></h4>

            {/* Search Functionality */}
            <form class="form-inline my-2 my-xl-0" style={{width:"30vw"}}>
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
            {/* {Users.map((user)=>(
                <UserTableRow profile={img} name={user.name} email={user.email} status={user.status} statusStyle={active} role="ADMIN" style={admin} onDelete={() => handleDeleteShow(user.id)} onEdit={handleEditShow} />
            ))} */}
            <UserTableRow profile={img} name="Ronald Richards" email="ronaldrichards02@gmail.com" statusStyle={inactive} status="Inactive - On leave" role="APPROVER" style={approver}/>
            <UserTableRow profile={peter} name="Peter Griffin" email="petergriffin@gmail.com" statusStyle={inactive} status="Inactive - On leave" role="APPROVER" style={approver}/>
        </Table>
    </Toast>

    {/* <div style={{ margin: 10 }}>
      <div className='input-group'>
        <InputTags values={state} onTags={(value) => setState(value.values)} />
        <button
          className='btn btn-outline-secondary'
          type='button'
          data-testid='button-clearAll'
          onClick={() => {
            setState([])
          }}
        >
          Delete all
        </button>
      </div>
      <hr />
      <ol>
        {state.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ol>
    </div> */}

    <Toast style={{width:'100%', padding:20}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <Search />
            <div style={{display:'flex'}}>
                <h6 className="text-muted" style={{fontSize:'smaller', marginRight:10}}>Sort by:</h6>
                <h6 style={{fontWeight:'bold', fontSize:'smaller'}}>Status-invited</h6>
                <FaCaretDown />
            </div>
        </div>

        {/* Second Table */}
        <Table className="w3-striped">
            <tr className="tableUnderline">
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Role</th>
                <th>Action</th>
            </tr>

            <UserTableRow profile={peter} name="Floyd Miles" email="petergriffin@gmail.com" status="Active" statusStyle={inactive} role="EMPLOYEE"  style={employee} onDelete={handleDeleteShow} onEdit={() => handleEditShow()} onDisable={() => handleDisableUser()} onReset={() => setResetPasswordModal(true)} />
          <UserTableRow profile={img} name="Peter Griffin" email="petergriffin@gmail.com" status="Active" statusStyle={active} role="EMPLOYEE"  style={employee} onDelete={handleDeleteShow} onEdit={() => handleEditShow()} />
            <UserTableRow profile={profile3} name="Peter Griffin" email="petergriffin@gmail.com" status="Active" statusStyle={active} role="EMPLOYEE"  style={employee} onDelete={handleDeleteShow} onEdit={() => handleEditShow()} />

        </Table>
    </Toast>

 <>
{/* <Button variant="primary" onClick={handleShow}>
Launch demo modal
</Button> */}


{/* Invite User */}

<Modal size="lg" show={show} aria-labelledby="contained-modal-title-vcenter" centered onHide={handleClose}>
<div class="form-group" style={{padding:20}}>
<div style={{display:'flex', flexDirection:'row-reverse', padding:10, paddingLeft:0}}>
        <FaTimes onClick={handleClose} />
        <h6 style={{marginRight:'auto'}}><b>Invite New Users</b></h6>
       </div>
<label for="" style={{fontSize:14}} class="text-muted">Email Address</label>
<p>{state}</p>
<div style={{  background:'white',  }}>
      <div style={{margin:0, background:'#DDDDDD'}} className='input-group'>
        <InputTags style={{backgroundColor:'white'}} values={state} onTags={(value) => setState(value.values)} />
        {/* <button
          className='btn btn-outline-secondary'
          type='button'
          data-testid='button-clearAll'
          onClick={() => {
            setState([])
          }}
        >
          Delete all
        </button> */}
      </div>
    </div>


<br/>
 <label style={{fontSize:14}} class="text-muted" for="">Role</label>
 <select class="form-control" name="" id="">
   <option>Admin</option>
   <option>Employee</option>
   <option>Approver</option>
 </select>

<br/>
<div>

<button onClick={handleClose} className="button">Invite User</button>
</div>
</div>
{/* </Modal.Body> */}

</Modal>

{/* Delete User */}
    {/* <Modal show={deleteshow} onHide={handleDeleteClose}>
    <Modal.Header closeButton>
    <Modal.Title>Delete</Modal.Title>
    </Modal.Header>
    <Modal.Body>
<h6>Text</h6>
    <h6>Are you sure you want to delete this user</h6>
    </Modal.Body>
    <Modal.Footer>
    <button onClick={handleDeleteClose} className="button-calm">Cancel</button>
    <button onClick={confirmDeleteOpen} className="button">Delete</button>
    </Modal.Footer>
    </Modal> */}

<FormModal title="Edit User" isOpen={editShow} isClose={handleEditClose} onSubmit={confirmUserOpen} acceptButton="Update User" declineButton="Cancel" name={name} phone={phone} email={email} setName={setName} />


<FeedbackModall title="Confirm User Addition" isOpen={confirmUserAddition} isClose={confirmUserClose} doneButton="Done">
    <img src={check} alt="check"/>
        <h6 style={{paddingTop:10}}>This user has been added</h6>
</FeedbackModall>


{/* Disable User */}
<InformationModal title="Confirm Disable" isOpen={disableModal} isClose={handleDisableUser } onSubmit={confirmDisableUser} acceptButton="Disable User" declineButton="Cancel">
    <h6>Are you sure you want to disbale this User</h6>
</InformationModal>

<FeedbackModall isOpen={confirmDisableModal} isClose={() => setConfirmDisableModal(false)} doneButton="Okay">
        <img src={check} alt="check"/>
        <h6 style={{paddingTop:10}}>This user has been deleted</h6>
</FeedbackModall>
{/* End of Disable User */}

{/* Reset Password */}
<InformationModal title="Confirm Disable" isOpen={resetPasswordModal} isClose={closeResetPasswordModal } onSubmit={confirmResetPassword} acceptButton="Reset Password" declineButton="Cancel">
    <h6>Are you sure you want to reset password for this user</h6>
</InformationModal>

<FeedbackModall isOpen={confirmResetPasswordModal} isClose={() => setConfirmResetPasswordModal(false)} doneButton="Okay" >
        <img src={check} alt="check"/>
        <h6 style={{paddingTop:10}}>This user recieved a reset password link</h6>
</FeedbackModall>
{/* End of Reset Password */}


<InformationModal title="Confirm Deletion" isOpen={deleteshow} isClose={handleDeleteClose} onSubmit={confirmDeleteOpen} acceptButton="Delete User" declineButton="Cancel">
    <h6>Are you sure you want to delete this User</h6>
</InformationModal>

<FeedbackModall isOpen={confirmDelete} isClose={confirmDeleteClose} doneButton="Okay">
        <img src={check} alt="check"/>
        <h6 style={{paddingTop:10}}>This user has been deleted</h6>
</FeedbackModall>





</>
 </Container>
            ) : <NoData/>}

           

            </div>
        </div>
    )
}


export default UserManagement
