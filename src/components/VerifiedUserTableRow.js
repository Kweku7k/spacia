import React from 'react'
import {Table, Dropdown, DropdownButton} from 'react-bootstrap'
import {FaEllipsisH, FaCaretDown} from 'react-icons/fa';
import default_avatar from '../img/avatar.png'

const VerifiedUserTableRow = ({profile, name, email, status, role, style, onDelete, onDisable, onReset, onEdit}) => {

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
    backgroundColor:'#F3D5D1', 
    color:'#F99500', 
    border:'none',
    fontWeight:'bold', 
    borderRadius:5, 
    paddingTop:4, 
    paddingBottom:4, 
    paddingLeft:20, 
    paddingRight:20
}

const edit={
    border: 'none',
    backgroundColor: 'transparent',
    display:'flex',
    paddingLeft:0,
    color:'transparent',

}

const avatar = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    marginRight: '10px'
}


    return (
        <>
        <tr>
            <td><div> <img src={(profile) ? profile : default_avatar} style={avatar} alt="avatar"/>{name}</div></td>
            <td style={{paddingTop: '20px'}}>{email}</td>

            <td>
            <h6 style={{color: (status === 'Active') ? '#02BD04' : '#F99500', fontWeight:'bold', paddingTop: '7px'}}>{status}</h6>

                {/* Tenary conditional statement */}
                {/* <div className={`banner ${active ? "active" : ""}`}>{children}</div> */}
                       {/* <Dropdown>
                        <Dropdown.Toggle style={edit} id="dropdown-basic">
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick = {onEdit} href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item onClick = {onDelete} href="#/action-2">Delete</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Disable</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Reset Password</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>  */}
            </td>
            
            <td><button style={style}>{role}</button></td>
            
            <td>
            

            <Dropdown>
  <Dropdown.Toggle color="red" style={edit}>
        <FaEllipsisH color="black"/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    {/* <Dropdown.Item onClick = {onEdit} href="#/action-1">Edit</Dropdown.Item> */}
    {/* <Dropdown.Item onClick = {onDelete} href="#/action-2">Delete</Dropdown.Item> */}
    <Dropdown.Item onClick = {onDisable} href="#/action-3">Disable</Dropdown.Item>
    <Dropdown.Item onClick = {onReset} href="#/action-3">Reset Password</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </td>
        </tr>
        </>
    )
}

export default VerifiedUserTableRow
