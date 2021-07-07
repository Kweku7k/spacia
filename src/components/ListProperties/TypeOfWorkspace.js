import React, {useState} from 'react'
import Interactive from '../Interactive'
import InteractiveOption from './InteractiveOption'
import { Dropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaEllipsisH} from 'react-icons/fa'
const Workspace = () => {
    const [dropdown1, setdropdown1] = useState("Private Office")
    const [dropdown2, setdropdown2] = useState("Serviced")
    return (
        <div>
            <Interactive title="What type of Property would you like to visit">
                
                <div>

                <h6 className="flatText">Type of Workspace</h6>
                <div className="selectCard">
                    <h6 className="flatText">{dropdown1}</h6>
                
                    <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'transparent', color:'black', border:'none'}} id="dropdown-basic">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>setdropdown1("Private Office")} href="#/action-2">Private Office</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setdropdown1("HotDesk")} href="#/action-3">Hot Desk</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setdropdown1("Meeting & Venue")} href="#/action-3">Meeting & Venue</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                </div>


<br/>
                <div>

                <h6 className="flatText">Additional Specification</h6>
                <div className="selectCard">
                    <h6 className="flatText">{dropdown2}</h6>
                
                    <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'transparent', border:'none', color:'black'}} id="dropdown-basic">
                        {/* <FaEllipsisH color="black"/> */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>setdropdown2("Serviced")} href="#/action-2">Serviced</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setdropdown2("Finished")} href="#/action-3">Finished</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setdropdown2("Unfinished")} href="#/action-3">Unfinished</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                </div>



                <Link to="hotdesk">

                    <button className="ListPropBtn">Continue</button>
                </Link>

            </Interactive>
        </div>
    )
}

export default Workspace
