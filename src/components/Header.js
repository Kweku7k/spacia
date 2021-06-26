import React from 'react'
import Button from './Button'
const Header = ({title, button}) => {
    return (
        <div className="strip header">
            <h4><b>{title}</b></h4>
        </div>
    )
}

export default Header
