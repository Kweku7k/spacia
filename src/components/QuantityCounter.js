import React ,{useState}from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';


const QuantityCounter = () => {
    const [count, setCount] = useState(1);

    const add = () => {
        setCount(count + 1);
    }
    const subtract = () => {
        setCount(count - 1);
    }

    const inline ={
        display:'flex',
        justifyContent:'space-evenly',
        borderRadius: 5,
        border: '1px solid #ECECEC',
        // padding:5, 
        verticalAlign:'middle'
    }

    const iconLeft ={
        // padding:3
        borderRight: '1px solid #ECECEC',
        paddingRight: 10,
        paddingTop: 4
    }
    const iconRight = {
        // padding:3
        borderLeft: '1px solid #ECECEC',
        paddingLeft: 10,
        paddingTop: 4
    }


    return (
        <>
        <div style={inline}>
                            <div style={iconLeft} >

                            <FaPlus onClick={add} />
                            </div>
                            <h4 style={{paddingRight:10, paddingLeft:10, paddingTop:5, marginBottom:2 }} >{count}</h4>
                            <div style={iconRight} >
                            <FaMinus onClick={subtract} />
                            </div>
                        </div>
        </>
    )
}

export default QuantityCounter
