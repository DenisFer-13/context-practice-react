import React, { useContext } from 'react'
import { Context } from '../context/context'

export default function ComponentTwo() {
    const { name } = useContext(Context)
    return (
        <div style={{backgroundColor:'purple', padding:'20px'}}>
            <p>Y AQUÍ USAMOS DE VUELTA EL CONTEXT: { name }</p>
        </div>
    )
}
