import React from 'react'
import ComponentOne from './components/componentOne';
import './App.css';


function App() {
  const name = 'Denis'
  return (
    <div style={{ backgroundColor: 'red', height: '400px', padding: '40px' }}>
      <p>COMPONENTE APP</p>
      <ComponentOne name={name} />
    </div>
  )
}

export default App;
