import React from 'react'
import Interactive from '../Interactive'
import InteractiveOption from './InteractiveOption'
import { Dropdown } from 'react-bootstrap'
import {FaEllipsisH} from 'react-icons/fa'
const Workspace = () => {
    return (
        <div>
            <Interactive title="What type of Property would you like to visit">
                
                <div>

                <h6 className="flatText">Type of Workspace</h6>
                <div className="selectCard">
                    <h6 className="flatText">Private Office</h6>
                
                    <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'transparent', border:'none'}} id="dropdown-basic">
                        <FaEllipsisH color="black"/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-2">Private Office</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Hot Desk</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Meeting & Venue</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                </div>


<br/>
                <div>

                <h6 className="flatText">Additional Specification</h6>
                <div className="selectCard">
                    <h6 className="flatText">Serviced</h6>
                
                    <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'transparent', border:'none'}} id="dropdown-basic">
                        <FaEllipsisH color="black"/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-2">Serviced</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Finished</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Unfinished</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                </div>





            </Interactive>
        </div>
    )
}

export default Workspace
