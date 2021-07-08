import React, { useState, useEffect } from 'react'
import { Container, Table, Dropdown, Toast, Modal, Row } from 'react-bootstrap'
import demo from '../img/Web/Spacia/Demo.png'
import demo2 from '../img/Web/Spacia/Demo.png'
import {Link, useHistory} from 'react-router-dom'
import TableRow from '../components/TableRow'
import prop2 from '../img/Web/Spacia/prop2.png'
import prop3 from '../img/Web/Spacia/prop3.png'
import {FaCaretDown, FaLandmark, FaTimes} from 'react-icons/fa'
import bed from '../img/Web/Spacia/bed.png'
import bath from '../img/Web/Spacia/bathtub.png'
import imgplaceholder from '../img/Web/Spacia/imgplaceholder.png'
import holder from '../img/Web/Spacia/thumb.png'
import FormModal from '../components/NewPropertyModal'
import FeedbackModal from '../components/FeedbackModall'
import Filter from '../components/Filter'
import home1 from '../img/homes/home1.jpeg'
import home2 from '../img/homes/home2.jpeg'
import home3 from '../img/homes/home3.jpeg'
import home4 from '../img/homes/home4.jpeg'
import home5 from '../img/homes/home5.jpeg'
import home6 from '../img/homes/home6.jpeg' 
import home7 from '../img/homes/home6.jpeg'
import axios from 'axios'



<tr>
<td>Photo</td> 
<td>Property Info</td> 
<td>Added on</td> 
<td>Property Status</td> 
<td>Status</td> 
<td>Price</td> 
</tr>

