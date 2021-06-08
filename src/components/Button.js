import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Button = ({text, icon}) => {
    return (
        <div>
            <button className="button"> <FaTimes /> {text}</button>
        </div>
    )
}

export default Button
