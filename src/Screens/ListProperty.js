import React from 'react'
import {Container, Row} from 'react-bootstrap'
import Header from '../components/Header'
const ListProperty = () => {

    const card = {
        width:'100%',
        height:'70vh',
        backgroundColor:'white',
        paddingTop:'10vh'
    }

    const selectCard = {
        backgroundColor:'#F1F1F1',
        padding:20,
        borderRadius:5
        // width:''
    }


    const text = {
        marginLeft:40,
        marginBottom:0
    }
    return (
        <>
            <Header title="Dashboard" />
            <Container>

            <div style={card}>
                <Row>
                <div class="col-md-6">
                <Container>
                <h6>What type of Property would you like to visit </h6>
                <br/>
                <div className="selectCard">
                    <h6 style={text}>Work</h6>
                </div>
                <br/>
                <div className="selectCard">
                    <h6 style={text}>Stay</h6>
                </div>
                <br/>
                <div className="selectCard">
                    <h6 style={text}>Concierge</h6>
                </div>
                </Container>
                </div>

                </Row>
            </div>
            </Container>

        </>
    )
}

export default ListProperty
