import React from 'react'
import bed from '../img/Web/Spacia/bed.png'
import bathtub from '../img/Web/Spacia/bathtub.png'
import { FaEdit, FaEye, FaTimes } from 'react-icons/fa'
import {Row} from 'react-bootstrap'
import '../css/Table.css'
import QuantityCounter from './QuantityCounter'
import DatePicker from "react-datepicker";

{/* <TableRow info="Some Text" Added='February 20th' Status='Availble' Price='Ghc30'></TableRow> */}

const PropsRow = ({image, info, added, status, price, beds, showers, onDelete, onEditProperty, onView}) => {

    const available = {
        backgroundColor:'#02BD04', 
        color:'white', 
        border:'none',
        fontWeight:'bold', 
        borderRadius:5, 
        paddingTop:4, 
        paddingBottom:4, 
        paddingLeft:20, 
        paddingRight:20
    }

    const tableCell = {
        verticalAlign:'top',
        paddingTop:10
    }

    const [endDate, setEndDate] = useState(new Date());
    

    return (
            <tr style={{borderBottom:"1px dashed black"}} >
                    <td><div class="form-check">
                      <label class="form-check-label">
                        <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader"/>
                      </label>
                    </div></td>
                    <td><img src={image} width={100} alt="demo"/></td>
                    <td style={{width:200}}>
                        <div>
                         <h6><b>Private Office</b></h6>
                         <br/>
                         <h6 class="text-muted">Furnished </h6>
                         <br/>
                         <h6 style={{color:'red'}}>Remove</h6>
                        </div>
                        </td>
                    <td style={tableCell}><QuantityCounter/></td>
                    <td style={tableCell}>
                    <DatePicker className="form-control" selected={endDate} onChange={(date) => setEndDate(date)} />

                    </td>
                    <td style={tableCell}><button style={available}>AVAILABLE</button></td>
                    <td style={tableCell}>
                        <div>
                            <b>Ghc {price} / month</b>
                            <br/>
                            <div style={{display:'flex', marginTop:20}}>
                            
                            <div onClick={onView} style={{display:'flex', cursor:'pointer', color:'grey'}}>
                                <br/>
                            <FaEye /><h6>View</h6>

                            </div>
                            
                            <div onClick={onEditProperty} style={{display:'flex', cursor:'pointer', paddingRight:10, paddingLeft:10,color:'grey'}}>
                                <br/>
                            <FaEdit /><h6>Edit</h6>
                            </div>

                            <div onClick={onDelete} style={{display:'flex', cursor:'pointer', color:'grey'}}>
                                <br/>
                            <FaTimes /><h6>Delete</h6>
                            </div>

                            
                            </div>

                        </div>
                    </td>
                </tr>

    )
}

export default PropsRow
