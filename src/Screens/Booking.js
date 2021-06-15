import React from 'react'
import { Container, Table, Dropdown, Toast } from 'react-bootstrap'
import demo from '../img/Web/Spacia/Demo.png'
import TableRow from '../components/TableRow'
import BookingTableRow from '../components/BookingTableRow'
import prop2 from '../img/Web/Spacia/prop2.png'
import prop3 from '../img/Web/Spacia/prop3.png'
import {FaCaretDown, FaCircle, FaEllipsisV, FaEllipsisH} from 'react-icons/fa'
import {Link} from 'react-router-dom' 


const Booking = () => {
    const edit ={
        backgroundColor:"transparent",
        border:'none'
    }

    const toastStyle ={
        width:'100%',
        padding:20
    }

    const showBooking = false
    return (
        <div>
           <div className="header" style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h4><b>Booking Listings</b></h4>
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

                    <button class="button" style={{backgroundColor:'transparent'}}>Add New Property </button>


            </div>


            {/* Table */}
<Container>
<Toast style={toastStyle}>
            <Table>
                <tr>
                   <td>Type Of Space</td> 
                   <td>Description</td> 
                   <td>Address</td> 
                   <td>Start</td> 
                   <td>End</td> 
                   <td>User</td> 
                   <td>Action</td> 
                   <td></td> 
                </tr>

                {/* <BookingTableRow /> */}

                <tr style={{borderBottom:"1px dashed black"}} >
                    <td><h6>Meeting Room</h6></td>
                    <td><h6>20 Seater Office Space with a Conference room.</h6></td>
                    <td><h6>1 Pineapple Loop</h6></td>
                    <td>12-Jan-2020 15:00</td>
                    <td>12-Jan-2020 15:00</td>
                    <td>Michael Ohene</td>
                    <td>
                    <Dropdown>
  <Dropdown.Toggle  style={edit} id="dropdown-basic">
        <FaEllipsisH color="black"/>
  </Dropdown.Toggle>

  <Dropdown.Menu>
      <Link to='/editbooking'>
    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
    </Link>
    <Dropdown.Item href="#/action-2">Cancel</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown></td>
                    <td><FaEllipsisH color="black" /></td>
                </tr>




            </Table>
            </Toast>
</Container>

        </div>
    )
}

export default Booking
