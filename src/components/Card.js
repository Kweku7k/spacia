import React from 'react'

// import logo from '../img/logo.png'
const Card = ({title, supportTitle, userimage, Icon, style}) => {

    const support = {
        fontWeight:'bold'
    }
    return (
        <div className="stripCard col-md-3" style={{padding:20, boxShadow: "0px 4px 17px #F2F2F2",backgroundColor:'white', border:'none'}}>
            {/* <img alt="icon" style={{ width:50, height:50, backgroundColor:"red", borderRadius:"50%", marginRight:10 }} src={require(`../assets/imgs/people/${this.Icon.toLowerCase()}.png`)}/> */}
            {/* <img alt="icon" style={{ width:50, height:50, backgroundColor:"red", borderRadius:"50%", marginRight:10 }} src={require({Icon})}/> */}
            <img alt="icon" src={Icon} style={{ width:50, height:50, marginRight:10 }}/>
            <div className="Text">
                <h6 style={{marginBottom:0, fontWeight:'bold'}}>{title}</h6>
                <h4 style={style}>{supportTitle}</h4>
            </div>
        </div>
    )
}

export default Card
