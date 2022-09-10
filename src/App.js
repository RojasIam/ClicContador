
import './App.css';
import Boton from './componentes/Boton.js';
import Contador from "./componentes/Contador.js";
import  Andresrojas from './imagenes/Andresrojas.png';
import  {useState} from "react";

function App() { 

    const [numCLics,setNumClics] = useState (0); 

    const  manejoClic = () =>{
      setNumClics (numCLics + 1);

  };
  
    const reiniciarClic = () => {
      
      setNumClics(0);

  };


return (
    <div className="App">
      
        <div className='logo-principal-andres' >
          <img 
              className='logo-andres' 
              src={Andresrojas} 
              alt="logo de andres" />
        </div>
        <div className='contenedor-principal'>
          <Contador numCLics ={numCLics} />
          < Boton 
            texto="CLIC"
            esBotonDeClic={true}
            manejarClic={manejoClic} />
          < Boton 
            texto="RESET"
            esBotonDeClic={false}
            manejarClic={reiniciarClic} />
          
        </div>
    </div>
  );
}

export default App;


/* ver concepto de funcion flecha  */
//function App() {
/*
  const  manejoClic = () =>{
    console.log("Clic");

  }
  
  const reiniciarClic = () {


  } */


  /* ojo que al asignar los props la funciona de manejarClic se esta estaleciento en el mismo archivo App.js  */

  //usaremos hoonks pare enlazar la interactividad del clic y la actualizacion del numero. 
//un hook que usaremos sera: useState 







