import React, { createContext } from "react";

export const Context = createContext();     //Exportamos el contexto, creado con createContext.

const name = 'Denis & Estefania'            //Este dato puede ser, una variable o utilizar un useState por ejemplo.

export const DataProvider = ({ children }) => {     //Le pasamos desestructurado children.
    return (
        <Context.Provider value={{ name }}>  {/* Aquí pasamos value con el dato que queremos enviar*/}
            {children}      {/* children van a ser los hijos del provider, OBLIGATORIO QUE ESTÉ*/}
        </Context.Provider>
    )
}
