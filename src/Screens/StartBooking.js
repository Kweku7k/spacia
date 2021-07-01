import React, {useState} from 'react'
import { Container, Table, Dropdown, Row, Col } from 'react-bootstrap'
import demo from '../img/Web/Spacia/Demo.png'
import TableRow from '../components/TableRow'
import BookingTableRow from '../components/BookingTableRow'
import prop2 from '../img/Web/Spacia/prop2.png'
import prop3 from '../img/Web/Spacia/prop3.png'
import {FaCaretDown, FaCircle, FaEllipsisV, FaEllipsisH, FaPlus, FaMinus} from 'react-icons/fa'
import {Link} from 'react-router-dom' 
import bookingbg from '../img/Web/Spacia/settings/payment/bookingbg.png'
import DatePicker from "react-datepicker";
import Slider, { Range } from 'rc-slider';
import Filter from '../components/Filter'
import 'rc-slider/assets/index.css';
import "react-datepicker/dist/react-datepicker.css";
import '../App.css';
import DateTimePicker from 'react-datetime-picker'
import QuantityCounter from '../components/QuantityCounter'
import { Modal } from 'react-bootstrap'
import bg from '../img/Web/Spacia/Web/Spacia/nastuh-abootalebi-eHD8Y1Znfpk-unsplash 1.png'
import '../css/datetime.css';
import calendar from '../img/Web/Spacia/calendar-2 9.png'
const StartBooking = () => {
    //useState handling counter
    const [count, setCount] = useState(1);

    // Date Picker
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


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

    const [sliderValue, setSliderValue] = useState(0)

    const [value, onChange] = useState(new Date());

    const handleChange = (e) => {
        setSliderValue(e.target.value);
        console.log(e.target.value)
        // this.setState(obj);
    }

    const showBooking = false

    return (
        <div>
           <div className="header" style={{display:'flex', justifyContent:'space-between'}}>
                <div>
                    <h4><b>Find a Space</b></h4>
                </div>
{/* 
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /></form>
                    */}
                    <button class="button" style={{backgroundColor:'transparent'}}>Add New Property </button>


            </div>
            <Container >

            {/* backgroundImage:`url(${bookingbg})` */}
            <div className = 'bg'>
                <h3 style={{ fontWeight: 'bold',color:'white' }}>Find the Perfect Space</h3>
                <br/>
            <div style={bar}>
            {/* <Slider /> */}
            
                <Row>
                    <div style={{display:'flex'}}>
                    <input type="email" style={{width:'15%', marginRight:20}} placeholder="Type of service" class="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />

                    <input type="email" style={{width:'10%', marginRight:20}} placeholder="Location" class="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />
                    <div style={{width:'100%', marginRight:20, padding:0}}>
                        <DatePicker style={{height:'100%',width:'100%', marginRight:20, padding:10 }}  showTimeSelect dateFormat="Pp" className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                    <div style={{width:'100%', marginRight:20}}>
                        {/* <DateTimePicker style={{fontSize:20}} onChange={onChange} value={value}  /> */}
                        <DatePicker showTimeSelect dateFormat="Pp" className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div>
                        


                    {/* <div style={{display:'flex', justifyContent:'space-between'}} class="col-md-4"> */}
                        {/* <div style={{width:100}}>
                        <h6 style={price}>GHS1,200</h6>
                        <Slider min={0} max={20} defaultValue={3} />
                        </div> */}
                        <div style={{width:'50%'}}>
                        <h6 class="text-muted" style={{fontSize:10}}>GHS{sliderValue}</h6>
                        {/* <Slider min={0} max={20} defaultValue={sliderValue} value={80} onChange={(e) => (sliderValue)}/> */}
                        <input type="range" min="0" max="10000" value={sliderValue} name='val_blur' onChange={(e) => {handleChange(e)}}/>
                        </div>
                    {/* <div > */}
                        <QuantityCounter/>
                    {/* </div> */}
                    <div style={{marginLeft:10}}>
                        <Link to='/filterprops'>
                            <button className="button">Search</button>
                        </Link>
                    </div>
                    </div>
                </Row>

                {/* <Filter startDate={startDate} setStartDate={setStartDate} endDate={endDate} setEndDate={setEndDate} count={count} setCount={setCount} add={add} subtract={subtract}/> */}

            </div >
            </div>
            </Container>
            

<Modal show={false} onClose={closeModal} centered size='lg' style={newModal}>
    <h4 style={{textAlign:'center'}}>Find The Perfect Space</h4>

    <div style={{display:'flex'}}>
        {/* <img src={calendar} /> */}
<h6>Want to find a space on SPACIA?</h6>
<button>
    
</button>
    </div>
</Modal>
        </div>
    )
}

export default StartBooking
