import React from 'react'
import {Row} from 'react-bootstrap'
import { FaCamera } from 'react-icons/fa'
import mask from '../../img/Web/Spacia/navbar/Mask.png'

const Profile = () => {
    return (
        <>
                            <h4>Edit Profile</h4>
                            <div className="ellipse">
                                <img src={mask} className="ellipse" />
                                <FaCamera className="ellipseAttribute" color="blue"/>
                            </div>
                            <form>
                            <Row>


                            <div class="form-group col">
                              <label for="">First Name</label>
                              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder=""/>
                            </div>
                            <br />
                            <div class="form-group col">
                              <label for="">Last Name</label>
                              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder=""/>
                            </div>
                            </Row>
                            <br />

                            <div class="form-group">
                              <label for="">Phone Number</label>
                              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder=""/>
                            </div>
                            <br />
                            <div class="form-group">
                              <label for="">Phone Number</label>
                              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder=""/>
                            </div>
                            <br />

                            <button type="submit" className="button">Save</button>
                            </form>
                        
        </>
    )
}

export default Profile
