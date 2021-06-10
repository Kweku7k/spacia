import React from 'react'
import {Table} from 'react-bootstrap'
import {FaEllipsisH, FaCaretDown} from 'react-icons/fa'
const UserTableRow = ({profile, name, email, status, role, style, statusStyle}) => {
    
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


const active ={
    color: 'green',
    fontWeight:'bold'
}

    return (
        <>
        <tr>
            <td><div> <img src={profile} style={{marginRight:10}} alt="User"/>{name}</div></td>
            <td>{email}</td>

            <td style={statusStyle}> <div>{status} <FaCaretDown color="black" /> </div> </td>
            
            <td><button style={style}>{role}</button></td>
            <td>
                <a href="#">Edit</a>
            </td>
            <td><FaEllipsisH/></td>
        </tr>
        </>
    )
}

export default UserTableRow
