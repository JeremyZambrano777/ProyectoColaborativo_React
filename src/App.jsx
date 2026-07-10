import "./App.css";

import PerfilJeremyLider from "./components/PerfilJeremyLider";
import PerfilNixon  from "./components/PerfilNixon";

function App() {
  return (
    <>
      <h1>Proyecto Colaborativo en React</h1>

      <div className="contenedor">
        <PerfilJeremyLider />
        <PerfilNixon />

      </div>
    </>
  );
}


export default App
