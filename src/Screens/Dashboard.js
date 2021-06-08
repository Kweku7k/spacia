import React from 'react'
import Card from '../components/Card'
import { Container, Row } from 'react-bootstrap'
const Dashboard = () => {
    return (
        <>
           <Container>
               <Row style={{justifyContent:'space-evenly'}}>
                    <Card title="Test One" supportTitle="Testing"/>   
                    <Card title="Test One" supportTitle="Testing"/>   
                    <Card title="Test One" supportTitle="Testing"/>   
                    <Card title="Test One" supportTitle="Testing"/>   
                    <Card title="Test One" supportTitle="Testing"/>   
                    <Card title="Test One" supportTitle="Testing"/>   
               </Row>
            </Container> 
        </>
    )
}

export default Dashboard
