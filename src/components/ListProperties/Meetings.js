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
                    <h6 className="flatText">Meeting and Venue</h6>
                
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
                    <h6 className="flatText">Board Room</h6>
                
                    <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'transparent', border:'none'}} id="dropdown-basic">
                        <FaEllipsisH color="black"/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-2">Board Meeting</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Meeting Room</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Lounge</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                </div>


            <button className="ListPropBtn">
                Continue
            </button>


            </Interactive>
        </div>
    )
}

export default Workspace
