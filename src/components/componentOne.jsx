import React from 'react'
import ComponentTwo from './componentTwo'

function componentOne({ name }) {
    return (
        <div style={{backgroundColor:'white', height:'200px', padding:'20px'}} >
            <p>COMPONENTE ONE</p>
            <ComponentTwo name={name} />
        </div>
    )
}

export default componentOne
