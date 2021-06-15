import React from 'react'
import { Container, Table, Dropdown, Toast } from 'react-bootstrap'
import demo from '../img/Web/Spacia/Demo.png'
import TableRow from '../components/TableRow'
import prop2 from '../img/Web/Spacia/prop2.png'
import prop3 from '../img/Web/Spacia/prop3.png'
import {FaCaretDown} from 'react-icons/fa'


const Properties = () => {
    return (
        <div>
           <div className="header" style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h4><b>Properties</b></h4>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <form class="form-inline my-2 my-lg-0">
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
                                All Properties 
                                {/* <FaCaretDown /> */}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                    </div>

                    <button class="button">Add New Property </button>

                </div>
            </div>


            {/* Table */}
<Container>

            <Table>
                <tr>
                   <td>Photo</td> 
                   <td>Property Info</td> 
                   <td>Added on</td> 
                   <td>Property Status</td> 
                   <td>Status</td> 
                   <td>Price</td> 
                </tr>

                {/* <div style={{boxShadow: "0px 4px 17px #F2F2F2"}}> */}




                {/* Figured Out How To Pass Images As Propssssss */}
                <TableRow image={demo} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added='February 20th' beds="3" showers="2" status='FOR RENT' price='Ghc30/month'></TableRow>
{/* </Toast> */}

                <TableRow image={prop2} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added='February 20th' beds="3" showers="2" status='FOR RENT' price='Ghc30/month'></TableRow>
                <TableRow image={prop3} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added='February 20th' beds="3" showers="2" status='FOR RENT' price='Ghc30/month'></TableRow>
                
                {/* </div> */}


                {/* <hr style={{width:'100%'}}></hr> */}


            </Table>
</Container>

        </div>
    )
}

export default Properties
