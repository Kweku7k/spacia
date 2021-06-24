import React from 'react'
import { Row, Col , Form, Image, Container} from "react-bootstrap";
import VisaMC from "../../img/Web/Spacia/settings/payment/visa_mastercard_logo.png";

const Checkout = () => {
    //Checkout Form Function
    const checkoutForm = () => {
        return(
            <Form>
                <h5>Credit Card Information:</h5>
                
                <br/>
                
                <h6>Name on Card:</h6>
                <Form.Control style={formMargin} type="text" placeholder="Name" />

                <Row style={formMargin}>
                    <h6>Card Number:</h6>
                    <Col xs={8}>
                        <Form.Control type="number" placeholder="Card Number" />
                    </Col>
                    <Col xs={4}>
                    <Image src={VisaMC} fluid/>
                    </Col>
                </Row>

                <h6>Expiration Date</h6>
                <Row style={formMargin}>
                    <Col xl={4}>
                        <Form.Control type="number" placeholder="MM" />
                    </Col>
                    <Col xl={4}>
                        <Form.Control type="number" placeholder="YYYYY" />
                    </Col>
                </Row>

                <Row>
                    <Col xs={4}>
                        <Form.Control type="text" placeholder="CCV" />
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={3}>
                        <h6>or</h6>
                    </Col>
                </Row>
                
                <Row>
                    <Col xs={5}>
                        <div style={{ backgroundColor: '#ffcb05', padding: '3px', display: 'flex', justifyContent:'center', alignItems: 'center' }}>
                            <h6>Momo</h6>
                        </div>
                    </Col>
                </Row>
                
                <h6>Name on Momo Account:</h6>
                <Form.Control style={formMargin} type="text" placeholder="Name" />
                
                <h6>Phone Number:</h6>
                <Form.Control type="number" placeholder="Phone Number" />

            </Form>
        )
    }

    //Order Summary Form function
    const orderForm = () => {
        return (
            <>
                <div style={{ padding:'1em', display: 'flex', height: '0%', flexDirection: 'column' }}>
                <h5>Order Summary:</h5>
                    <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <h6>Private Office</h6>
                        <h6>Total: GHS 500</h6>
                    </div>
                    <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <h6>Dedicated/Hot Desk</h6>
                        <h6>Total: GHS 400</h6>
                    </div>
                    <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <h6>Meeting & Avenue</h6>
                        <h6>Total: GHS 250</h6>
                    </div>
                    <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <h6>Meeting & Avenue</h6>
                        <h6>Total: GHS 600</h6>
                    </div>
                </div>

                <div style={{ padding:'2em', display:'flex', height: '100%', alignItems:'flex-end' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                        <div>
                            <hr/>
                            <h6>Total: GHS 1750</h6>
                        </div>    
                    </div>
                </div>
            </>
        )
    }

    //form margin 
    const formMargin = {
        marginBottom: '0.5em'
    }

    return (
        
        <Container fluid> 
            <div className="header">
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <h4>Checkout</h4>         
                </div>
            </div>

            <Row>
            </Row>      
            <Row>
                {/* <Col m2={2}>
                </Col> */}
            <Col md={12} >
                <Row>
                    <Col md={6} style={{ backgroundColor: 'white', padding: '0px'  }}>
                        <div style={{ padding:'2em', border:'solid', borderWidth: '1px', borderRadius: '5px', }}>
                            { checkoutForm() }
                        </div>
                    </Col>
                    
                    <Col md={1}></Col>


                    <Col md={5} style={{ backgroundColor: 'white', padding: '1em', border:'solid', borderWidth: '1px', borderRadius: '5px' }}>
                        {/* <h5>Order Summary:</h5> */}
                        {/* <div style={{ padding:'2em', display:'flex', height: '100%', alignItems:'flex-end' }}> */}
                            { orderForm() }
                        {/* </div> */}
                    </Col>
                </Row>
            </Col>
        </Row>
        </Container>
    )
}

export default Checkout
