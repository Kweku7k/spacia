import React from 'react'
import {Container} from 'react-bootstrap'
import loading from '../img/Web/Spacia/loading.png'
import users from '../img/Web/Spacia/users.png'
const NoData = () => {

    return (
        <Container >
        <div className="flex" style={{margin:'auto', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#FBFBFB;' ,height:'100%', flex:'auto', padding:'20%',  }}>
            <div style={{textAlign:'center'}}>
            <img src={users} alt="loading"/>
            <h6>No Data to show yet. Add new driver and manage.</h6>
            <a href="#">Add a new driver</a>
            </div>
        </div>
     </Container>
    )
}

export default NoData
