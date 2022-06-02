import {Cart} from './Cart.js'

export const ShowItemsCart = ({cart, handleClick}) => {
    console.log('show', {cart})
    if(cart.length === 0){
        return (
            <div className='carrito'>
                <h2>No hay productos</h2>
            </div>
        )
    }


    return (
        <div className='carrito'>
            {cart.map((rest) => (
                <Cart key={Math.random()} comida={rest.comida}
                handleOnClick={() => handleClick(rest)}>
                </Cart>
                    ))
            }
        </div>
    )
}

