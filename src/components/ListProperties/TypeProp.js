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

                <h6 className="flatText">What type of Property would you like to list</h6>
                <div className="selectCard">
                    <h6 className="flatText">Work</h6>
    
                </div>
                <div className="selectCard">
                    <h6 className="flatText">Stay</h6>
    
                </div>
                <div className="selectCard">
                    <h6 className="flatText">Concierge</h6>
                </div>
                </div>


            </Interactive>
        </div>
    )
}

export default Workspace
