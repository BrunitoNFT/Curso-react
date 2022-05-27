import './App.css'
import Header from "./Components/Header";
import Formulario from './Components/Form';
import ListadoPacientes from './Components/ListadoPacientes';
import { useState } from 'react';

function App() {

  const [almacen, setAlmacen]= useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header/>
      <div className='mt-14 md:flex p-5'>
        <Formulario
        almacen={almacen}
        setAlmacen={setAlmacen}
        />
        <ListadoPacientes
        almacen={almacen}
        />
      </div>
    </div>
  )
}

export default App
