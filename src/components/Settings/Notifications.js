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
    const switchItem = {
        marginLeft: 10,
        margin:'auto 0', 
        marginRight:50
    }
    return (
        <>
            <div className="strip">
            <h4>Manage your Notifications</h4>
            </div>

      <div className="strip" style={{justifyContent:'normal', margin:'auto'}}>
        <h6 style={switchItem}>Recieve email notifications</h6>
        <Switch/>
      </div>
      <br />

      <div className="strip" style={{justifyContent:'normal', margin:'auto'}}>
        <h6 style={switchItem}>Recieve SMS notifications</h6>
        <Switch/>
      </div>
      <br />
      <div className="strip" style={{justifyContent:'normal', margin:'auto'}}>
        <h6 style={switchItem}>Recieve portal notifications</h6>
        <Switch/>
      </div>


<br/>
<br/>
            <button className="button" style={{paddingLeft:50, paddingRight:50}} >Save</button>
        </>
    )
}

export default Notifications
