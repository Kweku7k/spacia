import React from 'react'
import {Modal} from 'react-bootstrap'

const cModal = ({body, onSubmit, onHide, onDecline, onShow}) => {
    return (
        <>
            
<Modal show={onShow} onHide={onHide}>
<div>
    {body}
</div>
<div>

<button onClick={onDecline} className="button-calm">Cancel</button>
<button onClick={onSubmit} className="button">Save</button>
</div>
</Modal>
        </>
    )
}

export default cModal
