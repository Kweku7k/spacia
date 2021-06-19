import React from 'react'
import { Row, Col , Form, Image, Container} from "react-bootstrap";
import VisaMC from "../../img/Web/Spacia/settings/payment/visa_mastercard_logo.png";

const Checkout = () => {
    const checkoutForm = () => {
        return(
            <Form>
                <h5>Credit Card Information:</h5>
                
                <br/>

                <h6>Name on Card:</h6>
                <Form.Control type="text" placeholder="Name" />

                <br/>

                <Row>
                    <h6>Card Number:</h6>
                    <Col xs={8}>
                        <Form.Control type="number" placeholder="Card Number" />
                    </Col>
                    {/* <Col xs={2}>Visa</Col>
                    <Col xs={2}>MC</Col> */}
                    <Col xs={4}>
                    <Image src={VisaMC} fluid/>
                    </Col>
                </Row>

                <br/>
                
                <h6>Expiration Date</h6>
                <Row>
                    <Col xl={4}>
                        <Form.Control type="number" placeholder="MM" />
                    </Col>
                    <Col xl={4}>
                        <Form.Control type="number" placeholder="YYYYY" />
                    </Col>
                </Row>

                <br/>

                <Row>
                    <Col xs={4}>
                        <Form.Control type="text" placeholder="CCV" />
                    </Col>
                </Row>
                
                <br/>

                <Row>
                    <Col xs={3}>
                        <h6>or</h6>
                    </Col>
                </Row>
                
                <br/>

                <Row>
                    <Col xs={5}>
                        <div style={{ backgroundColor: '#ffcb05', padding: '3px', display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                            <h6>Momo</h6>
                        </div>
                    </Col>
                </Row>
                
                <br/>

                <h6>Name on Momo Account:</h6>
                <Form.Control type="text" placeholder="Name" />
                
                <br/>

                <h6>Phone Number:</h6>
                <Form.Control type="number" placeholder="Phone Number" />

            </Form>
        )
    }

    const orderForm = () => {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                <div>
                    <hr/>
                    <h6>Total: GHS 1750</h6>
                </div>    
            </div>
        )
    }

    return (
        
        <Container>       
            <Row>
            <Col md={2} style={{ border: '3px' }}>
                <h4>Checkout</h4>   
            </Col>
            <Col md={10} >
                <Row>
                    <Col md={5} style={{ backgroundColor: 'white', padding: '0px'  }}>
                        <div style={{ padding:'2em', border:'solid', borderWidth: '1px', borderRadius: '5px' }}>
                            { checkoutForm() }
                        </div>
                    </Col>
                    
                    <Col md={1}></Col>


                    <Col md={5} style={{ backgroundColor: 'white', padding: '1em', border:'solid', borderWidth: '1px', borderRadius: '5px' }}>
                        <h5>Order Summary:</h5>
                        <div style={{ padding:'2em', display:'flex', height: '100%', alignItems:'flex-end' }}>
                            { orderForm() }
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container>
    )
}

export default Checkout
