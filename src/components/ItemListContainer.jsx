import React, { Fragment } from "react";
import Item from "./Item";

const ItemListContainer = () => {
  const items = [
    {
      id: '1',
      titulo: "Nike Blazer",
      descripcion: "Mid 77 Vintage",
    },

    {
      id: '2',
      titulo: "Air Jordan 1",
      descripcion: "High 85",
    },

    {
      id: '3',
      titulo: "tote The Jacquard",
      descripcion: "Marc Jacobs. Negra mediana",
    },

    {
      id: '4',
      titulo: "Satchel K/Signature",
      descripcion: "Karl Langerfeld. Negra",
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
