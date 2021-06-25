import React, { useState } from 'react'
import { Container, Table, Dropdown, Toast, Modal, Row } from 'react-bootstrap'
import demo from '../img/Web/Spacia/Rectangle 66.png'
import demo2 from '../img/Web/Spacia/Demo.png'
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
import DatePicker from "react-datepicker";
import Slider, { Range } from 'rc-slider';
import {Link} from 'react-router-dom'
import QuantityCounter from '../components/QuantityCounter'
<tr>
<td>Photo</td> 
<td>Property Info</td> 
<td>Added on</td> 
<td>Property Status</td> 
<td>Status</td> 
<td>Price</td> 
</tr>

const FilterProperties = () => {
    const [formModal, setformModal] = useState(false)
    // Form Values
    const [beds, setBeds] = useState("")
    const [baths, setBaths] = useState("")

    const [info, setInfo] = useState("")
    const [status, setStatus] = useState("Pending")
    const [price, setPrice] = useState('')


    const edit ={
        backgroundColor:"transparent"
    }

    // const price = {
    //     color:'grey',
    //     fontWeight:'bold'
    // }

    const inline ={
        display:'flex',
        justifyContent:'space-evenly',
        borderRadius: 5,
        border: '1px solid #ECECEC',
        // padding:5, 
        verticalAlign:'middle'
    }

    const iconLeft ={
        // padding:3
        borderRight: '1px solid #ECECEC',
        paddingRight: 10,
        paddingTop: 4
    }
    const iconRight = {
        // padding:3
        borderLeft: '1px solid #ECECEC',
        paddingLeft: 10,
        paddingTop: 4
    }

    const bar ={
        backgroundColor:'white',
        padding: '1em',
        borderRadius:10
    }

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const [count, setCount] = useState(1);

    const add = () => {
        setCount(count + 1);
    }
    const subtract = () => {
        setCount(count - 1);
    }

    const [viewModal, setViewModal] = useState(false)

    const showViewModal = () =>{
        setViewModal(true)
    }

    const closeViewModal = () =>{
        setViewModal(false)
    }

    const openFormModal = ()  => {
        setformModal(true)  
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

    // jhdjhdkjsfkjnfkjnfsd



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


    const [sliderValue, setSliderValue] = useState(0)


    const handleChange = (e) => {
        setSliderValue(e.target.value);
        console.log(e.target.value)
        // this.setState(obj);
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
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <form class="form-inline my-2 my-xl-0" style={{width:"30vw"}}>
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div class="dropdown" style={{margin:'auto 30px'}}>
                            <Dropdown>
                            <Dropdown.Toggle style={{backgroundColor:'#ECECEC', border:'none', color:'#848484'}} variant="success" id="dropdown-basic">
                                All Properties 

                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                    </div>

                    <button class="button" onClick={openFormModal}>Add New Property </button>

                </div>
            </div>

            {/* 
            Filter goes here 
            */}
            <Toast style={{width:'90%', padding:10, borderRadius:10, margin:'auto', marginBottom:10}}>
                {/* <Filter /> */}
                <Row>
                    <div class="col-md-2">
                        <input type="email" placeholder="Type of service" class="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />
                    </div>
                    <div class="col-md-2">
                        <input type="email" placeholder="Location" class="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />
                    </div>
                    <div class="col-md-2">
                        <DatePicker showTimeSelect dateFormat="Pp" className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>
                    <div class="col-md-2">

                        <DatePicker showTimeSelect dateFormat="Pp" className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
                        
                    </div>

                    <div style={{display:'flex', justifyContent:'space-between'}} class="col-md-4">
                        <div>
                        <h6 >GHS{sliderValue}000</h6>
                        {/* <Slider min={0} max={20} defaultValue={sliderValue} value={80} onChange={(e) => (sliderValue)}/> */}
                        <input type="range" min="1" max="10" value={sliderValue} name='val_blur' onChange={(e) => {handleChange(e)}}/>
                        </div>
                    <div >
                        <QuantityCounter/>
                    </div>
                    <div >
                        <Link to='/filterprops'>
                            <button className="button">Search</button>
                        </Link>
                    </div>
                    </div>
                </Row>
            </Toast>
            <div>

            </div>

<Container>
            <Table>
                <tr>
                   <td>Photo</td> 
                   <td>Property Info</td> 
                   <td>Added on</td> 
                   <td>Property Status</td> 
                   <td>Status</td> 
                   <td>Price</td> 
                </tr>


                {/* From Source */}
                {/* {properties.map((property) => (
                    <TableRow onDelete={() => deleteModal(property.id)} image={demo} info={property.info} added={property.added} beds={property.beds} showers={property.baths} status='FOR RENT' price={property.price}></TableRow>
                    ))} */}
                    <TableRow image={demo} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added="13-Feb-2021" beds="3" showers='2' status='FOR RENT' price="600"></TableRow>
                    <TableRow image={prop2} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added="13-Feb-2021" beds="3" showers='2' status='FOR RENT' price="600" onView={showViewModal}></TableRow>

                    <TableRow image={prop3} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added="13-Feb-2021" beds="3" showers='2' status='FOR RENT' price="600"></TableRow>
            </Table>
</Container>

<Modal show={viewModal} onHide={closeViewModal} size="lg" >
       <div style={{display:'flex', flexDirection:'row-reverse', padding:10}}>
        <FaTimes onClick={showViewModal} />
       </div>
        <div style={{textAlign:'center', padding:30}}>
            <h6 style={{fontSize:'small'}}><b>COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION</b></h6>
            <br/>
            <img src={demo} alt="img" style={{width:'40%'}}/>
            <div style={fit}>
                <div>
                    <img src={holder} alt="placeholder" />
                </div>
                <div>
                    <img src={imgplaceholder} alt="placeholder" />
                </div>
                <div>
                    <img src={imgplaceholder} alt="placeholder" />
                </div>
                <div>
                    <img src={imgplaceholder} alt="placeholder" />
                </div>
                <div>
                    <img src={imgplaceholder} alt="placeholder" />
                </div>
                <div>
                    <img src={imgplaceholder} alt="placeholder" />
                </div>
            </div>
            <div>
            <br/>
                <Row style={{paddingLeft:40,paddingRight:40}}>
                    <div className="col" style={{textAlign:'left'}}>
                        <h6 style={{color:'#066875', fontWeight:'bold'}}>FOR SALE <span style={{color:'#393939', fontWeight:'normal'}}>GHC 560,000</span></h6>
                        <h6>Description
                            <span style={{display:'flex'}}>
                                <img src={bed} style={{ width:20, height:20, marginRight:10}} alt="bed"/>
                                <h6>0</h6>
                                <img src={bath} style={{ width:20, height:20, marginLeft:10, marginRight:10}} alt="bed"/>
                                <h6>0</h6>
                            </span>
                        </h6>
                    </div>
                    <div className="col" style={{textAlign:'right'}}>
                        <button className="button">Add To Order</button>
                        <h6 style={{fontSize:'small', color:'#2B86FF'}}><FaLandmark /> Ashaley Botwe school junction</h6>
                    </div>
            <br/>
                </Row>
            </div>
            <div className="description" style={{padding:10}}>

                <h6 style={{fontSize:'small', textAlign:'left', }} className="text-muted">

            Just steps away from QM2 express bus to Manhattan and local buses; only minutes from the LIRR. Walking distance to the Bay Terrace Shopping Center, Baybridge Commons Shopping Center, pool clubs, movie theaters and tennis courts. 1.5 blocks away from elementary school PS 169 and Bell Academy middle school in the award-winning District 25. Don’t miss this opportunity!
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

export default FilterProperties