import React from 'react'                             //Obiamente, importamos React.
import { DataProvider } from './context/context';     //Importamos desestructurando, el DataProvider.
import './App.css';                                   //Importamos el estilo.
import ComponentOne from './components/ComponentOne'; //Importamos el componente.
import ComponentThree from './components/ComponentThree';


function App() {
  return (
    <DataProvider>    {/* Envolvemos todo en el DataProvider */}
      <div>
        <p>COMPONENTE APP</p>
        <ComponentOne />        {/* Bueno, aquí lo utilizamos */}
        <ComponentThree />
      </div>
    </DataProvider>
  )
}

export default App;
