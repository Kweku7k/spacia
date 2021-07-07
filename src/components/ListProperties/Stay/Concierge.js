import React, {useState} from 'react'
import Interactive from '../../Interactive'
import {Dropdown} from 'react-bootstrap'

const Concierge = () => {

    const [dropdown1, setdropdown1] = useState('Serviced')

    return (
        <div>
            <Interactive>
                {/* <h4>Yes</h4> */}
                <div>

                <h6 className="flatText">Type of Workspace</h6>
                <div className="selectCard">
                    <h6 className="flatText">{dropdown1}</h6>
                
                    <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'transparent', color:'black', border:'none'}} id="dropdown-basic">
                        {/* <FaEllipsisH color="black"/> */}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>(setdropdown1('Serviced'))} href="#/action-2">Airport Shuttle</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(setdropdown1('Hotel'))} href="#/action-3">Car Rental</Dropdown.Item>
                    <Dropdown.Item onClick={()=>(setdropdown1('Hotel'))} href="#/action-3">Car Hire</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                </div>

                <div>
<br/>
<h6 className="flatText">Type of Workspace</h6>
<div className="selectCard">
    <h6 className="flatText" class="text-muted">None</h6>


</div>
</div>
            </Interactive>
        </div>
    )
}

export default Concierge
