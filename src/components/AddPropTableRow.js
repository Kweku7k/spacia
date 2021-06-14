import React from 'react'
import bed from '../img/Web/Spacia/bed.png'
import bathtub from '../img/Web/Spacia/bathtub.png'
import {FaMinus, FaPlus} from 'react-icons/fa'
{/* <TableRow info="Some Text" Added='February 20th' Status='Availble' Price='Ghc30'></TableRow> */}

const AddedPropTableRow = ({image, info, added, status, price, beds, showers}) => {

    const inline ={
        display:'flex',
        justifyContent:'space-evenly',
        borderRadius: 5,
        border: '1px solid #ECECEC',
        // padding:5, 
        verticalAlign:'middle'
    }

    const date ={
        border: '1px solid #ECECEC ',
        borderRadius:10,
        width:'fit-content',
        fontSize: 'small'
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

    const sumTotal = 3 * price 
    return (
            <tr style={{borderBottom:"1px dashed black"}} >
                    <td >
                    <div >
                            <input type="checkbox" name="" id="" value="checkedValue" /> 

                    </div>
                    </td>
                    <td><img src={image} width={100} alt="demo"/></td>
                    <td>
                        <div>
                            <h6 style={{fontSize:'small'}}>
                        {info} 
                            </h6>
                            <h6 class="text-muted">Furnished</h6>
                            <h6 style={{fontSize:'small', color:'#F85A47'}}>Remove</h6>
                        </div>
                        </td>
                    <td><h6>
                    <div style={inline}>  
                            <div style={iconLeft} >
                            <FaPlus />
                            </div>
                            <h6 style={{paddingRight:10, paddingLeft:10, paddingTop:5, marginBottom:2 }} >1</h6>
                            <div style={iconRight} >
                            <FaMinus />
                            </div>
                        </div>
                        
                        </h6></td>
                    <td>
                        <div style={date}>
                            12-Jan-2020 15:00
                        </div> 
                        
                    </td>
                    <td><div style={date}>
                            12-Jan-2020 15:00
                        </div></td>
                    <td><b>{price}</b></td>
                    <td>
                        {/* <div>
                            <button class="button">BOOK</button>
                        </div> */}
                        {sumTotal}
                        </td>
                </tr>

    )
}

export default AddedPropTableRow
