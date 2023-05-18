import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';
import Navbar from '../components/Navbar/Navbar';

const Rutas = () => {

    const navbar_items = [

        {
            path:'/',
            name:'Home'
        },

        {
            path:'/category/Zapatos',
            name:'Zapatos'
        },

        {
            path:'/category/Bolsos',
            name:'Bolsos'   
        }

    ];


  return (

    <BrowserRouter>
        <h1 className='text-danger text-center'>DE LA USA</h1>
      <Navbar navbar_items={navbar_items}/>
      <Routes>

        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:id" element= {<ItemDetailContainer/>} />

      </Routes>

    </BrowserRouter>
  )
}

export default Rutas