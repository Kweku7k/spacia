import React from 'react'
import { Container, Table } from 'react-bootstrap'
import demo from '../img/Web/Spacia/Demo.png'
import TableRow from '../components/TableRow'
import bathtub from '../img/Web/Spacia/bathtub.png'

const Properties = () => {
    return (
        <div>
           <div className="header" style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h4>Properties</h4>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                    </form>

                    <div class="dropdown" style={{margin:'auto 30px'}}>
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown button
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
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

                {/* Figured Out How To Pass Images As Propssssss */}
                <TableRow image={demo} info="Some Text" added='February 20th' status='FOR RENT' price='Ghc30/month'></TableRow>


                {/* <hr style={{width:'100%'}}></hr> */}

                <tr style={{borderBottom:"1px dashed black"}} >
                    <td><img src={demo} width={100} alt="demo"/></td>
                    <td style={{width:200}}>
                        <div>
                            <h6>
                        COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION 
                            </h6>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                            <div style={{backgroundColor:'green', width:20, height:20}}>
                                {/* <img src={bathtub} style={{objectFit:'cover'}} alt="bathtub" /> */}
                            </div>
                            <h4>3</h4>
                            <div style={{backgroundColor:'green', width:20, height:20}}></div>
                            <h4>3</h4>
                            </div>
                        </div>
                        </td>
                    <td>13-Feb-2021</td>
                    <td><b>FOR RENT</b></td>
                    <td><button className="btn" style={{backgroundColor:'#02BD04', color:'white', fontWeight:'bold'}}>AVAILABLE</button></td>
                    <td>
                        <b>GHS 250/month</b>
                        </td>
                </tr>

                

            </Table>
</Container>

        </div>
    )
}

export default Properties
