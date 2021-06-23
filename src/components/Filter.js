import React ,{useState} from 'react'
import {Row} from 'react-bootstrap'
import Slider, { Range } from 'rc-slider';
import DatePicker from "react-datepicker";
import { FaPlus, FaMinus } from 'react-icons/fa';

const Filter = () => {
    const edit ={
        backgroundColor:"transparent"
    }

    const price = {
        color:'grey',
        fontWeight:'bold'
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

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());


    const [count, setCount] = useState(1);

    const add = () => {
        setCount(count + 1);
    }
    const subtract = () => {
        setCount(count - 1);
    }

    return (



        <>
             <Row>
                    <div class="col-md-2">
                        <input type="email" placeholder="Type of service" class="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />
                    </div>
                    <div class="col-md-2">
                        <input type="email" placeholder="Location" class="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" />
                    </div>
                    <div class="col-md-2">
                        {/* <label>OOO</label> */}
                        {/* <input type="email" placeholder="Date" class="form-control col-md-2" name="" id="" aria-describedby="emailHelpId" /> */}
                        <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />

                    </div>
                    <div class="col-md-2">
                        <DatePicker className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />
                        
                        {/* <input type="email" placeholder="Time" class="form-control col-md-1" name="" id="" aria-describedby="emailHelpId" /> */}
                    </div>
                    <div class="col-md-2">
                        <h6 style={price}>GHS1,200</h6>
                        <Range />
                    </div>
                    <div class="col-md-2">
                        <div style={inline}>
                            <div style={iconLeft} >

                            <FaPlus onClick={add} />
                            </div>
                            <h4 style={{paddingRight:10, paddingLeft:10, paddingTop:5, marginBottom:2 }} >{count}</h4>
                            <div style={iconRight} >
                            <FaMinus onClick={subtract} />
                            </div>
                        </div>
                    </div>
{/* 
                    <div class="col-md-2">
                        <Link to='/booking'>
                            <button className="button">Search</button>
                        </Link>
                    </div> */}

                  
                </Row>
        </>
    )
}

export default Filter
