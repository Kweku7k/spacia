import React, {useEffect, useState} from 'react'
import { Container, Table, Dropdown, Row, Col } from 'react-bootstrap'
import demo from '../img/Web/Spacia/Demo.png'
import TableRow from '../components/TableRow'
import BookingTableRow from '../components/BookingTableRow'
import prop2 from '../img/Web/Spacia/prop2.png'
import prop3 from '../img/Web/Spacia/prop3.png'
import {FaCaretDown, FaCircle, FaEllipsisV, FaEllipsisH, FaPlus, FaMinus, FaCalendarAlt, FaArrowRight, FaHome, FaTimes} from 'react-icons/fa'
import {Link} from 'react-router-dom' 
import bookingbg from '../img/Web/Spacia/settings/payment/bookingbg.png'
import DatePicker from "react-datepicker";
import Slide, { Range as Hmm } from 'rc-slider';
import Filter from '../components/Filter'
import 'rc-slider/assets/index.css';
// import "react-datepicker/dist/react-datepicker.css";
import '../App.css';
import DateTimePicker from 'react-datetime-picker'
import QuantityCounter from '../components/QuantityCounter'
import { Modal } from 'react-bootstrap'
import bg from '../img/Web/Spacia/Web/Spacia/nastuh-abootalebi-eHD8Y1Znfpk-unsplash 1.png'
// import '../css/datetime.css';
import calendar from '../img/Web/Spacia/calendar-2 9.png'
import axios from "axios";
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import {saveFilterOptions, saveSelectedFilters} from "../redux/actions/dashboard";
import {useDispatch, useSelector} from "react-redux";
import Stack from '@material-ui/core/Stack';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import TimePicker from '@material-ui/lab/TimePicker';
import DesktopDatePicker from '@material-ui/lab/DesktopDatePicker';
import MobileDatePicker from '@material-ui/lab/MobileDatePicker';
import {StartBookingStyles} from "./StartBookingStyles";

