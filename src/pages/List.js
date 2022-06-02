import { useState } from 'react';
import {Card} from  '../components/Card.js'
import {Cart} from '../components/Cart.js'
import {ShowItemsCart} from '../components/ShowItemsCart.js'
import ShowRestaurants from '../components/ShowRestaurants.js';
import './List.css'

const RESTAURANTS = [
    {
        id: 1,
        imagen_rest: 'https://s1.eestatic.com/2019/01/16/cocinillas/cocinillas_368976192_116651848_1024x576.jpg',
        titulo: 'Veggie foodie',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        platos: [{id: 1, comida :'Gazpacho'}]
    },
    {
        id: 2,
        imagen_rest: 'https://s1.eestatic.com/2019/01/16/cocinillas/cocinillas_368976192_116651848_1024x576.jpg',
        titulo: 'Pocho foodie',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        platos: [{id: 1, comida: 'Ensalada'}]
    },
    {
        id: 3,
        imagen_rest: 'https://s1.eestatic.com/2019/01/16/cocinillas/cocinillas_368976192_116651848_1024x576.jpg',
        titulo: 'Pocho foodie',
        description: 'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        platos: [{id: 1, comida: 'Cachopo'},
                {id: 2, comida: 'Tortilla'}]
    }
]

export const List = () => {
    const [cart, setCart] = useState([])

    const removeItem = (productToRemove) => {
        setCart(cart.filter((product) => product !== productToRemove))
    }

    const addToCart = (product) => {
        const { id } = product
        const productInCart = cart[id]
        console.log(productInCart)

        if(productInCart){
            setCart([...cart, {...product, quantity: productInCart.quantity + 1}])
        }else setCart([...cart, {...product, quantity: 1}])
    }

    return (
        <>
        <section className='container'>

            <ShowRestaurants restaurantes={RESTAURANTS} handleClickAdd={addToCart}></ShowRestaurants>
            <ShowItemsCart cart={cart} handleClick={removeItem}></ShowItemsCart>
            
        </section>
        </>
    )
}