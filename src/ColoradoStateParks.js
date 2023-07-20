import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";



function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"
  
  return (
    <div>
  <h1>Colorado State Parks!</h1>;
  <MesaVerde />
  
  </div>
  )
}

export default ColoradoStateParks;
