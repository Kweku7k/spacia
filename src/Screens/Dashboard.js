import React from 'react'
import Card from '../components/Card'
import { Container, Row } from 'react-bootstrap'
import home from '../img/Web/Spacia/home.png'
import heart from '../img/Web/Spacia/heart.png'
import file from '../img/Web/Spacia/file-upload.png'
import box from '../img/Web/Spacia/box.png'
import star from '../img/Web/Spacia/star.png'
import Header from '../components/Header'
const Dashboard = () => {

    
    return (
        <>
           <Container>
               <Header title="Dashboard" button="Add New Property" />
               <Row style={{justifyContent:'space-evenly'}}>
                    <Card title="Total Properties" Icon={home} supportTitle="75" style={{color:'#02BD04', fontWeight:'bold'}}/>   
                    <Card title="Published Properties" Icon={file} supportTitle="20" style={{color:'#F99500', fontWeight:'bold'}}/>   
                    <Card title="Pending Properties" Icon={box} supportTitle="15" style={{color:'#2B86FF', fontWeight:'bold'}}/>   
                    <Card title="Favourites" Icon={heart} supportTitle="75" style={{color:'#066875', fontWeight:'bold'}}/>   
                    <Card title="Featured Properties" Icon={star} supportTitle="20" style={{color:'#D22129', fontWeight:'bold'}}/>   
                    <Card style={{display:'hidden'}} title="Test One" supportTitle="Testing"/>   
               </Row>
            </Container> 
        </>
    )
}

export default Dashboard
