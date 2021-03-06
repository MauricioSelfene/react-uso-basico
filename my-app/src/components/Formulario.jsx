import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')
    const [lista, setLista] = React.useState([])


    const guardarDatos = (e) => {
        e.preventDefault()

        if (!fruta.trim()) {
            console.log('Esta vacio fruta, debe llenar este campo')
            return
        }
        if (!descripcion.trim()) {
            console.log('Esta vacio descripcion, debe llenar este campo')
            return
        }

        console.log('procesando datos...' + fruta + ' ' + descripcion)
  
        setLista([
            ...lista,
            { nombreFruta: fruta, nombreDescripcion: descripcion }
        ])

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }

    return (
        <div className="container mt-5">
            <h2>Formulario</h2>  
            <form onSubmit={ guardarDatos }>
                <input 
                    type="text"
                    placeholder="Ingrese fruta"
                    className="form-control mb-2"
                    onChange={ (e) => setFruta(e.target.value) }
                />
                <input 
                    type="text"
                    placeholder="Ingrese descripcion"
                    className="form-control mb-2"
                    onChange={ (e) => setDescripcion(e.target.value) }
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>
            <br/>
            <ul>
                {
                    lista.map((item, index) => (
                        <li key={index}>
                            {item.nombreFruta} - {item.nombreDescripcion}        
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Formulario
