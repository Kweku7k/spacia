import React from 'react'
import { Container, Table, Dropdown } from 'react-bootstrap'
import demo from '../img/Web/Spacia/Demo.png'
import TableRow from '../components/TableRow'
import AddPropTableRow from '../components/AddPropTableRow'
import prop2 from '../img/Web/Spacia/prop2.png'
import prop3 from '../img/Web/Spacia/prop3.png'
import {FaCaretDown} from 'react-icons/fa'


const Properties = () => {
    return (
        <div>
           <div className="header" style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h4>Added Properties</h4>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                {/* <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />

                    </form> */}

                    {/* <div class="dropdown" style={{margin:'auto 30px'}}> */}
                        {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div> */}
                                                    {/* <Dropdown>
                            <Dropdown.Toggle style={{backgroundColor:'#ECECEC', border:'none', color:'#848484'}} variant="success" id="dropdown-basic">
                                All Properties 
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown> */}
                    {/* </div> */}

                    <button class="button-yellow">Add New Property </button>

                </div>
            </div>


            {/* Table */}
<Container>

            <Table>
                <tr>
                   <td></td> 
                   <td></td> 
                   <td>Type of Space</td> 
                   <td>Quantity</td> 
                   <td>From</td> 
                   <td>To</td> 
                   <td>Price</td> 
                   <td>Sum Total</td> 
                </tr>

                {/* Figured Out How To Pass Images As Propssssss */}
                <AddPropTableRow image={demo} info="Private Office" added='February 20th' beds="3" showers="2" status='FOR RENT' price='30'></AddPropTableRow>
                {/* <TableRow image={prop2} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added='February 20th' beds="3" showers="2" status='FOR RENT' price='Ghc30/month'></TableRow>
                <TableRow image={prop3} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added='February 20th' beds="3" showers="2" status='FOR RENT' price='Ghc30/month'></TableRow>
                 */}


                {/* <hr style={{width:'100%'}}></hr> */}


            </Table>
</Container>

        </div>
    )
}

export default Properties
