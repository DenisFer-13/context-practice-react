import React, { useContext } from 'react'
import { Context } from '../context/context'
import style from '../styles/ComponentTwo.module.css';


export default function ComponentTwo() {
    const { name } = useContext(Context)
    return (
        <div className={style.div}>
            <p>Y AQUÍ USAMOS DE VUELTA EL CONTEXT: {name}</p>
        </div>
    )
}
