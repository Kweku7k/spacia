import React from 'react'

const PaymentTableRow = ({date, bank, account, status}) => {

    const failed = {
        backgroundColor:'#F3D5D1', 
        color:'#F85A47', 
        border:'none',
        fontWeight:'bold', 
        borderRadius:5, 
        paddingTop:4, 
        paddingBottom:4, 
        paddingLeft:20, 
        paddingRight:20
    }
    return (
        <>
        <tr>
            <td>{date}</td>            
            <td><div> <img src={bank} style={{marginRight:10}} alt="User"/>{account}</div></td>
            <td><button className="user-admin" style={failed} >{status}</button></td>
        </tr>
        </>
    )
}

export default PaymentTableRow
