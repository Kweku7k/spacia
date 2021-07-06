import React, {useState} from 'react'
import Header from '../components/Header'
import { Container, Tabs, Tab } from 'react-bootstrap';

const ListPropertyForm = () => {
    const [key, setKey] = useState('home');
    return (
        <div>
            <Header title="List a Property"/>

            <Container>
            <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
   
          <Tab eventKey="home" title="Home">
              <br/>
            <Container>
            <h5><b>Property Description</b></h5>

            <div class="form-group">
              <label for="">Property Tile</label>
              <input type="text"
                class="form-control" name="" id="" aria-describedby="helpId" placeholder=""/>
              <small id="helpId" class="form-text text-muted">Help text</small>
            </div>
            </Container>
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <p>this is profile tab</p>
          </Tab>
          <Tab eventKey="setting" title="Setting">
            <p>this is setting tab</p>
          </Tab>
       
        </Tabs>
            </Container>
        </div>
    )
}

export default ListPropertyForm
