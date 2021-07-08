import React, {useState, useEffect} from 'react'
import Header from '../components/Header'
import { Container, Tabs, Tab, Row, Dropdown } from 'react-bootstrap';
import uploadButton from '../img/Web/Spacia/Group 426.png'
import imgplaceholder from '../img/Web/Spacia/imgplaceholder.png'
import axios from 'axios'

const ListPropertyForm = () => {
  const [dropdown1, setdropdown1] = useState("Published")
  const [dropdown2, setdropdown2] = useState("Hourly")


  // For Blob
  const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      resolve(event.target.result)
      console.log(event.target.result)
    };
    reader.readAsDataURL(file);
    })

  const [dataUri, setDataUri] = useState(imgplaceholder)

  const onChangePlace = (file) => {
    
    if(!file) {
      setDataUri('');
      return;
    }

    // for (var i = 0; i < filesLength; i++) {
    //   rows.push( e.target.files[i])
    //   var binaryData = [];
    //   const blahsrc = window.URL.createObjectURL(new Blob(binaryData,{type: "application/zip"}))
      
    //   if (i = 1) {
    //     console.log(e.target.files[0].src)
    //     binaryData.push(e.target.files[0].src);
    //     setimg1(blahsrc)
    //   }
    //   else if (i = 2)(
    //     setimg2(e.target.src)
    //   )
    //   else if (i = 3)(
    //     setimg2(e.target.src)
    //   )
    // }

    
    fileToDataUri(file)
      .then(dataUri => {
        setDataUri(dataUri)
      })
    
  }

  const [image, setImage] = useState(imgplaceholder)

  const button = () =>{
    const thebutton = document.getElementById('filepicker')
    console.log(thebutton)
  }


  // const [dropdown1, setdropdown1] = useState("initialState")
  // const [dropdown2, setdropdown2] = useState("initialState")

  const [form, setform] = useState(0)


  const [img1, setimg1] = useState(imgplaceholder)
  const [img2, setimg2] = useState(imgplaceholder)
  const [img3, setimg3] = useState(imgplaceholder)
  const [img4, setimg4] = useState(imgplaceholder)
  const [img5, setimg5] = useState(imgplaceholder)

  const addFileHandler = (e) =>{
    var rows = [];
    console.log(e.target.files.length)
    const filesLength = e.target.files.length
    for (var i = 0; i < filesLength; i++) {
      rows.push( e.target.files[i])
      // const blahsrc = URL.createObjectURL(e.target.files)
      var binaryData = [];
      // const blahsrc = window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}))
      const blahsrc = window.URL.createObjectURL(new Blob(binaryData,{type: "application/zip"}))
      
      if (i = 1) {
        console.log(e.target.files[0].src)
        binaryData.push(e.target.files[0].src);
        setimg1(blahsrc)
      }
      else if (i = 2)(
        setimg2(e.target.src)
      )
      else if (i = 3)(
        setimg2(e.target.src)
      )
    }
    console.log(rows)
    // setfileimage(rows)
  }


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

  // const clickkk = {
  //   docume
  // }

  const submitForm = (e) => {
    // e.preventDefault()
    setform(1)
    console.log(description)
    submit()
  }
// AXIOS POST REQUEST FOR FORM

  const [fileimage, setfileimage] = useState(null)

  // /api/v1/listings/media

  const localurl = 'https://spacia.page/booking/api/v1/listings'
  const submit =() => {
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
  //   "propertyType": "propertyType",
  //   "tags": [
  //     tags
  //   ],
  //   "typeOfWorkspace": "PRIVATE_OFFICE",
  //   "userId": 2
  // }
  {
    "additionalSpec": "HOT_HOUR",
    "description": description,
    "details": {
      "capacity": capacity,
      "floorNumber": floornumber,
      "propertySize": propertySize
    },
    "location": {
      "address": address,
      "city": city,
      "country": country,
      "latitude": latitude,
      "longitude": longitude,
      "streetName": streetname
    },
    "propertyPrice": {
      "billingPeriod": "HOURLY",
      "createdOn": "2021-07-07T13:27:40.853Z",
      "price": price,
      "updatedOn": "2021-07-07T13:27:40.854Z"
    },
    "propertyStatus": "FOR_RENT",
    "propertyTitle": propertyTitle,
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
              // history.push("/properties"),
              console.log("Add Booking dey work")

          ):
          (
              console.log("Didnt Work")
          ))
          
      
          ))
      .catch(err=>(console.log("Error: " + err))
      )
      console.log(localurl)
      
  }



const uploadimage=(fileimage)=>{
  console.log(fileimage)
  axios.post('https://spacia.page/api/v1/listings/media', {
    "description":'First Test Item',
    'files': fileimage,
    'title':fileimage.name,
    'userId':2
  })
}


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
    padding:'20px 0',
}

const label = {
  fontWeight:'300'
}

const imgholder = {
  width:100,
  height:100,
  objectFit:'cover'
}

