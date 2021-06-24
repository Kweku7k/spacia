import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab, Modal, Row, Button, Col, Form, Card, Container} from "react-bootstrap";

import Index from "../Properties/Index";

const Description = () => {
    return (
        <Container>
        <Row>
            <Col>
                <Tabs defaultActiveKey="Home" 
                      id="controlled-tab-example">
                    <Tab eventKey="home" title="Home">
                        < Index/>
                    </Tab>
                    <Tab eventKey="profile" title="Profile">
                        <Index />
                    </Tab>
                    <Tab eventKey="contact" title="Contact" disabled>
                        <Index />
                    </Tab>
                </Tabs>
            </Col>
        </Row>
    </Container>
    )
}

export default Description
