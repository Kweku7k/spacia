import React from 'react'
import bed from '../img/Web/Spacia/bed.png'
import homeicon from '../img/Web/Spacia/Homedd.png'
import bathtub from '../img/Web/Spacia/bathtub.png'
import view from '../img/Web/Spacia/view.png'
import { FaEdit, FaEye, FaHome, FaPencilAlt, FaRegEye, FaTimes, FaUser } from 'react-icons/fa'
import {Row} from 'react-bootstrap'
import '../css/Table.css'


{/* <TableRow info="Some Text" Added='February 20th' Status='Availble' Price='Ghc30'></TableRow> */}

const TableRow = ({image, info, added, status, price, beds, showers, onDelete, onEditProperty, onView}) => {

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
        paddingTop:12,
        color:'#737373'
    }
    return (
            <tr onClick={() => console.log("open")} style={{borderBottom:"1px dashed black"}} >
                    <td style={{tableCell}}><img src={image} width={100} alt="demo"/></td>
                    <td style={{width:200,verticalAlign:'top',paddingTop:10, color:'#737373'}}>
                        <div>
                            <h6 style={{fontSize:'small'}}>
                        {info} 
                            </h6>
                            <br/>
                            <div style={{display:'flex'}}>
                            {/* <img src={bed} style={{ width:20, height:20}} alt="bed"></img> */}
                            <FaHome color="grey" />
                            <h6 style={{paddingLeft:20, paddingRight:20}}>{showers}</h6>
                            {/* <img src={homeicon}  alt="bathtub"></img> */}
                            <FaUser color="grey"/>
                            <h6 style={{paddingLeft:20, paddingRight:20}}>{beds}</h6>
                            </div>
                        </div>
                        </td>
                    <td style={tableCell}>{added}</td>
                    <td style={{verticalAlign:'top', paddingTop:12, color:'black', fontSize:15}}><b>{status}</b></td>
                    <td style={{verticalAlign:'top',
        paddingTop:17, }}><button style={available}>AVAILABLE</button></td>
                    <td style={{verticalAlign:'top', paddingTop:5}}>
                        <div style={{textAlign:'right'}}>
                            <b>Ghc {price} / month</b>
                            <br/>
                            <br/>
                            {/* <br/> */}


                            <div style={{display:'flex', marginTop:30}}>
                            {/* <FaRegEye/> */}
                            {/* <div onClick={onView} style={{display:'flex', cursor:'pointer', color:'grey', margin:"auto"}}>
                            <div>
                                <img src={{view}} alt="view"/><h6 style={{margin:0}}> View</h6>
                            </div>
                            </div> */}
                            
                            <div onClick={onView} style={{display:'flex', cursor:'pointer', color:'grey', margin:"auto"}}>
                            <FaRegEye color="black" style={{margin:'auto'}}/><h6 style={{margin:0, paddingLeft:5}}> View</h6>
                            </div>

                            {/* <div onClick={onEditProperty} style={{display:'flex', cursor:'pointer', color:'grey', margin:"auto"}}>
                            <FaPencilAlt color="black" style={{margin:'auto'}}/><h6 style={{margin:0, paddingLeft:5}}> Edit</h6>
                            </div> */}
                            
                            <div onClick={onDelete} style={{display:'flex', cursor:'pointer', color:'grey', margin:"auto"}}>
                            <FaTimes color="black" style={{margin:'auto'}}/><h6 style={{margin:0, paddingLeft:5}}> Delete</h6>
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

export default TableRow
