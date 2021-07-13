import React ,{useState}from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa';


const QuantityCounter = () => {
    const [count, setCount] = useState(1);

    const add = () => {
        setCount(prevState => prevState + 1);
    }
    const subtract = () => {
        setCount(prevState => {
            if (prevState === 0) {
                return prevState;
            }
            return prevState - 1
        });
    }

    const inline ={
        display:'flex',
        justifyContent:'space-evenly',
        borderRadius: 5,
        border: '1px solid #ECECEC',
        width: '100px',
        // padding:5, 
        verticalAlign:'middle'
    }

    const iconLeft ={
        // padding:3
        borderRight: '1px solid #ECECEC',
        padding: 10,
        cursor: 'pointer'
        // paddingTop: 4
    }
    const iconRight = {
        // padding:3
        borderLeft: '1px solid #ECECEC',
        padding: 10,
        cursor: 'pointer'
        // paddingTop: 4
    }


    return (
        <>
        <div style={inline}>
            <div style={iconLeft} onClick={subtract} >
            <FaMinus size={7} />
            </div>
            {/*<h6 style={{paddingRight:10, paddingLeft:10, paddingTop:13, marginBottom:2, fontSize:16 }} >{count}</h6>*/}
            <input type="text" style={{ width: '35px', textAlign: 'center', background: 'white', border: 'none', outline: 'none' }}
                value={count} onChange={(e) => setCount(Number(e.target.value))}/>
            <div style={iconRight} onClick={add}>
            <FaPlus size={7} />
            </div>
        </div>
        </>
    )
}

export default QuantityCounter
