import React from 'react'
import { FaCaretDown } from 'react-icons/fa'



const Nav = (props) => {

    const username = "Nana Kweku" 
    // const userPicture = "Nana Kweku"

    return (
        // <div style={{display:"flex", flexDirection:'row-reverse', padding:10, backgroundColor:"grey", color:'white' }}>
        //     {/* <img src={userPicture}  /> */}
        //     <FaCaretDown />
        //     <h6>{username}</h6>
        //     <div style={{ width:30, height:30, backgroundColor:'green', borderRadius:'50%', marginRight:10 }}></div>
        // </div>

<div className="col-md-10" style={{ justifyContent:"space-between", padding:0}}>
<div style={{display:"flex", flexDirection:'row-reverse', padding:20, backgroundColor:"grey", color:'white' }}>
    {/* <img src={userPicture}  /> */}
    <FaCaretDown />
    <h6>Kpo</h6>
    <div style={{ width:30, height:30, backgroundColor:'green', borderRadius:'50%', marginRight:10 }}></div>
</div>

{props.children}
</div>
    )
}

export default Nav
