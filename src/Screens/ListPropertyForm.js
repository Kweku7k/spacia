import React, {useState} from 'react'
import Header from '../components/Header'
import { Container, Tabs, Tab, Row } from 'react-bootstrap';
import uploadButton from '../img/Web/Spacia/Group 426.png'
import imgplaceholder from '../img/Web/Spacia/imgplaceholder.png'

const ListPropertyForm = () => {

  const [image, setImage] = useState(imgplaceholder)


  const changeImage = (e) => {
    // const temp = e.target.value
    console.log(e.target.src)
    setImage(e.target.src)
}
  const fit = {
    display:'flex',
    // justifyContent: 'space-evenly',
    padding:20
}

const label = {
  fontWeight:'300'
}

const imgholder = {
  width:'90%'
}

const imgholderActive = {
    border: '1px solid red'
}

    const [key, setKey] = useState('3.Location');
    return (
        <div>
            <Header title="List a Property"/>

            <Container>
            <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
   
          <Tab eventKey="1.Description" title="1.Description">
              <br/>
            <Container>
            <h5><b>Property Description</b></h5>

            <div class="form-group">
              <label style={label} for="">Property Tile</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
              <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
            </Container>
          </Tab>
          <Tab eventKey="2.Media" title="2.Media">
            

          {/* Upload Box */}

            <Container>
              <br/>
            <h6>Upload Pictures of your property</h6>
            <div className="uploadBox">
              <div>
              <img src={uploadButton} alt="upload" />
              </div>
            <button className="uploadButton">Select Media</button>
            </div>

            {/* placeholders */}

<div style={fit}>
                <div>
                    <img onClick={changeImage} src={imgplaceholder} style={imgholderActive} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={imgplaceholder} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={imgplaceholder} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={imgplaceholder} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={imgplaceholder} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={imgplaceholder} style={imgholder} alt="placeholder" />
                </div>
            </div>


            <h6>Upload Pictures of your property</h6>
            <div className="uploadBox">
              <div>
              <img src={uploadButton} alt="upload" />
              </div>
            <button className="uploadButton">Select Media</button>
            </div>

            {/* placeholders */}

<div style={fit}>
                <div>
                    <img onClick={changeImage} src={imgplaceholder} style={imgholderActive} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={imgplaceholder} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={imgplaceholder} style={imgholder} alt="placeholder" />
                </div>
            </div>

            <div class="row">

            <div class="col-md-6">

            <div class="form-group">
              <label style={label} for="">Image Title</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
            </div>

            <div class="form-group">
              <label style={label} for="">Image Description</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
            </div>

            <br/>

            <h5><b>Video Option (Optional)</b></h5>
            <div class="form-group">
              <label style={label} for="">Upload From</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
            </div>

            <div class="form-group">
              <label style={label} for="">Embeded Video ID</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
            </div>
            </div>
            </div>
<br/>
            <div style={{display:'flex'}}>
              <button className="button-calm">Back</button>
              <button style={{marginLeft:20}} className="button">Next Step</button>
            </div>
            </Container>
          </Tab>
          
          
          <Tab eventKey="3.Location" title="3.Location">

            <h6><b>Property Listing</b></h6>

            <div class="form-group">
              <label style={label} for="">Address</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
            </div>

            <Row>

            <div class="col-md-6">
              <div class="form-group">
                <label style={label} for="">City</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label style={label} for="">Region Of Province</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
              </div>
            </div>
            </Row>

            <Row>

            <div class="col-md-6">
              <div class="form-group">
                <label style={label} for="">Digital Address</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label style={label} for="">Select Country</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
              </div>
            </div>
            </Row>

            <Row>

            <div class="col-md-6">
              <div class="form-group">
                <label style={label} for="">Latitude</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label style={label} for="">Longitude</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="" />
              </div>
            </div>
            </Row>

            <div style={{width:'100%', height:'30vh', backgroundColor:'red'}}>

            </div>
<br/>
            <div style={{display:'flex'}}>
              <button className="button-calm">Back</button>
              <button style={{margin:'auto 20'}} className="button">Next Step</button>
            </div>

          </Tab>
          <Tab eventKey="4.Amenities" title="4.Amenities">
            <h6>Amenities</h6>

            <h6><b>Interior Details</b></h6>
            
            <Row>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Equiped Kitchen
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Gym
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Laundry
                </label>
              </div>
            </div>
            <br/>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Media Room
                </label>
              </div>
            </div>
            </Row>

            <br/>
            <br/>

            <h6><b>Outdoor Details</b></h6>

            <Row>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Back yard
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Basketball Court
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Front yard
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Garage Attatched
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Hot Bath
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Pool
                </label>
              </div>
            </div>
            </Row>

            

            <br/>
            <br/>

            <h6><b>Utilities</b></h6>

            <Row>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" />Central Air
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Electricity
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Heating
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Natural Gas
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Ventilation
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Water
                </label>
              </div>
            </div>
            </Row>

            <br/>
            <br/>

            <h6><b>Other Features</b></h6>

            <Row>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" />Water Sprinklers
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Elevator
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Wifi
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Smoke Detectors
                </label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-check">
                <label style={label} class="form-check-label">
                  <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader" /> Washer and Dryer
                </label>
              </div>
            </div>
            </Row>
          </Tab>
       
        </Tabs>
            </Container>
        </div>
    )
}

export default ListPropertyForm
