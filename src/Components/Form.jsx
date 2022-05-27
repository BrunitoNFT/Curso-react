import { useState, useEffect } from "react"
import Error from "./Error"
import Exito from "./Exito"

const Formulario = ({almacen,setAlmacen}) =>{
    const [nombre, setNombre] = useState("")
    const [propietario, setPropietario] = useState("")
    const [email, setEmail] = useState("")
    const [fecha, setFecha] = useState("")
    const [sintomas, setSintomas] = useState("")
    const [error, setError] = useState(2)

    const reiniciar = ()=>{
            const orden ={
                nombre,
                propietario,
                email,
                fecha,
                sintomas
            }
            setAlmacen([...almacen,orden])
            setNombre(""),
            setPropietario(""),
            setEmail(""),
            setFecha(""),
            setSintomas(""),
            setError(1)
    }

    const guardar = (e)=>{
        e.preventDefault()
        if ([nombre,propietario,email,fecha,sintomas].includes("")){{setError(0)}}else{reiniciar()}
    }




    return(
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">
                Seguimientos Pacientes
            </h2>

            <p className="text-xl mt-5 text-center mb-10 ">
                Añade Pacientes y {""}
                <span className=" text-indigo-600 font-bold ">
                    Administralos
                </span>
            </p>
            <form 
            className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10"
            onSubmit={e => guardar(e)}>
                <div className="mb-5">
                {error==0 ? <Error></Error> :error==1?<Exito></Exito>:<div></div>}
                    <label
                    className="block text-grey-700 uppercase font-bold"
                    htmlFor="mascota"
                    >
                        Nombre Mascota
                    </label>
                    <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                    className="block text-grey-700 uppercase font-bold"
                    htmlFor="propietario"
                    >
                        Nombre Propetario
                    </label>
                    <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre del Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                    className="block text-grey-700 uppercase font-bold"
                    htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                    id="email"
                    type="email"
                    placeholder="Email Contacto Propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                    className="block text-grey-700 uppercase font-bold"
                    htmlFor="fecha"
                    >
                        Fecha
                    </label>
                    <input
                    id="fecha"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label 
                    className="block text-grey-700 uppercase font-bold"
                    htmlFor="sintomas"
                    >
                        Sintomas
                    </label>
                    <textarea
                    placeholder="Describa los Sintomas..."
                    id="sintomas"
                    type="textarea"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <input
                type="submit"
                className="bg-indigo-600 transition-all cursor-pointer hover:bg-indigo-700 uppercase w-full p-3 rounded-md text-white font-bold"
                value="Agregar Paciente"
                />
            </form>
        </div>
    )
}

export default Formulario