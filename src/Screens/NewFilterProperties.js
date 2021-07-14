import React, { useState, useEffect } from 'react'
import { Container, Table, Dropdown, Toast, Modal, Row } from 'react-bootstrap'
import demo from '../img/Web/Spacia/Rectangle 66.png'
import demo2 from '../img/Web/Spacia/Demo.png'
import TableRow from '../components/TableRow'
import FilterTableRow from '../components/FilterTableRow'
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
import home1 from '../img/homes/home1.jpeg'
import home2 from '../img/homes/home2.jpeg'
import home3 from '../img/homes/home3.jpeg'
import home4 from '../img/homes/home4.jpeg'
import home5 from '../img/homes/home5.jpeg'
import home6 from '../img/homes/home6.jpeg' 
import home7 from '../img/homes/home6.jpeg'
import axios from "axios";
import Slide from "rc-slider";
import moment from 'moment';
import {useDispatch, useSelector} from "react-redux";
import {saveFilterOptions} from "../redux/actions/dashboard";
import SERVICES from '../services';
import { PropertyModal } from '../components/PropertyModal'


const NewFilterProperties = (onAddToCart) => {
    const [formModal, setformModal] = useState(false)
    // Form Values
    const [beds, setBeds] = useState("")
    const [baths, setBaths] = useState("")

    const [info, setInfo] = useState("")
    const [status, setStatus] = useState("Pending")
    const [price, setPrice] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [location, setLocation] = useState({});
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [capacity, setCapacity] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [filterOptions, setFilterOptions] = useState({});

    // const filterOptionsUrl = "https://spacia.page/booking/api/v1/listings/filter/options";
    const filters = useSelector(state => state.dashboard.selectedFilters);

    useEffect(() => {
        setFilterOptions(filters);
    }, []);


    const edit ={
        backgroundColor:"transparent"
    }
 
    const imgholder = {
        width:'90%'
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

    const [image, setImage] = useState(home1)

    const [count, setCount] = useState(1);

    const add = () => {
        setCount(count + 1);
    }
    const subtract = () => {
        setCount(count - 1);
    }


    const changeImage = (e) => {
        // const temp = e.target.value
        console.log(e.target.src)
        setImage(e.target.src)
    }
    const [viewModal, setViewModal] = useState(false)

    const showViewModal = () =>{
        console.log("Clicked")
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
        setProperties([...properties, property])
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

    const [properties, setProperties] = useState([])

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
        setProperties(properties.filter((property) => property.id !== id))
    }

    const selectedFilters = useSelector(state => state.dashboard.filterOptions);

    useEffect(() => {
        console.log('Inside filter properties');
        console.log(selectedFilters);
    }, []);

    const convertType = (type) => {
        switch (type) {
            case 'Work':
                return 'Office';

            case 'Stay':
                return 'Residential';

            case 'Concierge':
                return 'Service';
        }
    }

    const formatLocation = (location) => {
        const city = location.city;
        const country = location.country;

        let label = (country) ? country.label : '';
        label = label.charAt(0).toUpperCase() + label.slice(1);

        return `${city}, ${label}`;
    }

    const dispatch = useDispatch();

    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [listingTypeVal, setListingTypeVal] = useState('');

    const handleSecondSelect = (e) => {
        const value = e.target.value;
        console.log(value);

        const cityAndCountry = value.split(',');

        setCity(cityAndCountry[0]);
        setCountry(cityAndCountry[1]);

        console.log('city', city, 'country', country);
    }

    const handleSelectChange = (e) => {
        if (e.target.value !== 'Type of service')
            setListingTypeVal(e.target.value);
    }

    const dispatchFilters = () => {
        const a = {
            "cost": maxPrice,
            "location": { city,country },
            "propertyType": listingTypeVal
        }

        dispatch(saveFilterOptions(a));

        console.log('Inside dispatchFilters method');
    }

    useEffect(() => {
        const currentUser = SERVICES.getUser();

        const userId = currentUser ? currentUser.id : 0;

        const searchUrl = 'https://spacia.page/booking/api/v1/listings/search';
        axios.post(searchUrl,
            {
                "cost": selectedFilters.cost,
                "location": {
                    "city": selectedFilters.location.city,
                    "country": selectedFilters.location.country
                },
                "propertyType": selectedFilters.propertyType,
                "userId": userId
            }).then(res => {
            const searchBasedOnFilters = res.data['data'];

            setProperties((searchBasedOnFilters) ? searchBasedOnFilters : []);
            console.log(res.data.data);
        }).catch(err=>(console.log(err)))
    }, []);

    const searchForProperties = () => {
        const currentUser = SERVICES.getUser();

        const userId = currentUser ? currentUser.id : 0;

        const searchUrl = 'https://spacia.page/booking/api/v1/listings/search';
        axios.post(searchUrl,
            {
                "cost": maxPrice,
                "location": {
                    "city": city,
                    "country": country
                },
                "propertyType": listingTypeVal,
                "userId": userId
            }).then(res => {
                const searchBasedOnFilters = res.data['data'];

                if (res.status === 200) {
                    setProperties((searchBasedOnFilters) ? searchBasedOnFilters : []);
                } else {
                    setProperties([]);
                }

            console.log(res.data.data);
            console.log(res);
        }).catch(err => {
            setProperties([]);
            (console.log(err))
        })
    }

    return (
        <div>
           <div className="header" style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h4><b>Search Results</b></h4>
                </div>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                <form className="form-inline my-2 my-xl-0" style={{width:"30vw"}}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div className="dropdown" style={{margin:'auto 30px'}}>
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

                    {/* <button class="button" onClick={openFormModal}>Add New Property </button> */}

                </div>
            </div>

            {/* 
            Filter goes here 
            */}
            <Toast style={{width:'90%', padding:10, borderRadius:10, margin:'auto', marginBottom:10}}>
                {/* <Filter /> */}
                <Row>
                    <div className="col-md-2">
                        {/*<input type="email" placeholder="Type of service" className="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />*/}
                        <select className="form-select" aria-label="Property Type" onChange={handleSelectChange}>
                            <option selected>Type of service</option>
                            {
                                (filterOptions['propertyTypes']) &&
                                filterOptions['propertyTypes'].map((type) => <option value={type.value}>{convertType(type.label)}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*<input type="email" placeholder="Location" className="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />*/}
                        <select className="form-select" aria-label="Location" onChange={handleSecondSelect}>
                            <option selected>Location</option>
                            {
                                (filterOptions['location']) &&
                                filterOptions['location'].map((type) => <option value={type.city}>{formatLocation(type)}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-2">
                        <input type="text" className='form-control' placeholder='Date'/>
                        {/*<DatePicker showTimeSelect dateFormat="Pp" className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />*/}

                    </div>
                    <div className="col-md-2">

                        {/*<DatePicker style={{fontSize:100}} showTimeSelect dateFormat="Pp" className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />*/}
                        <input type="text" className='form-control' placeholder='Time'/>
                    </div>

                    <div style={{display:'flex', justifyContent:'space-between'}} className="col-md-4">
                        <div style={{width: '100%', marginRight: '20px'}}>
                        {/*<h6 className="text-muted" style={{fontSize:10}}>GHS{sliderValue}000</h6>*/}

                        {/*/!* <Slider min={0} max={20} defaultValue={sliderValue} value={80} onChange={(e) => (sliderValue)}/> *!/*/}
                        {/*<input type="range" min="100" max="10000" value={sliderValue} name='val_blur' onChange={(e) => {handleChange(e)}}/>*/}

                            <h6 className="text-muted" style={{fontSize: 14}}>GHS{maxPrice.toLocaleString()}</h6>
                            {/* <Slider min={0} max={20} defaultValue={sliderValue} value={80} onChange={(e) => (sliderValue)}/> */}
                            {/*<input type="range" min="0" max="10000" value={sliderValue} name='val_blur' onChange={(e) => {handleChange(e)}}/>*/}
                            <Slide min={0} max={10000} step={1000} railStyle={{background: '#f859475e', height: '6px'}}
                                   trackStyle={[{background: 'orangered', height: '6px'}]} handleStyle={[{background: 'white', marginTop: '-5px', borderColor: 'orangered'}]} onChange={(e) => setMaxPrice(e)}/>


                        </div>
                    <div style={{marginRight: '10px'}}>
                        <QuantityCounter/>
                    </div>
                    <div>
                        <button className="button" onClick={searchForProperties}>Search</button>
                        {/*<Link to='/filterprops'>*/}
                        {/*    <button className="button">Search</button>*/}
                        {/*</Link>*/}
                    </div>
                    </div>
                </Row>
            </Toast>
            <div>

            </div>

<Container>
            <Table>
                <tr style={{height: '60px', background: '#f7f7f7'}}>
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
                {
                    properties.map(listing => {
                        let status = listing.propertyStatus;

                        // get property price
                        const propertyPrice = listing.propertyPrice;
                        const price = propertyPrice && propertyPrice.price;
                        const billingPeriod = propertyPrice && propertyPrice.billingPeriod;

                        let overall = undefined;
                        if (price && billingPeriod) {
                            let period = null;
                            switch (billingPeriod) {
                                case 'HOURLY':
                                    period = 'hour';
                                    break;

                                case 'MONTHLY':
                                    period = 'month';
                                    break;

                                case 'DAILY':
                                    period = 'day';
                                    break;

                                default:
                                    period = 'year';
                            }

                            overall = `${price.toLocaleString()}/${period}`;
                        } else if (price) {
                            overall = price;
                        } else {
                            overall = 'N/A';
                        }

                        return <FilterTableRow
                            key={listing.id}
                            image={demo}
                            info={listing['description'].toUpperCase()}
                            added={moment(listing.createdOn).format('DD-MMM-YYYY')}
                            size={listing['listingDetails'] ? listing['listingDetails']['propertySize'] : ''}
                            capacity={listing['listingDetails'] ? listing['listingDetails']['capacity'] : ''}
                            status='AVAILABLE'
                            propertyStatus={status && status.label} price={`GHS ${overall}`} />

                    }) }
                        {/*  <FilterTableRow image={home1} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added="13-Feb-2021" beds="3" showers='2' status='FOR RENT' price="600" onClick={showViewModal} onView={showViewModal} onAddToCart={onAddToCart}></FilterTableRow>*/}
                        {/*<FilterTableRow image={prop3} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added="13-Feb-2021" beds="3" showers='2' status='FOR RENT' price="600"></FilterTableRow>*/}

            </Table>

</Container>

{/* <PropertyModal viewModal={true} closeViewModal={()=>setViewModal()/> */}

{/* View Property Modal  */}


{/*<Modal show={viewModal} onHide={closeViewModal} size="lg" >*/}
{/*       <div style={{display:'flex', flexDirection:'row-reverse', padding:10}}>*/}
{/*        <FaTimes onClick={closeViewModal} />*/}
{/*       </div>*/}
{/*        <div style={{textAlign:'center', padding:30}}>*/}
{/*            <h6><b>COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION</b></h6>*/}
{/*            <br/>*/}
{/*            <img src={image} alt="img" style={{width:'40%'}}/>*/}
{/*            <div style={fit}>*/}
{/*                <div>*/}
{/*                    <img onClick={changeImage} src={home1} style={imgholder} alt="placeholder" />*/}
{/*                </div>*/}
{/*                <div>*/}
{/*                    <img onClick={changeImage} src={home2} style={imgholder} alt="placeholder" />*/}
{/*                </div>*/}
{/*                <div>*/}
{/*                    <img onClick={changeImage} src={home3} style={imgholder} alt="placeholder" />*/}
{/*                </div>*/}
{/*                <div>*/}
{/*                    <img onClick={changeImage} src={home4} style={imgholder} alt="placeholder" />*/}
{/*                </div>*/}
{/*                <div>*/}
{/*                    <img onClick={changeImage} src={home5} style={imgholder} alt="placeholder" />*/}
{/*                </div>*/}
{/*                <div>*/}
{/*                    <img onClick={changeImage} src={home6} style={imgholder} alt="placeholder" />*/}
{/*                </div>*/}
{/*            </div>*/}
{/*            <div>*/}
{/*            <br/>*/}
{/*                <Row style={{paddingLeft:40,paddingRight:40}}>*/}
{/*                    <div className="col" style={{textAlign:'left'}}>*/}
{/*                        <h5 style={{color:'#066875', fontWeight:'bold'}}>FOR SALE <span style={{color:'#393939', fontWeight:'normal'}}>GHC 560,000</span></h5>*/}
{/*                        <br/>*/}
{/*                        <h6 ><b>Description</b>*/}
{/*                            <span style={{display:'flex'}}>*/}
{/*                                <img src={bed} style={{ width:20, height:20, marginRight:10}} alt="bed"/>*/}
{/*                                <h6>0</h6>*/}
{/*                                <img src={bath} style={{ width:20, height:20, marginLeft:10, marginRight:10}} alt="bed"/>*/}
{/*                                <h6>0</h6>*/}
{/*                            </span>*/}
{/*                        </h6>*/}
{/*                    </div>*/}
{/*                    <div className="col" style={{textAlign:'right'}}>*/}
{/*                        <button className="button" style={{width:200}} onClick={closeViewModal} >Add To Cart</button>*/}
{/*                        <br/>*/}
{/*                        <h6 style={{fontSize:'small', color:'#2B86FF', marginTop:10}}><FaLandmark /> Ashaley Botwe school junction</h6>*/}
{/*                    </div>*/}
{/*                    <br/>*/}
{/*                </Row>*/}
{/*            </div>*/}
{/*            <div className="description" style={{padding:10}}>*/}

{/*                <h6 style={{fontSize:'small', textAlign:'left', lineHeight:2 }} className="text-muted">*/}

{/*            Just steps away from QM2 express bus to Manhattan and local buses; only minutes from the LIRR. Walking distance to the Bay Terrace Shopping Center, Baybridge Commons Shopping Center, pool clubs, movie theaters and tennis courts. 1.5 blocks away from elementary school PS 169 and Bell Academy middle school in the award-winning District 25. Don’t miss this opportunity!*/}
{/*                </h6>*/}

{/*            </div>*/}
{/*        </div>*/}
{/*       */}
{/*        </Modal>*/}

{/*    <Modal show='true'>*/}
{/*<h4>Show Modal</h4>*/}
{/*    </Modal>*/}


{/* doneButton={() => deleteProperty()} */}
<FormModal onSubmit={onSubmit} title="Add a new property" isOpen={formModal} isClose={closeFormModal} declineButton="Cancel" acceptButton="Change" info={info} setInfo={setInfo} status={status} setStatus={setStatus} beds={beds} setBeds={setBeds} price={price} setPrice={setPrice} baths={baths} setBaths={setBaths}/>
<FeedbackModal isClose={closeDeleteModal} doneButton="Okay" isOpen={showDeleteModal} declineButton={closeDeleteModal}  >
<h6>This property has been deleted</h6>
</FeedbackModal>
        </div>

    )
}

export default NewFilterProperties
