import React from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Index = () => {
    return (
        <Container style={{ padding: '4em' }}>
            <h4>List a Property</h4>
            <Row style={{ padding: '5em', backgroundColor: 'white' }}>
                <Col sm={6}>
                    <p>What type of properties would you like to list</p>
                    <Row>
                        <span style={{ padding: '1.5em', backgroundColor: '#f1f1f1' }}>Appartment</span>
                    </Row>
                    <br/>
                    <Row>
                        <span style={{ padding: '1.5em', backgroundColor: '#f1f1f1' }}>Office Building</span>
                    </Row>
                    <br/>
                    <Row>
                        <Col lg={4}>
                            <div style={{ padding:'10px' }}>
                                <Button style={{width:'100%', backgroundColor: '#f85a47', borderRadius: '0.3em', textAlign:'center'}}>Continue</Button>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={6}>
                   
                </Col>
            </Row>
        </Container>
    )
}

export default Index
