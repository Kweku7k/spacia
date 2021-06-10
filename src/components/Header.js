import React from 'react'
import Button from './Button'
const Header = ({title, button}) => {
    return (
        <div className="strip header">
            <h4>{title}</h4>
            <Button text={button}  icon="FaTimes"/>
        </div>
    )
}

export default Header
