import React from "react"; //Obiamente, importamos React.
import { DataProvider } from "./context/context"; //Importamos desestructurando, el DataProvider.
import "./App.css"; //Importamos el estilo.
import ComponentOne from "./components/ComponentOne"; //Importamos el componente.
import ComponentThree from "./components/ComponentThree";

function App() {
  return (
    <DataProvider>                {/* Envolvemos todo en el DataProvider */}
      <div>
        <p>COMPONENTE APP</p>
        <ComponentOne />          {/* Bueno, aquí lo utilizamos */}
        <ComponentThree />
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
