import { useState } from 'react';
import { ShowItemsCart } from './ShowItemsCart';

export const Food = ({platos, handleClickAddFood}) => {

    const list = platos.map((plat) => { return (<li key={plat.id}>{plat.comida}<button onClick={() => handleClickAddFood(plat)}>Añadir</button></li>)})

    return (
        <div className="container_menu">
            <section>
                <h2>PRIMEROS PLATOS</h2>
                <article>
                    <ul>
                        {list}
                    </ul>
                </article>
            </section>
        </div>
    )
}



