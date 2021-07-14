import React, {useEffect, useState} from 'react'
import {Container, Dropdown, Row, Table, Toast} from 'react-bootstrap'
import demo from '../img/Web/Spacia/Rectangle 66.png'
import FilterTableRow from '../components/FilterTableRow'
import TableRow from '../components/TableRow'
import FormModal from '../components/NewPropertyModal'
import FeedbackModal from '../components/FeedbackModall'
import Slide from 'rc-slider';
import {Link} from 'react-router-dom'
import QuantityCounter from '../components/QuantityCounter'
import home1 from '../img/homes/home1.jpeg'
import axios from "axios";
import moment from 'moment';
import {useDispatch, useSelector} from "react-redux";
import {addEntry, saveCartDetails, saveCurrentEntry, saveFilterOptions} from "../redux/actions/dashboard";
import SERVICES from '../services';
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import DesktopDatePicker from "@material-ui/lab/DesktopDatePicker";
import TextField from "@material-ui/core/TextField";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import TimePicker from "@material-ui/lab/TimePicker";
import {FilterPropertiesStyles} from "./FilterPropertiesStyles";
import {v4 as uuidv4} from 'uuid';


const FilterProperties = (onAddToCart) => {
    const [formModal, setformModal] = useState(false)
    // Form Values
    const [beds, setBeds] = useState("")
    const [baths, setBaths] = useState("")

    const [info, setInfo] = useState("")
    const [status, setStatus] = useState("Pending")
    const [price, setPrice] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [location, setLocation] = useState({});
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [capacity, setCapacity] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [filterOptions, setFilterOptions] = useState({});

    // const filterOptionsUrl = "https://spacia.page/booking/api/v1/listings/filter/options";
    const filters = useSelector(state => state.dashboard.filterOptions);

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

    const cartDetails = useSelector(state => state.dashboard.cartDetails);

    const addToCart = () => {
        // const resourceUrl = "https://spacia.page/api/booking/api/v1/order/add-to-cart";
        const resourceUrl = "http://localhost:9003/api/v1/order/add-to-cart";

        // find out if there is already an existing cart
        const cartId = (cartDetails) ? cartDetails['cartId'] : null;

        axios.post(resourceUrl,{
            "endOn": "2021-07-13T01:31:55.954Z",
            "itemPrice": 250,
            "listingId": 4,
            "quantity": 2,
            "startOn": "2021-07-13T01:31:55.955Z",
            "subTotal": 500,
            "userId": 1
        }, { params: {cartId}}).then((res) => {
            console.log(res.data.data[0]);

            if (res.status === 200) {
                const cartDetails = res.data.data[0];
                dispatch(saveCartDetails(cartDetails));

                const cartEntry = structureEntry(cartDetails);
                dispatch(addEntry(cartEntry));
                dispatch(saveCurrentEntry(cartEntry))
            } else {
                console.warn('an error occurred while adding item to cart');
            }
        })
    }

    const closeViewModal = () => {
        addToCart();
        setViewModal(false);
    }

    function structureEntry(cartDetails) {
        return {
            entryId: cartDetails.entryId,
            cartId: cartDetails.cartId,
            owner: {
                id: cartDetails.id,
                username: cartDetails.username
            },
            price: cartDetails.price,
            quantity: cartDetails.quantity,
            subTotal: cartDetails.subTotal,
            itemInEntry: {
                description: cartDetails.itemInEntry.description,
                image: (cartDetails.itemInEntry.media.images && cartDetails.itemInEntry.media.images > 0) ? cartDetails.itemInEntry.media.images[0] : null,
                imageDescription: cartDetails.itemInEntry.media.description
            }
        };
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
    const deleteProperty = (id) => {
        setProperties(properties.filter((property) => property.id !== id))
    }

    const selectedFilters = useSelector(state => state.dashboard.selectedFilters);

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

    const handleDateChange = (newValue) => {
        console.log(newValue);
        // setDate(date);
        //
        // console.log(date);
    };

    const handleTimeChange = (newValue) => {
        setTime(newValue);
    }

    const handleHide = () => {
        console.log('Hide me');
    }

    return (
        <FilterPropertiesStyles>
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
                                filterOptions['propertyTypes'].map((type) => <option key={uuidv4()} value={type.value}>{type.label}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*<input type="email" placeholder="Location" className="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />*/}
                        <select className="form-select" aria-label="Location" onChange={handleSecondSelect}>
                            <option selected>Location</option>
                            {
                                (filterOptions['location']) &&
                                filterOptions['location'].map((type) => <option key={uuidv4()} value={type.city}>{formatLocation(type)}</option>)
                            }
                        </select>
                    </div>
                    <div className="col-md-2">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker className='form-control'
                                               inputFormat="MM/dd/yyyy"
                                // inputFormat="yyyy-MM-dd"
                                               value={date}
                                               onChange={handleDateChange}
                                               renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                        {/*<input type="text" className='form-control' placeholder='Date'/>*/}
                        {/*<DatePicker showTimeSelect dateFormat="Pp" className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />*/}

                    </div>
                    <div className="col-md-2">

                        {/*<DatePicker style={{fontSize:100}} showTimeSelect dateFormat="Pp" className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />*/}
                        {/*<input type="text" className='form-control' placeholder='Time'/>*/}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <TimePicker
                                value={time}
                                onChange={handleTimeChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
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

                        return <TableRow
                            key={listing.id}
                            image={demo}
                            info={listing['description'].toUpperCase()}
                            added={moment(listing.createdOn).format('DD-MMM-YYYY')}
                            size={listing['listingDetails'] ? listing['listingDetails']['propertySize'] : ''}
                            capacity={listing['listingDetails'] ? listing['listingDetails']['capacity'] : ''}
                            status='AVAILABLE'
                            propertyStatus={status && status.label} price={`GHS ${overall}`}
                            onClick={showViewModal} onView={showViewModal} onAddToCart={onAddToCart}/>

                    }) }
                          <TableRow image={home1} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added="13-Feb-2021" beds="3" showers='2' status='FOR RENT' price="600" onClick={showViewModal} onView={showViewModal} onAddToCart={onAddToCart}></TableRow>
                        {/*<FilterTableRow image={prop3} info="COMMERCIAL SPACE FOR RENT AT ACCRA OPPOSITE NIMA POLICE STATION" added="13-Feb-2021" beds="3" showers='2' status='FOR RENT' price="600"></FilterTableRow>*/}

            </Table>

</Container>


{/* View Property Modal  */}
            {/* <button className="button" style={{width:200}} onClick={closeViewModal}>Add To Cart</button> */}
            {/* <Link to='/cart'> */}
               {/* <button className="button" style={{width:200}} onClick={closeViewModal}>Add To Cart</button> */}
            {/* </Link> */}
{/* <Modal show={true} handleHide={true} size="lg" > */}
      {/* <div style={{display:'flex', flexDirection:'row-reverse', padding:10}}>*/}
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
{/*                    <img onClick={changeImage} src={home2} style={imgholder} alt="placeholder" /> */}
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
{/*                        <Link to='/cart'>*/}
{/*                            <button className="button" style={{width:200}} onClick={closeViewModal} >Add To Cart</button>*/}
{/*                        </Link>*/}
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

{/*        </Modal>*/}

{/*    <Modal show={true}>*/}
{/*<h4>Show Modal</h4> */}
   {/* </Modal> */}


{/* doneButton={() => deleteProperty()} */}
<FormModal onSubmit={onSubmit} title="Add a new property" isOpen={formModal} isClose={closeFormModal} declineButton="Cancel" acceptButton="Change" info={info} setInfo={setInfo} status={status} setStatus={setStatus} beds={beds} setBeds={setBeds} price={price} setPrice={setPrice} baths={baths} setBaths={setBaths}/>
<FeedbackModal isClose={closeDeleteModal} doneButton="Okay" isOpen={showDeleteModal} declineButton={closeDeleteModal}  >
<h6>This property has been deleted</h6>
</FeedbackModal>
        </FilterPropertiesStyles>

    )
}

export default FilterProperties