const Properties = () => {

    const [allproperties, setallproperties]=useState([])

    const localurl = 'https://spacia.page/booking/api/v1/listings'
    useEffect(() => {
        axios.get(localurl)
        .then(res=>(
            console.log(res.data.data),
            setallproperties(res.data.data)))
        .catch(err=>(console.log(err))
        )
        console.log(localurl)
        
    }, [localurl])



    const [formModal, setformModal] = useState(false)

    let history = useHistory();

    // Form Values
    const [beds, setBeds] = useState("")
    const [baths, setBaths] = useState("")

    const [info, setInfo] = useState("")
    const [status, setStatus] = useState("Pending")
    const [price, setPrice] = useState('')

    const [viewModal, setViewModal] = useState(false)
    // Prefill selected modal
    const [ModalProp, setModalProp] = useState(
        {
            "id": 93,
            "name": "Just added",
            "description": "string",
            "propertyPrice": {
                "id": 96,
                "price": 3000.0,
                "billingPeriod": "HOURLY",
                "createdOn": "2021-07-08T00:29:24.044Z",
                "updatedOn": "2021-07-08T00:29:24.090Z"
            },
            "location": {
                "id": 95,
                "latitude": "12345",
                "longitude": "-12345",
                "street": "50 3rd Road",
                "address": "50 3rd Road",
                "city": "Accra",
                "country": "gh"
            },
            "tags": [
                "string"
            ],
            "listingDetails": {
                "id": 94,
                "propertySize": 2,
                "floorNumber": "string",
                "capacity": 50,
                "listingId": 93
            },
            "status": {
                "ordinal": 1,
                "value": "unpublished"
            },
            "propertyStatus": {
                "ordinal": 0,
                "value": "FOR_RENT",
                "label": "FOR RENT"
            },
            "createdBy": {
                "id": 2,
                "username": "nicholas.akorful470@gmail.com",
                "firstName": "Nick",
                "lastName": "Lynx",
                "name": null,
                "userRole": "ROLE_CONTENT_PUBLISHER",
                "isEnabled": false,
                "createdOn": "2021-07-05T10:41:30.509Z",
                "updatedOn": "2021-07-08T00:29:24.232Z"
            },
            "createdOn": "2021-07-08T00:29:24.014Z",
            "updatedOn": "2021-07-08T00:29:24.014Z"
        }
    )

    const showViewModal = (currentProperty) =>{
        setViewModal(true)
        setModalProp(currentProperty)
        console.log(currentProperty)
        console.log("text")
    }

    const closeViewModal = () =>{
        setViewModal(false)
    }

    const openFormModal = ()  => {
        // setformModal(true)  
        history.push("/listproperty");

    }



    const deleteModal = (id) => {
        console.log(id)
        setshowDeleteModal(true)
        deleteProperty(id)
    }

    const closeDeleteModal =() =>{
        setshowDeleteModal(false)
    }

    const onAdd = (property) => {
        console.log(property)
        setproperties([...properties, property])
    }

    const closeFormModal = ()  => {
        setformModal(false)
    }

    const onSubmit = (e)=> {
        e.preventDefault()

        if(!info){
            alert('Please add a task')
            return
        }

        setformModal(false)
        const today = new Date()
        const added = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        onAdd({ info, price, status, added, beds, baths })
        setInfo('')


        
    }
    const imgholder = {
        width:'90%'
    }
    const [image, setImage] = useState(home1)


    const changeImage = (e) => {
        // const temp = e.target.value
        console.log(e.target.src)
        setImage(e.target.src)
    }

    const [properties, setproperties] = useState([
        {
            id:1,
            photo: {demo},
            info: "COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION",
            added: "1st June 2021",
            status: "active",
            price: '30',
            beds: '2',
            baths: '3'
        },
        {
            id:2,
            photo: "{demo}",
            info: "COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION",
            added: "1st June 2021",
            status: "active",
            price: '30',
            beds: '3',
            baths: '3'
        }
    ])

    const fit = {
        display:'flex',
        justifyContent: 'space-evenly',
        padding:20
    }

    const [showDeleteModal, setshowDeleteModal] = useState(false)
    const deleteProperty = (id) =>{
        setproperties(properties.filter((property) => property.id !== id))
    }

    return (
        <div>
           <div className="header" style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h4><b>Properties</b></h4>
                </div>
                <div style={{display:'flex'}}>
                <form class="form-inline my-2 my-xl-0" style={{width:"30vw"}}>
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                {/* <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>
                    <div class="dropdown" style={{margin:'auto 30px'}}>
                            <Dropdown >
                            <Dropdown.Toggle style={{backgroundColor:'#ECECEC', border:'none', color:'#848484'}} >
                                All Properties 
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                    </div>

                    {/* <Link to="/listproperty"> */}
                    <button class="button" style={{width:'30%'}} onClick={openFormModal}>Add New Property </button>
                    {/* </Link> */}

                </div>
            </div>

<Container>
            <Table>
                <tr>
                   <td>Photo</td> 
                   <td>Property Info</td> 
                   <td>Added on</td> 
                   <td>Property Status</td> 
                   <td>Status</td> 
                   <td style={{textAlign:'right', paddingRight:20}}>Price</td> 
                </tr>

                {/* {tasks.map((task)=>(
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
            ))} */}

                {/* From Source */}
                {allproperties.map((property) => (
                    <TableRow key={property.id} onDelete={() => deleteModal(property.id)} image={demo} info={property.name} added={property.propertyPrice.createdOn} beds={property.listingDetails.capacity} showers={property.listingDetails.propertySize} status='FOR RENT' price={property.propertyPrice.price} onView={() => {showViewModal(property)}} ></TableRow>
                    ))}

                    <TableRow image={demo} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added="13-Feb-2021" beds="2" showers='25 sq ft' status='FOR RENT' price="600" onView={showViewModal}></TableRow>
                    <TableRow image={prop2} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added="13-Feb-2021" beds="3" showers='25 sq ft' status='FOR RENT' price="600"></TableRow>
                    <TableRow image={prop3} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added="13-Feb-2021" beds="3" showers='25 sq ft' status='FOR RENT' price="600"></TableRow>
            </Table>
</Container>

<Modal show={viewModal} onHide={closeViewModal} size="lg" >
       <div style={{display:'flex', flexDirection:'row-reverse', padding:10}}>
        <FaTimes onClick={closeViewModal} />
       </div>
        <div style={{textAlign:'center', padding:30}}>
            <h6><b>{ModalProp.name}</b></h6>
            <br/>
            <img src={image} alt="img" style={{width:'40%'}}/>
            <div style={fit}>
                <div>
                    <img onClick={changeImage} src={home1} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={home2} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={home3} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={home4} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={home5} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={home6} style={imgholder} alt="placeholder" />
                </div>
            </div>
            <div>
            <br/>
                <Row style={{paddingLeft:40,paddingRight:40}}>
                    <div className="col" style={{textAlign:'left'}}>
                        <h5 style={{color:'#066875', fontWeight:'bold'}}>FOR SALE <span style={{color:'#393939', fontWeight:'normal'}}>GHC 560,000</span></h5>
                        <br/>
                        <h6 ><b>Description</b>
                            <span style={{display:'flex'}}>
                                <img src={bed} style={{ width:20, height:20, marginRight:10}} alt="bed"/>
                                <h6>{ModalProp.listingDetails.propertySize}</h6>
                                <img src={bath} style={{ width:20, height:20, marginLeft:10, marginRight:10}} alt="bed"/>
                                <h6>{ModalProp.listingDetails.capacity}</h6>
                            </span>
                        </h6>
                    </div>
                    <div className="col" style={{textAlign:'right'}}>
                        <button className="button" style={{width:200}} onClick={closeViewModal} >Add To Cart</button>
                        <br/>
                        <h6 style={{fontSize:'small', color:'#2B86FF', marginTop:10}}><FaLandmark /> Ashaley Botwe school junction</h6>
                    </div>
                    <br/>
                </Row>
            </div>
            <div className="description" style={{padding:10}}>

                <h6 style={{fontSize:'small', textAlign:'left', lineHeight:2 }} className="text-muted">

            {ModalProp.description}
                </h6>

            </div>
        </div>
       
        </Modal>


{/* doneButton={() => deleteProperty()} */}
<FormModal onSubmit={onSubmit} title="Add a new property" isOpen={formModal} isClose={closeFormModal} declineButton="Cancel" acceptButton="Change" info={info} setInfo={setInfo} status={status} setStatus={setStatus} beds={beds} setBeds={setBeds} price={price} setPrice={setPrice} baths={baths} setBaths={setBaths}/>
<FeedbackModal isClose={closeDeleteModal} doneButton="Okay" isOpen={showDeleteModal} declineButton={closeDeleteModal}  >
<h6>This property has been deleted</h6>
</FeedbackModal>
        </div>

    )
}

export default Properties