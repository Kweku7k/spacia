import React from 'react'
import {Table} from 'react-bootstrap'
import {FaEllipsisH} from 'react-icons/fa'
const UserTableRow = ({profile, name, email, status, role}) => {
    return (
        
        <>
        <tr>
            <td><div> <img src={profile} alt="User"/>{name}</div></td>
            <td>{email}</td>
            <td>{status}</td>
            <td><div>{role}</div></td>
            <td>Edit</td>
            <td><FaEllipsisH/></td>
        </tr>
        </>
    )
}

export default UserTableRow
