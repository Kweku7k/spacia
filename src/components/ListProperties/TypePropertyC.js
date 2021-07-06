import React, {useState} from 'react'
import Interactive from '../Interactive'
import InteractiveOption from './InteractiveOption'
import { Dropdown } from 'react-bootstrap'
import {FaEllipsisH} from 'react-icons/fa'
import {Link } from 'react-router-dom'
const Workspace = () => {

    const [dropdown1, setdropdown1] = useState('Airport Shuttle')

    return (
        <div>
            <Interactive title="What type of Property would you like to visit">
                
                <div>

                <h6 className="flatText">Type of Workspace</h6>
                <div className="selectCard">
                    <h6 className="flatText">{dropdown1}</h6>
            
                    <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'transparent', border:'none', color:'black'}} id="dropdown-basic">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=> setdropdown1('Airport Shuttle')} href="#/action-2">Airport Shuttle</Dropdown.Item>
                    <Dropdown.Item onClick={()=> setdropdown1('Car Rentals')} href="#/action-3">Car Rentals</Dropdown.Item>
                    <Dropdown.Item onClick={()=> setdropdown1('Car Hire')} href="#/action-3">Car Hire</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                </div>


<br/>
                <div>

                <h6 className="flatText">Additional Specification</h6>
                <div className="selectCard">
                    <h6 className="flatText">None</h6>
                </div>
                </div>
            


                <Link to="/listproperty/typeOfProperty">
                    <button className="ListPropBtn">Continue</button>
                </Link>

            </Interactive>
        </div>
    )
}

export default Workspace
