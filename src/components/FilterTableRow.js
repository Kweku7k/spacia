import React from 'react'
import bed from '../img/Web/Spacia/bed.png'
import bathtub from '../img/Web/Spacia/bathtub.png'
import capacityImg from '../img/Web/Spacia/capacity.svg'
import floorSize from '../img/Web/Spacia/floor_size.svg'
import { FaEdit, FaEye, FaTimes } from 'react-icons/fa'
import {Row} from 'react-bootstrap'
import '../css/Table.css'

{/* <TableRow info="Some Text" Added='February 20th' Status='Availble' Price='Ghc30'></TableRow> */}

const FilterTableRow = ({image, info, added, status, price, size, capacity, propertyStatus, onDelete, onEditProperty, onView}) => {

    const available = {
        backgroundColor:'#02BD04', 
        color:'white', 
        border:'none',
        fontWeight:'bold',
        borderRadius: '6px'
    }

    const tableCell = {
        verticalAlign:'top',
        paddingTop:10
    }
    return (
            <tr onClick={onView} style={{borderBottom:"1px dashed black", height: '170px'}} >
                    <td><img src={image} alt="demo" style={{width: '210px', height: '140px', borderRadius: '12px', objectFit:'cover'}}/></td>
                    <td style={{width:270}}>
                        <div style={{paddingLeft: 0}}>
                            <h6 style={{fontSize:'small', fontWeight: 400, letterSpacing: .5}}>
                        {info} 
                            </h6>
                            <br/>
                            <div style={{display:'flex', alignItems: 'flex-end'}}>
                            <img src={floorSize} style={{ width:20, height:20}} alt="Size" />
                            <h6 style={{fontSize: '.8rem', paddingLeft:5, paddingRight:20, marginBottom: '-2px'}}>{`${size} x ${size} ft`}</h6>
                            <img src={capacityImg} style={{ width:16, height:16}} alt="Space capacity" />
                            <h6 style={{fontSize: '.8rem', paddingLeft:5, paddingRight:20, marginBottom: '-2px'}}>{capacity}</h6>
                            </div>
                        </div>
                        </td>
                    <td style={tableCell}>{added}</td>
                    <td style={tableCell}><b>{propertyStatus}</b></td>
                    <td style={tableCell}><button style={available}>{status}</button></td>
                    <td style={tableCell}>
                        <div>
                            <b>{price}</b>
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
