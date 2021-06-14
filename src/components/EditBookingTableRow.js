import React from 'react'
import bed from '../img/Web/Spacia/bed.png'
import bathtub from '../img/Web/Spacia/bathtub.png'
import {Dropdown, DropdownButton} from 'react-bootstrap'
import { FaEllipsisV, FaEllipsisH } from 'react-icons/fa'

{/* <TableRow info="Some Text" Added='February 20th' Status='Availble' Price='Ghc30'></TableRow> */}

const TableRow = ({image, info, added, status, price, beds, showers}) => {

    const available = {
        backgroundColor:'#02BD04', 
        color:'white', 
        border:'none',
        fontWeight:'bold', 
        borderRadius:5, 
        paddingTop:4, 
        paddingBottom:4, 
        paddingLeft:20, 
        paddingRight:20
    }
    return (
        <tr style={{borderBottom:"1px dashed black"}} >
        <td><h6>Meeting Room</h6></td>
        <td><h6>20 Seater Office Space with a Conference room.</h6></td>
        <td><h6>1 Pineapple Loop</h6></td>
        <td>12-Jan-2020 15:00</td>
        <td>12-Jan-2020 15:00</td>
        <td>Michael Ohene</td>
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
        <td><FaEllipsisH color="black" /></td>

    </tr>

    )
}

export default TableRow
