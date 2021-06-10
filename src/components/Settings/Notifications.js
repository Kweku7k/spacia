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
        <h6 style={{margin:'auto 0', marginRight:10}}>Recieve email notifications</h6>
        <Switch/>
      </div>
      <br />

      <div className="strip" style={{justifyContent:'normal', margin:'auto'}}>
        <h6 style={{margin:'auto 0', marginRight:10}}>Recieve SMS notifications</h6>
        <Switch/>
      </div>
      <br />
      <div className="strip" style={{justifyContent:'normal', margin:'auto'}}>
        <h6 style={{margin:'auto 0', marginRight:10}}>Recieve portal notifications</h6>
        <Switch/>
      </div>



            <button className="button">Save</button>
        </>
    )
}

export default Notifications
