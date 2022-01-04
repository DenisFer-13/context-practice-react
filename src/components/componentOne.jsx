import React, { useContext } from 'react'       //Importamos useContext.
import { Context } from '../context/context'    //Importamos el contexto creado en context.jsx
import ComponentTwo from './ComponentTwo'

export default function ComponentOne() {
    const { name } = useContext(Context)    //Desestructuramos lo necesario y lo utilizamos.
    return (
        <div>
            <p>PROBANDO REACT CONTEXT. { name } </p>
            <ComponentTwo />
        </div>
    )
}
