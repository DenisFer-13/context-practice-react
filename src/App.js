import React from 'react'
import { DataProvider } from './context/context';   //Importamos desestructurando, el DataProvider.
import './App.css';
import ComponentOne from './components/ComponentOne'; //Importamos el componente.


function App() {
  const name = 'Denis'
  return (
    <DataProvider>    {/* Envolvemos todo en el DataProvider */}
      <div style={{ backgroundColor: 'red', height: '400px', padding: '40px' }}>
        <p>COMPONENTE APP</p>
        <ComponentOne />        {/* Bueno, aquí lo utilizamos */}
      </div>
    </DataProvider>
  )
}

export default App;
