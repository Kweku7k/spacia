import React, {useState} from 'react'
import Interactive from '../Interactive'
import InteractiveOption from './InteractiveOption'
import { Dropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaEllipsisH} from 'react-icons/fa'
const Workspace = () => {

    const [dropdown1, setdropdown1] = useState('Meeting & Venue')
    const [dropdown2, setdropdown2] = useState('Hot Hour')
    return (
        <div>
            <Interactive title="What type of Property would you like to visit">
                
                <div>

                <h6 className="flatText">Type of Workspace</h6>
                <div className="selectCard">
                    <h6 className="flatText">{dropdown1}</h6>
                
                    <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'transparent', border:'none', color:'black'}} id="dropdown-basic">
                        {/* <FaEllipsisH color="black"/> */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>(setdropdown1('PrivateOffice'))} href="#/action-2">Private Office</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(setdropdown1('Hot Desk'))} href="#/action-3">Hot Desk</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(setdropdown1('Meeting & Venue'))} href="#/action-3">Meeting & Venue</Dropdown.Item>
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
                <Dropdown.Toggle style={{backgroundColor:'transparent', color:'black', border:'none'}} id="dropdown-basic">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>(setdropdown2('Hot Hour'))} href="#/action-2">Hot Hour</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(setdropdown2('Hot Day'))} href="#/action-3">Hot Day</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(setdropdown2('Week'))} href="#/action-3">Week</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(setdropdown2('Month'))} href="#/action-3">Month</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                </div>


                <Link to='meeting'>

                <button className="ListPropBtn">Continue</button>
                </Link>


            </Interactive>
        </div>
    )
}

export default Workspace
