import React from 'react'
import {Container} from 'react-bootstrap'
import loading from '../img/Web/Spacia/loading.png'
const LoadingPage = () => {

    return (
        <Container >
        <div className="flex" style={{margin:'auto', display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'#FBFBFB;' ,height:'100%', flex:'auto', padding:'20%',  }}>
            <img src={loading} alt="loading"/>
        </div>
     </Container>
    )
}

export default LoadingPage
