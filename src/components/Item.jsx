import React from 'react';
import {useNavigate} from 'react-router-dom';


const Item = (props) => {

    const {id, titulo, descripcion, imagen} = props
    const navigate = useNavigate ()

  return (
    <div className='card d-flex flex-column w-25 h-25 mx-2'> 
         <img src={imagen} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text">{descripcion}</p>
            <button className="btn btn-primary" onClick={()=>navigate(`/item/${id}`)}>Ver más</button>
        </div>
    </div>
  )
}

export default Item