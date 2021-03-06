import React from 'react'

const Paciente = ({almacen}) => {
    console.log(almacen)
  return (
      <div className='mt-10 w-full bg-white ml-5 py-10 px-5 rounded-xl shadow-xl'>
          <p className='font-bold mb-3 text-grey-700 uppercase'>Nombre:{" "}
              <span className='font-normal normal-case'>{almacen.nombre}</span>
          </p>
          <p className='font-bold mb-3 text-grey-700 uppercase'>Propietario:{" "}
              <span className='font-normal normal-case'>{almacen.propietario}</span>
          </p>
          <p className='font-bold mb-3 text-grey-700 uppercase'>Email:{" "}
              <span className='font-normal normal-case'>{almacen.email}</span>
          </p>
          <p className='font-bold mb-3 text-grey-700 uppercase'>Fecha de ALTA:{" "}
              <span className='font-normal normal-case'>{almacen.fecha}</span>
          </p>
          <p className='font-bold mb-3 text-grey-700 uppercase w-full '>Sintomas:{" "}
              <span className='font-normal normal-case'>
              {almacen.sintomas}
              </span>
          </p>
          <div className='flex justify-between mt-6 mx-8'>
            <button className="bg-indigo-600 uppercase p-2 text-white font-bold rounded-lg hover:bg-indigo-900 duration-300"
            /* onClick={} */
            >editar</button>
            <button className="bg-red-600 uppercase p-2 text-white font-bold rounded-lg hover:bg-red-900 duration-300">eliminar</button>

          </div>
      </div>
  )
}

export default Paciente