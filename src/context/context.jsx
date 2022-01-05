const React = require("react");     //Esta es una forma de traer con require a React.
const { createContext } = React;    //Luego a React le destructuro createContext.

console.log('aquí', React);         //De hecho en este console.log podemos ver las cosas que tiene React.

export const Context = createContext();     //Exportamos el contexto, creado con createContext.

const name = 'Denis & Estefania'            //Este dato puede ser, una variable o utilizar un useState por ejemplo.

export const DataProvider = ({ children }) => {     //Le pasamos desestructurado children.
    return (
        <Context.Provider value={{ name }}>  {/* Aquí pasamos value con el dato que queremos enviar*/}
            {children}      {/* children van a ser los hijos del provider, OBLIGATORIO QUE ESTÉ*/}
        </Context.Provider>
    )
}
