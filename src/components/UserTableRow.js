import React from 'react'
import {Table, Dropdown, DropdownButton} from 'react-bootstrap'
import {FaEllipsisH, FaCaretDown} from 'react-icons/fa'
const UserTableRow = ({profile, name, email, status, role, style, statusStyle, onDelete, onEdit}) => {

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
    backgroundColor: 'transparent'
}

const active ={
    color: 'green',
    fontWeight:'bold'
}

    return (
        <>
        <tr>
            <td><div> <img src={profile} style={{marginRight:10}} alt="User"/>{name}</div></td>
            <td>{email}</td>

            <td style={statusStyle}>
                       <Dropdown>
                        <Dropdown.Toggle variant="success" style={edit} id="dropdown-basic">
                                <h6 style={{color:'blue'}}>Active</h6>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick = {onEdit} href="#/action-1">Edit</Dropdown.Item>
                            <Dropdown.Item onClick = {onDelete} href="#/action-2">Delete</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Disable</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Reset Password</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown> 
            </td>
            
            <td><button style={style}>{role}</button></td>
            <td>
                <h6 style={{color:'blue', textDecoration:'underline'}} href="#" onClick={onEdit}>Edit</h6>
            </td>
            <td>
            <Dropdown>
  <Dropdown.Toggle variant="success" style={edit} id="dropdown-basic">
        <FaEllipsisH color="black"/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick = {onEdit} href="#/action-1">Edit</Dropdown.Item>
    <Dropdown.Item onClick = {onDelete} href="#/action-2">Delete</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Disable</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Reset Password</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
            </td>
        </tr>
        </>
    )
}

export default UserTableRow
