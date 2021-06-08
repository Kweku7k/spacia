import React from 'react'
import Button from './Button'
const Header = ({title}) => {
    return (
        <div className="strip header">
            <h4>{title}</h4>
            <Button text="Hahah"  icon="FaTimes"/>
        </div>
    )
}

export default Header
