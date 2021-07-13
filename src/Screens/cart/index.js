import React, {useEffect, useState} from 'react';
import { CartStyles } from "./styles";
import home1 from '../../img/homes/home1.jpeg'
import QuantityCounter from "../../components/QuantityCounter";
import {TextField} from "@material-ui/core";
import CartEntry from "../../components/cart-entry";
import { useSelector } from "react-redux";
import {useCalendarState} from "@material-ui/lab/CalendarPicker/useCalendarState";

function Cart() {
    const [entries, setEntries] = useState([]);
    const allEntries = useSelector(state => state.dashboard.entries);

    useEffect(() => {
        console.log('all entries:', allEntries);
        setEntries(allEntries);
    }, []);

    return (
        <CartStyles>
            <table>
                <thead>
                <tr>
                    <th />
                    <th scope='col' className='space-type'>Type of Space</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col' className='datetime'>From</th>
                    <th scope='col' className='datetime'>To</th>
                    <th scope='col'>Price</th>
                    <th scope='col'>Subtotal</th>
                </tr>
                </thead>
                <tbody>
                {
                    entries &&
                        entries.map(entry => <CartEntry key={entry.entryId} {...entry}/>)
                }
                </tbody>
            </table>
        </CartStyles>
    )
}

export default Cart
