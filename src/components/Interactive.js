import React from 'react'
import {Row, Container} from 'react-bootstrap'
import InteractiveOption from './ListProperties/InteractiveOption'

const Interactive = ({children}) => {
    return (
        <div className="backCard">
                <Row>
                <div class="col-md-6">
                <Container>

                   {children}
                {/* <h6>{title} </h6>
                <br/>
                <InteractiveOption title="Work" />
                <br/>
                <div className="selectCard">
                    <h6 className="flatText">Stay</h6>
                </div>
                <br/>
                <div className="selectCard">
                    <h6 className="flatText">Concierge</h6>
                </div> */}
                </Container>
                </div>

                </Row>
            </div>
    )
}

export default Interactive