const imgholderActive = {
    border: '2px solid red'
}

    const [key, setKey] = useState('1.Description');

    const submitMedia = () => {
      setKey('3.Location')

      // axios.post() media
    }
    return (
        <div>
          <div style={{display:'flex'}}>
            <div className='headerListPropBtn'>
          <Header title="List a Property"/>
          </div>
            <div className='headerListPropBtn'>
              <button>List a Properties</button>
            </div>
          </div>
            
            <Container>
            <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="1.Description" title="1.Description" className='tagMargin'>
              <br/>
              <Container>
            <h5><b>Property Description</b></h5>

            <div class="form-group">
              <label for="">Property Tile</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" value={propertyTitle} onChange={(e) => setpropertyTitle(e.target.value)} placeholder=""/>
                
            </div>
            <div class="form-group">
              <label style={label} for="">Property Descriptions</label>
             <textarea style={{height:'180px'}} class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={description} onChange={(e) => setdescription(e.target.value)} />
                
            </div>
            <div class="form-group">
              <label style={label} for="">Add Tags</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" value={tags} onChange={(e) => settags(e.target.value)} placeholder=""/>
                
            </div>

            
            </Container>
            <Container>
            <br/>

            <h5><b>Property Price</b></h5>

            <div class="form-group">
              <div style={{display:'flex', alignItems:'center'}}>
                <div style={{width:'50%'}}>
              <label style={label} for="">Price in GHS(only numbers)</label>
              <input type="text" style={{width:'80%'}}
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={price} onChange={(e) => setprice(e.target.value)}/>
                </div>
                <div style={{width:'50%'}}>
                  <label style={label} for="">Billing Period</label>
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
              <br/>
            <h5><b>Details</b></h5>
            <div style={{display:'flex', alignItems:'center'}}>
                <div style={{width:'50%'}}>
              <label style={label} for="">Size in ft2(only numbers)</label>
              <input type="text" style={{width:'80%'}}
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={propertySize} onChange={(e) => setpropertySize(e.target.value)}/>
                </div>
                <div style={{width:'50%'}}>
                  <label style={label} for="">Floor Number</label>
                  <input type="text" style={{width:'80%'}}
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={floornumber} onChange={(e) => setfloornumber(e.target.value)}/>
            </div> 
            </div>
            <div style={{width:'50%'}}>
              <label style={label} for="">Capacity(number of people)</label>
              <input type="text" style={{width:'80%'}}
                class="form-control" name="" id="" aria-describedby="helpId" placeholder="" value={capacity} onChange={(e) => setcapacity(e.target.value)}/>
                </div>
            </Container>
            <Container>
              <br/>
            <h5><b>Select Property Status</b></h5>
            <div style={{width:'50%'}}>
                  <label style={label} for="">Property status</label>
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

<br/>
            <div style={{display:'flex'}}>
              {/* <button className="button-calm">Back</button> */}
              <button style={{marginLeft:20}} onClick={() => setKey('2.Media')} className="button">Next Step</button>
            </div>
            </Container>
            {/* <button className="ListPropBtn">Next Step</button> */}
          </Tab>
          <Tab eventKey="2.Media" title="2.Media" marginLeft='20px'> 
            

          {/* Upload Box */}

            <Container>
              <br/>
            <h6>Upload Pictures of your property 1</h6>
            <div className="uploadBox">
              <div>
              <img src={uploadButton} alt="upload" />
              </div>
              {/* Sends file to the back */}
            {/* <button id="filepicker" onClick={()=> 
              uploadimage(fileimage)
            } className="uploadButton" style={{color:'#FFA197'}}>Select Media</button> */}

            {/* Input field */}
            <input type="file"  multiple="multiple" style={{color:'#FFCBC6'}} onChange={(event) => onChangePlace(event.target.files[0] || null)}  className="uploadButton"/>

{/* <input type="file" id="selectedFile"/>
<input type="button" value="Browse..." onClick="document.getElementById('selectedFile').click();" /> */}

{/* <div class="inputWrapper">
    <input class="fileInput" type="file" name="file1"/>
</div> */}
            </div>

            {/* placeholders */}

<div style={fit} className='fitImage'>
                <div>
                    <img onClick={changeImage} src={dataUri} style={imgholder} alt="placeholder" />
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


            {/* <h6>Upload Pictures of your property</h6>
            <div className="uploadBox">
              <div>
              <img src={uploadButton} alt="upload" />
              </div>
            <button className="uploadButton">Select Media</button>

            <input type="file" accept="image/*" id="primaryButton" onclick="ExistingLogic()" />
      <input type="button" 
       id="secondaryButton" 
       value="Esss"
       onClick="document.getElementById('primaryButton').click()" />
            </div> */}

            {/* placeholders */}

{/* <div style={fit} className='fitImage'>
                <div>
                    <img onClick={changeImage} src={imgplaceholder} style={imgholderActive} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={imgplaceholder} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={imgplaceholder} style={imgholder} alt="placeholder" />
                </div>
            </div> */}

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
              <button style={{marginLeft:20}} onClick={submitMedia} className="button">Next Step</button>
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
          <div class="form-group">
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

            <div style={{display:'flex'}}>
              <button className="button-calm">Back</button>
              <button style={{marginLeft:20}} onClick={submitForm} className="button">Next Step</button>
            </div>
            </div>
          </Tab>
       
        </Tabs>
            </Container>
        </div>
    )
}

export default ListPropertyForm
