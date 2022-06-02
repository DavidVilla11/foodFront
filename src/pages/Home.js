import './Home.css'
import { Autocomplete } from '@react-google-maps/api'
import { useState, useRef } from 'react'

export const Home = () => {
    const [error, setError] = useState(false)
    
    const originAdress = useRef()
    const number = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(originAdress.current.value === '' || number.current.value === ''){
            console.log('Hay que rellenar ambos campos')
            setError(true) 
            return
        }
        console.log(originAdress.current.value + ' ' + number.current.value)
        originAdress.current.value = ''
        number.current.value = ''
        setError(false) 
    }

    return (
        <div className='imagen'>
            <div className='blanco'>
                <h2 className='a'>Ponga su dirección para iniciar el pedido:</h2>
                <form onSubmit={handleSubmit}>
                    <Autocomplete>
                        <input type='text' id='adress' placeholder='Ponga aquí su dirección...' ref={originAdress} ></input>
                    </Autocomplete>
                        <input className='num' type='text' id='numero' placeholder='Nº' ref={number} ></input>
                    <button className='button-24'>Buscar restaurantes</button>
                    <span className='errorFields' style={{ display: error ? "block" : "none" }}>Hay que rellenar todos los campos.</span>
                </form>
            </div>
        </div>
    )
}