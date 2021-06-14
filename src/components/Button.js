import React from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'

const Button = ({text, icon}) => {
    return (
        <div>
            <button className="button"> <FaPlus /> {text}</button>
        </div>
    )
}

export default Button
