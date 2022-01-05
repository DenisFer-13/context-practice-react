import React, { useContext } from 'react'       //Importamos useContext.
import { Context } from '../context/context'    //Importamos el contexto creado en context.jsx
import ComponentTwo from './ComponentTwo'
import style from '../styles/ComponentOne.module.css';

export default function ComponentOne() {
    const { name } = useContext(Context)    //Desestructuramos lo necesario y lo utilizamos.
    return (
        <div className={style.div}>
            <p>PROBANDO REACT CONTEXT. { name } </p>
            <ComponentTwo />
        </div>
    )
}
