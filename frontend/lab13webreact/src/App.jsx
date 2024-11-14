import { useState } from 'react'

import ListClientesComponent from './components/ClientesComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddClienteComponent from './components/AddClienteComponent'
import { ListProductosComponent } from './components/ListProductosComponent'
import { AddProductoComponent } from './components/AddProductoComponent'
import { Nanvar } from './components/Nanvar'
import { Footer } from './components/footer'

function App() {
  

  return (
    <  >
      <BrowserRouter>
        <Nanvar />  
        <div className='container'>
               
          <Routes>
            <Route exact path='/' element={<ListClientesComponent />}></Route>
            <Route  path='/clientes' element={<ListClientesComponent />}></Route>
            <Route  path='/add-cliente' element={<AddClienteComponent />}></Route>
            <Route  path='/edit-cliente/:id' element={<AddClienteComponent />}></Route>


            <Route  path='/list-product' element={<ListProductosComponent />}></Route>  
            <Route  path='/add-producto' element={<AddProductoComponent />}></Route>
            <Route  path='/edit-producto/:id' element={<AddProductoComponent />}></Route>
          </Routes>
        </div>

     
        
      </BrowserRouter>
      <Footer />
      
    </ >
  );
  
}

export default App
