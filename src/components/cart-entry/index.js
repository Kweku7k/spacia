import React, {useEffect} from 'react';
import {CartEntryStyles} from "./styles";
import home1 from "../../img/homes/home1.jpeg";
import QuantityCounter from "../QuantityCounter";
import {TextField} from "@material-ui/core";

function CartEntry({ price, subTotal, itemInEntry }) {
    useEffect(() => {
        console.log('item in entry:', itemInEntry);
    })

    return (
        <CartEntryStyles>
                <td>
                    <div className='checkbox'>
                        <input type="checkbox"/>
                    </div>
                    <img src={itemInEntry.image} alt={itemInEntry.imageDescription} style={{width: '190px', height: '120px', borderRadius: '12px', objectFit:'cover'}}/></td>
                <td>
                    <p>Private Office</p>
                    <p>Furnished</p>
                    <p>Remove</p>
                </td>
                <td>
                    <QuantityCounter/>
                </td>
                <td className='datetime-picker'>
                    <TextField
                        id="datetime-local"
                        type="datetime-local"
                        defaultValue={new Date()}
                        // className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </td>
                <td className='datetime-picker'>
                    <TextField
                        id="datetime-local"
                        type="datetime-local"
                        defaultValue={new Date()}
                        // className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </td>
                <td><h6>GHS { price }/month</h6></td>
                <td><h6>GHS { subTotal }</h6></td>
        </CartEntryStyles>
    )
}

export default CartEntry
