import {useState} from 'react'
import './Cart.css';

export const Cart = ({comida, handleOnClick}) => {
    console.log(comida)
    return (
        <section className='display'>
            <article className='producto'>
                <h4>{comida}</h4>
                <input type='number' defaultValue={1} min="0"></input>
                <a onClick={handleOnClick}>🗑</a>
            </article>
        </section>
    )
}