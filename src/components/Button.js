import React from 'react'
import { FaPlus, FaTimes } from 'react-icons/fa'

const Button = ({text, icon}) => {
    return (
        <div>
            <button className="button"> {text}</button>
        </div>
    )
}

export default Button
