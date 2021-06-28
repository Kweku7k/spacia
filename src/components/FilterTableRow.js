import React from 'react'
import bed from '../img/Web/Spacia/bed.png'
import bathtub from '../img/Web/Spacia/bathtub.png'
import { FaEdit, FaEye, FaTimes } from 'react-icons/fa'
import {Row} from 'react-bootstrap'
import '../css/Table.css'

{/* <TableRow info="Some Text" Added='February 20th' Status='Availble' Price='Ghc30'></TableRow> */}

const FilterTableRow = ({image, info, added, status, price, beds, showers, onDelete, onEditProperty, onView}) => {

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
    return (
            <tr onClick={onView} style={{borderBottom:"1px dashed black"}} >
                    <td><img src={image} width={100} alt="demo"/></td>
                    <td style={{width:200}}>
                        <div>
                            <h6 style={{fontSize:'small'}}>
                        {info} 
                            </h6>
                            <br/>
                            <div style={{display:'flex'}}>
                            <img src={bed} style={{ width:20, height:20}} alt="bed"></img>
                            <h6 style={{paddingLeft:20, paddingRight:20}}>{showers}</h6>
                            <img src={bathtub} style={{ width:20, height:20}} alt="bathtub"></img>
                            <h6 style={{paddingLeft:20, paddingRight:20}}>{beds}</h6>
                            </div>
                        </div>
                        </td>
                    <td style={tableCell}>{added}</td>
                    <td style={tableCell}><b>{status}</b></td>
                    <td style={tableCell}><button style={available}>AVAILABLE</button></td>
                    <td style={tableCell}>
                        <div>
                            <b>Ghc {price} / month</b>
                            <br/>
                            <div style={{display:'flex', marginTop:20}}>
                            
                            <div onClick={onView} style={{display:'flex', cursor:'pointer', color:'grey', margin:"auto"}}>
                                {/* <br/> */}
                            <FaEye style={{margin:'auto'}}/><h6 style={{margin:0}}> View</h6>
                            </div>
                            {/* <div onClick={onEditProperty} style={{display:'flex', cursor:'pointer', paddingRight:10, paddingLeft:10,color:'grey'}}>
                                <br/>
                            <FaEdit /><h6>Edit</h6>
                            </div>

                            <div onClick={onDelete} style={{display:'flex', cursor:'pointer', color:'grey'}}>
                                <br/>
                            <FaTimes /><h6>Delete</h6>
                            </div> */}

                            
                            </div>
                        </div>
                    </td>
                </tr>

    )
}

export default FilterTableRow
