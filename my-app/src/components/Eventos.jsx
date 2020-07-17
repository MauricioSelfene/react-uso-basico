import React, { Fragment, useState } from 'react'

const Eventos = () => {

    const [texto, setTexto] = useState('texto desde estado')

    const eventoClick = () => {
        console.log('me diste click')
        setTexto('Cambiando al texto...')
    }

    return (
        <Fragment>
            <hr/>
            <h2>{ texto }</h2>
            <button onClick= {()=> eventoClick() }>Click</button>
        </Fragment>
    )
}

export default Eventos
