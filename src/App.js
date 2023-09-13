import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const [contador, setContador]=useState(0)
  
  function suma(){
    setContador(contador+1)
  }

  return (
   <div>
    <NavBar  >
      <h1>Alias, Tienda de instrumentos</h1>
      
    </NavBar>
    
    <div>

      <h2>Contador</h2>
      
      <button onClick={suma}>Comprar</button>
      <br/><div >{contador}</div>

      <ItemListContainer greeting='Bienvenido' />

    </div>
   </div>
  );
}

export default App;