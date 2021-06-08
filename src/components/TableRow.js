import React from 'react'

{/* <TableRow info="Some Text" Added='February 20th' Status='Availble' Price='Ghc30'></TableRow> */}

const TableRow = ({image, info, added, status, price}) => {
    return (
            <tr style={{borderBottom:"1px dashed black"}} >
                    <td><img src={image} width={100} alt="demo"/></td>
                    <td style={{width:200}}>
                        <div>
                            <h6>
                        {info} 
                            </h6>
                            <div style={{display:'flex', justifyContent:'space-evenly'}}>
                            <div style={{backgroundColor:'green', width:20, height:20}}></div>
                            <h4>3</h4>
                            <div style={{backgroundColor:'green', width:20, height:20}}></div>
                            <h4>3</h4>
                            </div>
                        </div>
                        </td>
                    <td>{added}</td>
                    <td><b>{status}</b></td>
                    <td><button className="btn" style={{backgroundColor:'#02BD04', color:'white', fontWeight:'bold'}}>AVAILABLE</button></td>
                    <td><b>{price}</b></td>
                </tr>

    )
}

export default TableRow
