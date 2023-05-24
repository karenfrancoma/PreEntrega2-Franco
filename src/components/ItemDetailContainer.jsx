import React, { Fragment, useEffect, useState } from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const ItemDetailContainer = () => {

  const navigate = useNavigate()
  const {id} = useParams()

  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(true)

  const items = [
    {
      id: '1',
      titulo: "Nike Blazer",
      descripcion: "Mid 77 Vintage",
      imagen: 'https://theline.cl/img/products/BQ6806-100-2_1024.png',
    },

    {
      id: '2',
      titulo: "Air Jordan 1",
      descripcion: "High 85",
      imagen: 'https://sneakernews.com/wp-content/uploads/2022/10/air-jordan-1-hi-85-black-white-BQ4422-001-7.jpg', 
    },

    {
      id: '3',
      titulo: "tote The Jacquard",
      descripcion: "Marc Jacobs. Negra mediana",
      imagen: 'https://cdn-images.farfetch-contents.com/17/41/03/37/17410337_37438054_600.jpg',
    },

    {
      id: '4',
      titulo: "Satchel K/Signature",
      descripcion: "Karl Langerfeld. Negra",
      imagen: 'https://cdn-images.farfetch-contents.com/18/02/38/94/18023894_39726655_1000.jpg',
    },
  ];

 useEffect(() => {

  const filter = items.find ((item) => item.id === id);
  setItem(filter)
  setLoading(false)

 }, [])
  



  return (

    <Fragment>
      <button className='btn btn-dark m-2' onClick={()=>navigate('/')}>Volver</button>
      <hr/>
      {!item && loading && <h1>Cargando..</h1>}
      {item && !loading && (<div>
        <h1>{item.titulo}</h1>
        <img src={item.imagen} className="card-img-top w-50 h-40" alt="..."/>
        <p>{item.descripcion}</p>
        <p>El id es: {item.id}</p>
      </div>)}
    </Fragment>
  )
}

export default ItemDetailContainer