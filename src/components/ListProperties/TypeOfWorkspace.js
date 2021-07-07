import React, {useState} from 'react'
import Interactive from '../Interactive'
import InteractiveOption from './InteractiveOption'
import { Dropdown } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FaEllipsisH} from 'react-icons/fa'
const Workspace = () => {
    const [dropdown1, setdropdown1] = useState("Private Office")
    const [dropdown2, setdropdown2] = useState("Serviced")
    const [hotdesk, sethotdesk] = useState("Hot Hour")
    const [meeting, setmeeting] = useState("Board Room")
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
                
                {dropdown1 === "Private Office" && 

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
                }

            {dropdown1 === "HotDesk" && 
                            
            <div>
            <h6 className="flatText">Additional Specification</h6>
            <div className="selectCard">
                <h6 className="flatText">{hotdesk}</h6>

            <Dropdown>
            <Dropdown.Toggle style={{backgroundColor:'transparent', border:'none', color:'black'}} id="dropdown-basic">
                    {/* <FaEllipsisH color="black"/> */}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={()=>sethotdesk("Hot Hour")} href="#/action-2">Hot Hour</Dropdown.Item>
                <Dropdown.Item onClick={()=>sethotdesk("Hot Day")} href="#/action-3">Hot Day</Dropdown.Item>
                <Dropdown.Item onClick={()=>sethotdesk("Week")} href="#/action-3">Week</Dropdown.Item>
                <Dropdown.Item onClick={()=>sethotdesk("Month")} href="#/action-3">Month</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            </div>
            </div>

            }


            {dropdown1 === "Meeting & Venue" && 
                            
                <div>
                <h6 className="flatText">Additional Specification</h6>
                <div className="selectCard">
                    <h6 className="flatText">{meeting}</h6>
    
                <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'transparent', border:'none', color:'black'}} id="dropdown-basic">
                        {/* <FaEllipsisH color="black"/> */}
                </Dropdown.Toggle>
    
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>setmeeting("Board Room")} href="#/action-2">Board Room</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setmeeting("Meeting")} href="#/action-3">Meeting</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setmeeting("Lounge")} href="#/action-3">Lounge</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
                </div>
    
                }

{/* Dropdown 2 */}


                <Link to="/listpropertyform">

                    <button className="ListPropBtn">Continue</button>
                </Link>

            </Interactive>
        </div>
    )
}

export default Workspace
