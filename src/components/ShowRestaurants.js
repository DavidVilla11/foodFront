import React from 'react'
import './Card.css'
import {Card} from './Card.js'

export default function ShowRestaurants ({ restaurantes, handleClickAdd }) {
  if (!restaurantes || restaurantes.length === 0) return null

  return (
    <div className='cards_grid'>
      {restaurantes.map(rest => (
        <Card key={rest.id} img={rest.imagen_rest} 
        title={rest.titulo} description={rest.description} platos={rest.platos} handleClickAdd={handleClickAdd}/>
      ))}
    </div>
  )
}