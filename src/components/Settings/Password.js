import React from 'react'

const Password = () => {
    return (
        <div>
            <h4>Manage your password</h4>

            <div class="form-group">
              <label for="">Current Password</label>
              <input type="password" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="" />
            </div>

            <br/>
            <div class="form-group">
              <label for="">New Password</label>
              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Type your password" />
              {/* <small id="emailHelpId" class="form-text text-muted">Help text</small> */}
            </div>
            <br/>
            <div class="form-group">
              <label for="">Confirm Password</label>
              <input type="email" class="form-control" name="" id="" aria-describedby="emailHelpId" placeholder="Retype your password" />
              {/* <small id="emailHelpId" class="form-text text-muted">Help text</small> */}
            </div>
            <br/>
            <button className="button">Reset My Password</button>
        </div>
    )
}

export default Password
