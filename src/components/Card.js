import React from 'react'

// import logo from '../img/logo.png'
const Card = ({title, supportTitle, userimage, Icon}) => {
    return (
        <div className="stripCard col-md-3" style={{padding:20}}>
            {/* <img alt="icon" style={{ width:50, height:50, backgroundColor:"red", borderRadius:"50%", marginRight:10 }} src={require(`../assets/imgs/people/${this.Icon.toLowerCase()}.png`)}/> */}
            {/* <img alt="icon" style={{ width:50, height:50, backgroundColor:"red", borderRadius:"50%", marginRight:10 }} src={require({Icon})}/> */}
            <img alt="icon" style={{ width:50, height:50, backgroundColor:"red", borderRadius:"50%", marginRight:10 }}/>
            <div className="Text">
                <h6 style={{marginBottom:0}}>{title}</h6>
                <h4>{supportTitle}</h4>
            </div>
        </div>
    )
}

export default Card
