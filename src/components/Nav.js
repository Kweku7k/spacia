import React from 'react'
import { FaCaretDown, FaBell } from 'react-icons/fa'
import profile from '../img/Web/Spacia/navbar/Mask.png'
import bellIcon from '../img/Web/Spacia/settings/navbar/bell 1.png'
import cartIcon from '../img/Web/Spacia/cart 3.png'
import {Link} from 'react-router-dom'
// /Users/kweku/Documents/Projects/ReactProjects/spacia/src/img/Web/Spacia/settings/navbar/bell.png
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
<div style={{display:"flex", flexDirection:'row-reverse', padding:20, backgroundColor:"#F3F3F3", color:'black' }}>
    {/* <img src={userPicture}  /> */}
    <FaCaretDown style={{marginTop:'auto', marginBottom:'auto'}} />
    <h6 style={{marginTop:'auto'}}>Nana Kweku</h6>
    <img src={profile} alt="img" style={{ width:30, height:30, borderRadius:'50%', marginRight:10 }} />
    <Link to ="/cart">
   <div style={{marginRight:40}}>
    <img src={cartIcon} alt="bell"/>
   </div>
  </Link>
   <div style={{marginRight:40}} >
    <img src={bellIcon} alt="bell"/>
   </div>
</div>

{props.children}
</div>
    )
}

export default Nav
