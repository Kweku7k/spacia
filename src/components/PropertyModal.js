import React from 'react'
import {FaLandmark, FaTimes} from 'react-icons/fa'
import {Modal, Row} from 'react-bootstrap'
export const PropertyModal = ({viewModal, closeViewModal, ModalProp, image, home1, imgholder, bed, bath, changeImage, }) => {
    return (
        <>

<Modal show={viewModal} onHide={closeViewModal} size="lg" >
       <div style={{display:'flex', flexDirection:'row-reverse', padding:10}}>
        <FaTimes onClick={closeViewModal} />
       </div>
        <div style={{textAlign:'center', padding:30}}>
            <h6><b>{ModalProp.name}</b></h6>
            <br/>
            <img src={image} alt="img" style={{width:'40%'}}/>
            <div style={fit}>
                <div>
                    <img onClick={changeImage} src={home1} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={home1} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={home1} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={home1} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={home1} style={imgholder} alt="placeholder" />
                </div>
                <div>
                    <img onClick={changeImage} src={home1} style={imgholder} alt="placeholder" />
                </div>
            </div>
            <div>
            <br/>
                <Row style={{paddingLeft:40,paddingRight:40}}>
                    <div className="col" style={{textAlign:'left'}}>
                        <h5 style={{color:'#066875', fontWeight:'bold'}}>FOR SALE <span style={{color:'#393939', fontWeight:'normal'}}>GHC 560,000</span></h5>
                        <h6 style={{fontSize:'small', color:'#2B86FF', marginTop:10}}><FaLandmark /> Ashaley Botwe school junction</h6>
                        
                        <br/>
                        <h6 >
                            <span style={{display:'flex'}}>
                            <b style={{marginRight:20}}>Description</b>
                                <img src={bed} style={{ width:20, height:20, marginRight:10}} alt="bed"/>
                                <h6>{ModalProp.listingDetails.propertySize}</h6>
                                <img src={bath} style={{ width:20, height:20, marginLeft:10, marginRight:10}} alt="bed"/>
                                <h6>{ModalProp.listingDetails.capacity}</h6>
                            </span>
                        </h6>
                    </div>
                    <div className="col" style={{textAlign:'right'}}>
                        {/* <button className="button" style={{width:200}} onClick={closeViewModal} >Add To Cart</button> */}
                        <br/>
                        {/* <h6 style={{fontSize:'small', color:'#2B86FF', marginTop:10}}><FaLandmark /> Ashaley Botwe school junction</h6> */}
                    </div>
                    <br/>
                    <div className="description" style={{padding:10}}>

                <h6 style={{fontSize:'small', textAlign:'left', lineHeight:2 }} className="text-muted">

            {ModalProp.description}
                </h6>

            </div>
                </Row>
            </div>
            
        </div>
       
        </Modal>
        </>
    )
}
