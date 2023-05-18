import React, { Fragment, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

  const navigate = useNavigate()
  const {id} = useParams()

  const [item, setItem] = useState({})

  

  const items = [
    {
      id: 1,
      titulo: "Nike Blazer",
      descripcion: "Mid 77 Vintage",
    },

    {
      id: 2,
      titulo: "Air Jordan 1",
      descripcion: "High 85",
    },

    {
      id: 3,
      titulo: "tote The Jacquard",
      descripcion: "Marc Jacobs. Negra mediana",
    },

    {
      id: 4,
      titulo: "Satchel K/Signature",
      descripcion: "Karl Langerfeld. Negra",
    },
  ];

  return (

    <Fragment>
      <button className='btn btn-warning' onClick={()=>navigate('/')}>Volver</button>
      <hr/>
      <div>
        <h1>{item.titulo}</h1>
        <p>{item.descripcion}</p>
        <p>El id es: {item.id}</p>
      </div>
    </Fragment>
  )
}

export default ItemDetailContainer