const StartBooking = () => {
    const [filterOptions, setFilterOptions] = useState({});
    const filters = useSelector(state => state.dashboard.filterOptions);

    useEffect(() => {
        setFilterOptions(filters);
    }, []);

    //useState handling counter
    const [count, setCount] = useState(1);

    // Date Picker
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [newUserModal, setNewUserModal] = useState(true)

    const link = {
        textDecoration:'none', 
        color:'black'
    }

    const closeModal = () => {
        console.log('Yep')
    }
    //function to add and subtract counter
    const add = () => {
        setCount(count + 1);
    }
    const subtract = () => {
        setCount(count - 1);
    }

    const newModal = {
        backgroundImage:`url(${bg})` 
    }

    const edit ={
        backgroundColor:"transparent"
    }

    const price = {
        color:'grey',
        fontWeight:'bold',
        fontSize:10
    }

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

    const input = {
        // fontSize:'0.5rem',
        width:'50%'
    }

    const modalBar = {
        display:'flex', 
        justifyContent:'space-between', 
        backgroundColor:'white', 
        width:'80%', 
        marginRight:'auto', 
        marginLeft:'auto', 
        padding:10, 
        marginBottom:30,
        borderRadius:5
    }

    const [sliderValue, setSliderValue] = useState(0);
    const [propertyType, setPropertyType] = useState('');
    const [location, setLocation] = useState({});
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [capacity, setCapacity] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [listingTypeVal, setListingTypeVal] = useState('');

    const dispatch = useDispatch();

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

    const dispatchFilters = () => {
        const selectedFilters = {
            "cost": maxPrice,
            "location": { city,country },
            "propertyType": listingTypeVal
        }

        dispatch(saveSelectedFilters(selectedFilters));

        console.log('Inside dispatchFilters method');
    }

    const formatLocation = (location) => {
        const city = location.city;
        const country = location.country;

        let label = (country) ? country.label : '';
        label = label.charAt(0).toUpperCase() + label.slice(1);

        return `${city}, ${label.toUpperCase()}`;
    }

    const [value, onChange] = useState(new Date());

    const handleChange = (e) => {
        setSliderValue(e.target.value);
        console.log(e.target.value)
        // this.setState(obj);
    }

    const showBooking = false

    const handleSelectChange = (e) => {
        if (e.target.value !== 'Type of service')
            setListingTypeVal(e.target.value);
    }

    const handleSecondSelect = (e) => {
        const value = e.target.value;
        console.log(value);

        const cityAndCountry = value.split(',');

        setCity(cityAndCountry[0]);
        setCountry(cityAndCountry[1]);

        console.log('city', city, 'country', country);
    }

    const getDate = (date) => {
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }

    const handleDateChange = (newValue) => {
        const date = getDate(newValue);
        console.log(date);
        setDate(newValue);
        //
        // console.log(date);
    };

    const handleTimeChange = (newValue) => {
        setTime(newValue);
    }

    useEffect(() => {
        console.log(time);
        console.log(time.getTime());

        // console.log("Date: "+date.getDate()+
        //     "/"+(time.getMonth()+1)+
        //     "/"+time.getFullYear()+
        //     " "+time.getHours()+
        //     ":"+time.getMinutes()+
        //     ":"+time.getSeconds());
    }, [time]);

    return (
        <StartBookingStyles>
           <div className="header" style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h4><b>Find a Space</b></h4>
                </div>
{/*
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /></form>
                    */}
                    <button className="button" style={{backgroundColor:'transparent'}}>Add New Property </button>

            </div>
            <Container >

            {/* backgroundImage:`url(${bookingbg})` */}
            <div className = 'bg'>
                <h3 style={{ fontWeight: 'bold',color:'white' }}>Find the Perfect Space</h3>
                <br/>
            <div style={bar}>
            {/* <Slider /> */}

                <Row>
                    <div style={{display:'flex', alignItems: 'center'}}>
                    {/*<input type="email" style={{width:'15%', marginRight:20}} placeholder="Type of service" className="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />*/}
                        <div style={{width:'100%', marginRight:20, padding:0}}>
                            <select className="form-select" aria-label="Property Type" onChange={handleSelectChange}>
                                <option selected>Type of service</option>
                                {/*{*/}
                                {/*    filterOptions['propertyTypes'].map((type) => {*/}
                                {/*        setListingTypeVal(type.value);*/}

                                {/*        return <option key={type.value} value={type.value}>{convertType(type.label)}</option>*/}
                                {/*    })*/}
                                {/*}*/}
                                {
                                    (filterOptions['propertyTypes']) &&
                                    filterOptions['propertyTypes'].map((type) => <option value={type.value}>{type.label}</option>)
                                }
                            </select>
                        </div>
                    {/*<input type="email" style={{width:'10%', marginRight:20}} placeholder="Location" className="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />*/}
                        <div style={{width:'100%', marginRight:20, padding:0}}>
                            <select className="form-select" aria-label="Location" onChange={handleSecondSelect}>
                                <option selected>Location</option>
                                {
                                    (filterOptions['location']) &&
                                    filterOptions['location'].map((type) => <option value={`${type.city},${type.country.value}`}>{formatLocation(type)}</option>)
                                }
                            </select>
                        </div>
                    <div style={{width:'100%', marginRight:20, padding:0}}>
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
                        {/*<DatePicker style={{height:'100%',width:'100%', marginRight:20, padding:10 }}  showTimeSelect dateFormat="Pp" className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />*/}
                    </div>
                    <div style={{width:'100%', marginRight:20}}>
                        {/* <DateTimePicker style={{fontSize:20}} onChange={onChange} value={value}  /> */}
                        {/*<DatePicker showTimeSelect dateFormat="Pp" className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />*/}
                        {/*<input type="text" className='form-control' placeholder='Time'/>*/}
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    value={time}
                                    onChange={handleTimeChange}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                        </LocalizationProvider>
                    </div>


                    {/* <div style={{display:'flex', justifyContent:'space-between'}} class="col-md-4"> */}
                        {/* <div style={{width:100}}>
                        <h6 style={price}>GHS1,200</h6>
                        <Slider min={0} max={20} defaultValue={3} />
                        </div> */}
                    {/* <div > */}
                        <div style={{width:'50%', marginRight:20}}>
                            <QuantityCounter/>
                        </div>
                        <div style={{width: '50%'}}>
                            <h6 className="text-muted" style={{fontSize: 14}}>GHS{maxPrice.toLocaleString()}</h6>
                            {/* <Slider min={0} max={20} defaultValue={sliderValue} value={80} onChange={(e) => (sliderValue)}/> */}
                            {/*<input type="range" min="0" max="10000" value={sliderValue} name='val_blur' onChange={(e) => {handleChange(e)}}/>*/}
                            <Slide min={0} max={10000} step={1000} railStyle={{background: '#f859475e', height: '6px'}}
                                   trackStyle={[{background: 'orangered', height: '6px'}]} handleStyle={[{background: 'white', marginTop: '-5px', borderColor: 'orangered'}]} onChange={(e) => setMaxPrice(e)}/>
                        </div>
                    {/* </div> */}
                    <div style={{marginLeft:10}}>
                        <Link to='/filterprops'>
                            <button className="button" onClick={dispatchFilters}>Search</button>
                        </Link>
                    </div>
                    </div>
                </Row>
                {/* <Filter startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} count={count} setCount={setCount} add={add} subtract={subtract}/> */}
            </div >
            </div>
            </Container>

<Modal show={newUserModal} onHide={() => setNewUserModal(false)} centered size='lg' style={{borderRadius:10}}>

        <div style={newModal} className="newmodal">
            <div style={{display:'flex', flexDirection:'row-reverse', margin:20}}>
            <FaTimes onClick={() => setNewUserModal(false)} color="white"/>
            </div>
        <h4 style={{textAlign:'center', marginTop:'10vh', marginBottom:'10vh', color:'white'}}><b>Find The Perfect Space</b></h4>
    <Container>
        {/* <Link to="/startbooking" style={link}> */}
            <div style={modalBar} onClick={() => setNewUserModal(false)} >
                <FaCalendarAlt size={28} color='red' style={{marginTop:'auto', marginBottom:'auto'}}/>
                <h5 style={{textAlign:'center', marginTop:'auto', marginBottom:'auto'}}><b>Want to find a space on SPACIA?</b></h5>
                <div style={{padding:10, borderRadius:5, backgroundColor:'red'}}>
                    <FaArrowRight color="white"/>
                </div>
            </div>
        {/* </Link> */}

        <Link to="/listproperty" style={link}>
            <div style={modalBar}>
                <FaHome size={28} color='red' style={{marginTop:'auto', marginBottom:'auto'}}/>
                <h5 style={{textAlign:'center', marginTop:'auto', marginBottom:'auto'}}><b>Want to add a listing on SPACIA?</b></h5>
                <div style={{padding:10, borderRadius:5, backgroundColor:'red'}}>
                    <FaArrowRight color="white"/>
                </div>
            </div>
        </Link>

    </Container>
    </div>
</Modal>
        </StartBookingStyles>
    )
}

export default StartBooking
