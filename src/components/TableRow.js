import React from 'react'
import bed from '../img/Web/Spacia/bed.png'
import bathtub from '../img/Web/Spacia/bathtub.png'
import { FaEdit, FaTimes } from 'react-icons/fa'
import {Row} from 'react-bootstrap'

{/* <TableRow info="Some Text" Added='February 20th' Status='Availble' Price='Ghc30'></TableRow> */}

const TableRow = ({image, info, added, status, price, beds, showers, onDelete, onEditProperty}) => {

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
    return (
            <tr style={{borderBottom:"1px dashed black"}} >
                    <td><img src={image} width={100} alt="demo"/></td>
                    <td style={{width:200}}>
                        <div>
                            <h6 style={{fontSize:'small'}}>
                        {info} 
                            </h6>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                            <img src={bed} style={{ width:20, height:20}} alt="bed"></img>
                            <h6>{showers}</h6>
                            <img src={bathtub} style={{ width:20, height:20}} alt="bathtub"></img>
                            <h6>{beds}</h6>
                            </div>
                        </div>
                        </td>
                    <td>{added}</td>
                    <td><b>{status}</b></td>
                    <td><button style={available}>AVAILABLE</button></td>
                    <td>
                        <div>
                            <b>{price}</b>
                            <br/>
                            <div style={{display:'flex', marginTop:20}}>
                            <div onClick={onEditProperty} style={{display:'flex', cursor:'pointer', paddingRight:10, color:'grey'}}>
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

export default TableRow
