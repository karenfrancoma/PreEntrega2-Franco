import React, { Fragment } from "react";
import Item from "./Item";

const ItemListContainer = () => {
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

  return (

  <Fragment>
    <h1>¡Bienvenido!</h1>
    <div className="d-flex">
      {items.map((item) => (
        <Item key={item.id} {...item}/>
      )
      )}
    </div>

  </Fragment>

  )
};

export default ItemListContainer;
