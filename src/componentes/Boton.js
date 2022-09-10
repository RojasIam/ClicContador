import React from "react";
import "../estilos/Boton.css"

function Boton ( {texto,esBotonDeClic, manejarClic} ){
  return(
    <button
      className={ esBotonDeClic ? "boton-clic" : "boton-reiniciar" }
      onClick={manejarClic} >
      { texto }
    </button>
  );
}

export default Boton;


//la reestructuracion de texto quiere decirq ue ya no sera necesaro usar la palabra props
//en cambio podemos reemplazarlo diractamente por la plabra que necesitamospero 
//entre llaves para su reestructuracion aparte que tbn pasaremos otros props con funciones