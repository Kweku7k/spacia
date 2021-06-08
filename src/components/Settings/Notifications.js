import React, {Component} from 'react'
import Switch from "react-switch";

// class SwitchExample extends Component {
//     constructor() {
//       super();
//       this.state = { checked: false };
//       this.handleChange = this.handleChange.bind(this);
//     }
  
//     handleChange(checked) {
//       this.setState({ checked });
//     }
// }


const Notifications = (props) => {
    return (
        <>
            <div className="strip">
            <h4>Manage your Notifications</h4>
            </div>
      <div className="strip" style={{justifyContent:'normal', margin:'auto'}}>
        <h6 style={{margin:'auto 0', marginRight:10}}>Kpo</h6>
        <Switch/>
      </div>

            <h6>Recieve email notifications</h6>
            <h6>Recieve SMS notifications</h6>
            <h6>Recieve portal notifications</h6>

            <button className="button">Save</button>
        </>
    )
}

export default Notifications
