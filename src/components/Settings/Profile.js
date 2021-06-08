import React from 'react'
import {Row} from 'react-bootstrap'
import { FaCamera } from 'react-icons/fa'

const Profile = () => {
    return (
        <>
                            <h4>Edit Profile</h4>
                            <div className="ellipse">
                                <FaCamera className="ellipseAttribute" color="blue"/>
                            </div>
                            <form>
                            <Row>


                            <div class="form-group col">
                              <label for="">First Name</label>
                              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder=""/>
                            </div>
                            <div class="form-group col">
                              <label for="">Last Name</label>
                              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder=""/>
                            </div>
                            </Row>
                            <div class="form-group">
                              <label for="">Phone Number</label>
                              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder=""/>
                            </div><div class="form-group">
                              <label for="">Phone Number</label>
                              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder=""/>
                            </div>
                            <button type="submit" className="button">Save</button>
                            </form>
                        
        </>
    )
}

export default Profile
