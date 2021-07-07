import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import { Container, Tabs, Tab, Row, Dropdown } from 'react-bootstrap';
import uploadButton from '../img/Web/Spacia/Group 426.png'
import imgplaceholder from '../img/Web/Spacia/imgplaceholder.png'
import axios from 'axios'

const ListPropertyForm = () => {

  const [image, setImage] = useState(imgplaceholder)

  const [dropdown1, setdropdown1] = useState("initialState")
  const [dropdown2, setdropdown2] = useState("initialState")

  const [form, setform] = useState(0)

  const [additionalSpec, setadditionalSpec] = useState('')
  const [description, setdescription] = useState('')
  // details
  const [capacity, setcapacity] = useState('')
  const [floornumber, setfloornumber] = useState('')
  const [propertySize, setpropertySize] = useState('')
  // location
  const [address, setaddress] = useState('')
  const [city, setcity] = useState('')
  const [country, setcountry] = useState('')
  const [language, setlanguage] = useState('')
  const [longitude, setlongitude] = useState('')
  const [latitude, setlatitude] = useState('')
  const [streetname, setstreetname] = useState('')
  // propertyprice
  const [billingPeriod, setbillingperiod] = useState('')
  const [createOn, setcreateOn] = useState('')
  const [price, setprice] = useState('')
  const [updatedOn, setupdatedOn] = useState('')
  // Prop
  const [propertyStatus, setpropertyStatus] = useState('')
  const [propertyTitle, setpropertyTitle] = useState('')
  const [propertyType, setpropertyType] = useState('')
  const [tags, settags] = useState('')
  const [typeOfWorkspace, settypeOfWorkspace] = useState('')


  const submitForm = (e) => {
    // e.preventDefault()
    setform(1)
  }
// AXIOS POST REQUEST FOR FORM

  const localurl = 'https://spacia.page/booking/api/v1/listings'
  useEffect(() => {
      axios.post(localurl,
  //   {
  //   "additionalSpec": "HOT_HOUR",
  //   "description": description,
  //   "details": {
  //     "capacity": capacity,
  //     "floorNumber": floornumber,
  //     "propertySize": propertySize
  //   },
  //   "location": {
  //     "address": address,
  //     "city":city,
  //     // Fix the drop down
  //     "country": country,
  //     "latitude": latitude,
  //     "longitude": longitude,
  //     "streetName": streetname
  //   },
  //   "propertyPrice": {
  //     "billingPeriod": "HOURLY",
  //     "createdOn": "2021-07-07T13:27:40.853Z",
  //     "price": price,
  //     "updatedOn": "2021-07-07T13:27:40.854Z"
  //   },
  //   "propertyStatus": "FOR_RENT",
  //   "propertyTitle": propertyTitle,
  //   "propertyType": propertyType,
  //   "tags": [
  //     tags
  //   ],
  //   "typeOfWorkspace": "PRIVATE_OFFICE",
  //   "userId": 2
  // }
  {
    "additionalSpec": "HOT_HOUR",
    "description": "string",
    "details": {
      "capacity": 50,
      "floorNumber": "string",
      "propertySize": 2
    },
    "location": {
      "address": "50 3rd Road",
      "city": "Accra",
      "country": "gh",
      "latitude": "12345",
      "longitude": "-12345",
      "streetName": "50 3rd Road"
    },
    "propertyPrice": {
      "billingPeriod": "HOURLY",
      "createdOn": "2021-07-07T13:27:40.853Z",
      "price": 3000,
      "updatedOn": "2021-07-07T13:27:40.854Z"
    },
    "propertyStatus": "FOR_RENT",
    "propertyTitle": "Nice House In the Hamptoms",
    "propertyType": "OFFICE_SPACE",
    "tags": [
      "string"
    ],
    "typeOfWorkspace": "PRIVATE_OFFICE",
    "userId": 2
  }


      )
      .then(res=>(

          console.log(res),
          // submitSignup(res)
          // Tenary
          (res.status = 200 ? (
              // history.push("/startbooking"),
              console.log("Add Booking dey work")
          ):
          (
              console.log("Didnt Work")
          ))
          
      
          ))
      .catch(err=>(console.log(err))
      )
      console.log(localurl)
      
  }, [form])



  // {
  //   "additionalSpec": "HOT_HOUR",
  //   "description": "string",
  //   "details": {
  //     "capacity": 50,
  //     "floorNumber": "string",
  //     "propertySize": 2
  //   },
  //   "location": {
  //     "address": "50 3rd Road",
  //     "city": "Accra",
  //     "country": "gh",
  //     "latitude": "12345",
  //     "longitude": "-12345",
  //     "streetName": "50 3rd Road"
  //   },
  //   "propertyPrice": {
  //     "billingPeriod": "HOURLY",
  //     "createdOn": "2021-07-07T13:27:40.853Z",
  //     "price": 3000,
  //     "updatedOn": "2021-07-07T13:27:40.854Z"
  //   },
  //   "propertyStatus": "FOR_RENT",
  //   "propertyTitle": "Nice House In the Hamptoms",
  //   "propertyType": "OFFICE_SPACE",
  //   "tags": [
  //     "string"
  //   ],
  //   "typeOfWorkspace": "PRIVATE_OFFICE",
  //   "userId": 2
  // }

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
              <label for="">Property Tile</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" value={propertyTitle} onChange={(e) => setpropertyTitle(e.target.value)} placeholder=""/>
                
            </div>
            <div class="form-group">
              <label for="">Property Descriptions</label>
             <textarea style={{height:'180px'}} class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={description} onChange={(e) => setdescription(e.target.value)} />
                
            </div>
            <div class="form-group">
              <label for="">Add Tags</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" value={tags} onChange={(e) => settags(e.target.value)} placeholder=""/>
                
            </div>
            </Container>
            <Container>
            <h5><b>Property Price</b></h5>

            <div class="form-group">
              <div style={{display:'flex', alignItems:'center'}}>
                <div style={{width:'50%'}}>
              <label for="">Price in GHS(only numbers)</label>
              <input type="text" style={{width:'80%'}}
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={price} onChange={(e) => setprice(e.target.value)}/>
                </div>
                <div style={{width:'50%'}}>
                  <label for="">Billing Period</label>
                <div className="selectCard" style={{width:'100%', padding:'5px'}}>
                  {/* billingperiod = {this dropdown} */}
                    <h6 className="flatText">{dropdown2}</h6>
                    <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'transparent', color:'black', border:'none'}} id="dropdown-basic">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>setdropdown2("Hourly")} href="#/action-2">Hourly</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setdropdown2("Daily")} href="#/action-3">Daily</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setdropdown2("Weekly")} href="#/action-3">Weekly</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setdropdown2("Monthly")} href="#/action-3">Monthly</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>
            </div> 
            </div>
           
            </Container>
            <Container>
            <h5><b>Details</b></h5>
            <div style={{display:'flex', alignItems:'center'}}>
                <div style={{width:'50%'}}>
              <label for="">Size in ft2(only numbers)</label>
              <input type="text" style={{width:'80%'}}
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={propertySize} onChange={(e) => setpropertySize(e.target.value)}/>
                </div>
                <div style={{width:'50%'}}>
                  <label for="">Floor Number</label>
                  <input type="text" style={{width:'80%'}}
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={floornumber} onChange={(e) => setfloornumber(e.target.value)}/>
            </div> 
            </div>
            <div style={{width:'50%'}}>
              <label for="">Capacity(number of people)</label>
              <input type="text" style={{width:'80%'}}
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={capacity} onChange={(e) => setcapacity(e.target.value)}/>
                </div>
            </Container>
            <Container>
            <h5><b>Select Property Status</b></h5>
            <div style={{width:'50%'}}>
                  <label for="">Property status</label>
                <div className="selectCard" style={{width:'100%',padding:'5px'}}>
                  {/* Property Status picks from this dropdown */}
                    <h6 className="flatText">{dropdown1}</h6>
                    <Dropdown>
                <Dropdown.Toggle style={{backgroundColor:'transparent', color:'black', border:'none'}} id="dropdown-basic">
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>setdropdown1("Published")} href="#/action-2">Published</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setdropdown1("Not Published")} href="#/action-3">Not Published</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </div>
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
              <button style={{marginLeft:20}} onClick={() => submitForm()} className="button">Next Step</button>
            </div>
            </Container>
          </Tab>
          
          
          <Tab eventKey="3.Location" title="3.Location">

            <h6><b>Property Listing</b></h6>

            <div class="form-group">
              <label style={label} for="">Address</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={address} onChange={(e) => setaddress(e.target.value)} />
            </div>

            <Row>

            <div class="col-md-6">
              <div class="form-group">
                <label style={label} for="">City</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={city} onChange={(e) => setcity(e.target.value)} />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label style={label} for="">Region Of Province</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
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
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={country} onChange={(e) => setcountry(e.target.value)}/>
              </div>
            </div>
            </Row>

            <Row>

            <div class="col-md-6">
              <div class="form-group">
                <label style={label} for="">Latitude</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={latitude} onChange={(e) => setlatitude(e.target.value)} />
              </div>
            </div>

            <div class="col-md-6">
              <div class="form-group">
                <label style={label} for="">Longitude</label>
                <input type="text"
                  class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={longitude} onChange={(e) => setlongitude(e.target.value)} />
              </div>
            </div>
            </Row>

            

<div class="mapouter">
  <div class="gmap_canvas">
    <iframe width="100%" height="300" title="Maps" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
    </iframe>
    <br/>
    <a href="https://www.embedgooglemap.net">embed responsive google map</a>
  </div>
</div>
<br/>
            <div style={{display:'flex'}}>
              <button className="button-calm">Back</button>
              <button onClick = {()=>{
                setKey("4.Amenities")
              }} style={{margin:'auto 20'}} className="button">Next Step</button>
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
