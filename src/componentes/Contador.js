import React from "react" ;
import "../estilos/Contador.css"

function Contador ({ numCLics }) {

 return (
  <div className="contador">
     {numCLics}
  </div>
);

}

export default Contador;