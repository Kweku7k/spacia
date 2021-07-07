import React from 'react'
import Interactive from '../Interactive'
import {Link} from 'react-router-dom'
import InteractiveOption from './InteractiveOption'
import { Dropdown } from 'react-bootstrap'
import {FaEllipsisH} from 'react-icons/fa'
const Workspace = () => {
    const link = {
        color:'black',
        textDecoration:'none'
    }
    return (
        <div>
            <Interactive title="What type of Property would you like to visit">
                
                <div>

                <h6 className="flatText">What type of Property would you like to list</h6>
                
                <Link style={link} to="/listproperty/typeofworkspace">
                <div className="selectCard">
                    <h6 className="flatText">Work</h6>
                </div>
                </Link>

                <Link style={link} to="listproperty/stayproperty">

                <div className="selectCard">
                    <h6 className="flatText">Stay</h6>
    
                </div>
                </Link>

                <Link to="/listproperty/concierge" style={link}>

                <div className="selectCard">
                    <h6 className="flatText">Concierge</h6>
                </div>
                </Link>
                </div>


            </Interactive>
        </div>
    )
}

export default Workspace
